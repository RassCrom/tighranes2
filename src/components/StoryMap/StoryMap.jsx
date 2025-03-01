import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { useFetchData } from '../../hooks/useFetchData';
import battles from '../../assets/great_armenia_battle_v3.json'
import LegendControl from 'mapboxgl-legend';

import 'mapboxgl-legend/dist/style.css';
import "mapbox-gl/dist/mapbox-gl.css";
import './StoryMap.scss';
import styles from './StoryMap.module.scss';

import { countryColor } from "./countryColor";

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;

const STARTING_POINT = {
  center: [38.16, 40.35],
  pitch: 0,
  bearing: 0,
  zoom: 5
};

const MAX_BOUNDS = [
  [10.0, 10.0],
  [75.0, 65.0]
];

const MAP_SETTINGS = {
  minZoom: 4,
  maxZoom: 19,
  attributionControl: false,
  preserveDrawingBuffer: true,
  fadeDuration: 700,
  renderWorldCopies: false,
  maxBounds: MAX_BOUNDS
};

mapboxgl.accessToken = mapboxToken;

function addSymbolLayer(map) {
  map.addLayer({
      'id': 'points',
      'type': 'symbol',
      'source': 'geojson-source',
      'layout': {
          'icon-image': 'custom-icon',
          'icon-size': 1.5, // Adjust the size as needed
          'icon-allow-overlap': true
      }
  });
}

const StoryMap = ({ openMap }) => {
  const mapRef = useRef(null);
  const { data } = useFetchData('/data/layers.json');
  const [scrollPosition, setScrollPosition] = useState(0);

  const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };
  
  const flyToLayerBounds = (map, layerId, zoom) => {
    const features = map.queryRenderedFeatures({ layers: [layerId] });
    if (features.length > 0) {
        const bounds = new mapboxgl.LngLatBounds();
        features.filter(name => name.properties['Name']=== 'Great Armenia').forEach(feature => {
            if (feature.geometry.type === 'Polygon') {
                feature.geometry.coordinates[0].forEach(coord => {
                    bounds.extend(coord);
                });
            }
        });
        
        map.flyTo({
            center: bounds.getCenter(),
            zoom: zoom || 5.3,
            duration: 1000,
            essential: true
        });
    } else {
        console.log('Layer not found');
    }

  };

  useEffect(() => {
    if (!data) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: '/layers/basemap.json',
      ...STARTING_POINT,
      ...MAP_SETTINGS
    });

    const legend = new LegendControl({
      layers: ['great_armenia_borders_3_7-layer'],
      // collapsed: true,
      minimized: true,
      highlight: true
    });
    map.addControl(legend, 'bottom-left');
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
    map.dragRotate.disable();

    map.on('load', async () => {
      map.addSource('armenia-battles', {
        type: 'geojson',
        data: battles
      });

      // Preload all data first
      const allLayers = [
        ...data[0].polygons.map(layer => ({ ...layer, type: 'fill' })),
        ...data[0].lines.map(layer => ({ ...layer, type: 'line' })),
        ...data[0].points.map(layer => ({ ...layer, type: 'circle' }))
      ];
    
      await Promise.all(allLayers.map(layer => preloadSource(map, layer)));
    
      // Add layers in visual order after all sources are ready
      addAllLayersInOrder(map, data[0].polygons, 'fill');
      addAllLayersInOrder(map, data[0].lines, 'line');
      addAllLayersInOrder(map, data[0].points, 'circle');

          
      map.loadImage('/images/sword.png', (error, image) => {
        if (error) throw error;
        
        if (!map.hasImage('custom-icon')) {
            map.addImage('custom-icon', image);
        }
    
        map.addLayer({
            'id': 'armenia-battles-layer',
            'type': 'symbol',
            'source': 'armenia-battles',
            'layout': {
                'icon-image': 'custom-icon',
                'icon-size': .25,
                'icon-allow-overlap': true,
                'icon-offset': [60, 0]
            }
        });
      });

      const popup = new mapboxgl.Popup({
        className: 'custom-popup',
        offset: -85
      });
      
      const setupLayerInteractivity = (map, layerId, type) => {
        const clickHandler = (e) => {
          const currentOpacity = map.getPaintProperty(`${layerId}-layer`, `${type}-opacity`);
          if (currentOpacity > 0 || type === 'icon') {
            if (popup.isOpen()) popup.remove();
            
            const coordinates = e.lngLat;
            const countryName = e.features[0].properties.Name || e.features[0].properties.name;
      
            popup.setLngLat(coordinates)
              .setHTML(`<div class="popup-content"><h3 class="country-name">${countryName} ${type === 'icon' ? e.features[0].properties.date : ''}</h3></div>`)
              .addTo(map);
          }
        };
      
        const mouseEnterHandler = () => {
          const currentOpacity = map.getPaintProperty(`${layerId}-layer`, `${type}-opacity`);
          if (currentOpacity > 0 || type === 'icon') {
            map.getCanvas().style.cursor = 'pointer';
          }
        };
      
        const mouseLeaveHandler = () => {
          map.getCanvas().style.cursor = '';
        };
      
        map.on('click', `${layerId}-layer`, clickHandler);
        map.on('mouseenter', `${layerId}-layer`, mouseEnterHandler);
        map.on('mouseleave', `${layerId}-layer`, mouseLeaveHandler);
      };
      
      [...data[0].polygons].forEach((id) => {
        setupLayerInteractivity(map, id.id, 'fill');
      });
      setupLayerInteractivity(map, 'great_armenia_cities', 'circle');
      setupLayerInteractivity(map, 'armenia-battles', 'icon');

    });

    let isFlying = false;

    const handleScroll = () => {
      if (isFlying) return; // Prevent interruptions

      requestAnimationFrame(() => {
        isFlying = true;
        const position = window.scrollY;
        setScrollPosition(position);

        if (position < 1100) {
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position >= 1100 && position <= 6090) {
          flyToLayerBounds(map, 'great_armenia_borders_1-layer');
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 6090 && position <= 8156) {
          flyToLayerBounds(map, 'great_armenia_borders_2-layer', 4.5);
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 1);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 8156 && position <= 9500) {
          flyToLayerBounds(map, 'great_armenia_borders_3_7-layer');
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 1);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 9500 && position <= 11490) {
          flyToLayerBounds(map, 'great_armenia_borders_4-layer');
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 1);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 12100 && position <= 13400) {
          flyToLayerBounds(map, 'great_armenia_borders_5-layer', 4.8);
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 1);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 13400 && position <= 15184) {
          flyToLayerBounds(map, 'great_armenia_borders_6-layer', 4.3);
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 1);
        } else if (position > 15184 && position <= 18884) {
          flyToLayerBounds(map, 'great_armenia_borders_7-layer', 4.5);
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 1);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        } else if (position > 18884) {
          flyToLayerBounds(map, 'great_armenia_borders_8-layer', 5);
          map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
          map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 1);
          map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
          map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
        }

        setTimeout(() => (isFlying = false), 200);
      });
    };
    const debouncedHandleScroll = debounce(handleScroll, 150);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      map.remove();
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [data]);

  return (
    <div className={`${styles.map__outer}  ${openMap ? 'open__map' : ''}`}>
      <div ref={mapRef} className={`map-style ${styles.mapContainer}`}></div>
    </div>
  );
};

// Helper function to preload sources
const preloadSource = async (map, layer) => {
  try {
    const response = await axios.get(`/layers/${layer.geojsonFile}`);
    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, { type: 'geojson', data: response.data });
    }
  } catch (error) {
    console.error('Error preloading source:', error);
  }
};

// Helper function to add layers quickly after preloading
const addAllLayersInOrder = (map, layers, type) => {
  layers.forEach(layer => {
    if (!map.getLayer(`${layer.id}-layer`)) {
      const layerConfig = createLayerConfig(layer, type);
      map.addLayer(layerConfig);
    }
  });
};

const createLayerConfig = (layer, type) => {
  const baseConfig = {
    id: `${layer.id}-layer`,
    type,
    source: layer.id,
    layout: { visibility: 'visible' }
  };

  const paintConfigs = {
    circle: {
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 5, 3, 10, 6, 15, 10],
      'circle-color': '#fff',
      'circle-opacity': 0.8,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#000'
    },
    line: {
      'line-color': '#888',
      'line-width': 8,
      'line-opacity': 0
    },
    fill: {
      'fill-color': ['match', ['get', 'Name'], ...Object.entries(countryColor).flat(), '#808080'],
      'fill-outline-color': '#5a3e1b',
      'fill-opacity': 0
    }
  };
  const layoutConfigs = {
    circle: {
    },
    line: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    fill: {
    }
  };

  return { ...baseConfig, paint: paintConfigs[type], layout: layoutConfigs[type] };
};

export default StoryMap;
