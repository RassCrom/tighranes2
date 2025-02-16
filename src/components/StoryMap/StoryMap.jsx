import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";
import { useFetchData } from '../../hooks/useFetchData';

import "mapbox-gl/dist/mapbox-gl.css";
import './StoryMap.scss';
import styles from './StoryMap.module.scss';

import { countryColor } from "./coutnryColor";

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

const StoryMap = () => {
  const mapRef = useRef(null);
  const { data } = useFetchData('/data/layers.json');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!data) return;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: '/layers/basemap.json',
      ...STARTING_POINT,
      ...MAP_SETTINGS
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.FullscreenControl());
    map.dragRotate.disable()

    map.on('load', () => {
      data[0].polygons.forEach(layer => addGeoPolygon(map, layer));
      data[0].lines.forEach(layer => addGeoLine(map, layer));
      data[0].points.forEach(layer => addGeoPoint(map, layer));
    });

    let isFlying = false;

const handleScroll = () => {
  if (isFlying) return; // Prevent interruptions

  requestAnimationFrame(() => {
    isFlying = true;
    const position = window.scrollY;
    setScrollPosition(position);
    console.log(position)

    if (position < 1100) {
      map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
    } else if (position >= 1100 && position <= 6090) {
      map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 1);
      map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
    } else if (position > 6090 && position <= 8156) {
      map.setPaintProperty('great_armenia_borders_1-layer', 'fill-opacity', 0);
      map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 1);
      map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 1);
      map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
    } else if (position > 8156 && position <= 9500) {
      map.setPaintProperty('great_armenia_borders_2-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_2-layer', 'line-opacity', 0);
      map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 1);
      map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 1);
      map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
    } else if (position > 9500 && position <= 11490) {
      map.setPaintProperty('line_great_armenia_3-layer', 'line-opacity', 0);
      map.setPaintProperty('great_armenia_borders_3_7-layer', 'fill-opacity', 0);
      map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 1);
      map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 1);
      map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', );
    } else if (position > 11490 && position <= 13000) {
      map.setPaintProperty('great_armenia_borders_4-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_4-layer', 'line-opacity', 0);
      map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 1);
      map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 1);
      map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
    } else if (position > 13000 && position <= 14500) {
      map.setPaintProperty('great_armenia_borders_5-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_5-layer', 'line-opacity', 0);
      map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 1);
      map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 1);
      map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
    } else if (position > 14500 && position <= 16901) {
      map.setPaintProperty('great_armenia_borders_6-layer', 'fill-opacity', 0);
      map.setPaintProperty('line_great_armenia_6-layer', 'line-opacity', 0);
      map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 1);
      map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 0);
    } else if (position > 16901 && position <= 18000) {
      map.setPaintProperty('great_armenia_borders_7-layer', 'fill-opacity', 0);
      map.setPaintProperty('great_armenia_borders_8-layer', 'fill-opacity', 1);
    }

    setTimeout(() => (isFlying = false), 1500); // Prevent rapid flyTo calls
    });
  };

  window.addEventListener('scroll', handleScroll);

    return () => {
      map.remove();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  return (
    <div className={styles.map__outer}>
      <div ref={mapRef} className={`map-style ${styles.mapContainer}`}></div>
    </div>
  );
};

async function addGeoLine(map, layer) {
  try {
    const response = await axios.get(`/layers/${layer.geojsonFile}`);
    const data = response.data;
    console.log(`${layer.id}-layer`)
    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, { type: "geojson", data });
      map.addLayer({
        id: `${layer.id}-layer`,
        type: "line",
        source: layer.id,
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'visible'
        },
        paint: {
          'line-color': '#888',
          'line-width': 8,
          'line-opacity': 0
        }
      });
    }
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}

async function addGeoPoint(map, layer) {
  try {
    const response = await axios.get(`/layers/${layer.geojsonFile}`);
    const data = response.data;
    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, { type: "geojson", data });
      map.addLayer({
        id: `${layer.id}-layer`,
        type: "circle",
        source: layer.id,
        layout: { 'visibility': 'visible' },
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            5, 3,
            10, 6,
            15, 10
          ],
          'circle-color': '#fff',
          'circle-opacity': 0.8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#000',
          'circle-stroke-opacity': 0.5
        }
      });
    }
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}

async function addGeoPolygon(map, layer) {
  try {
    const response = await axios.get(`/layers/${layer.geojsonFile}`);
    const data = response.data;

    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, { type: "geojson", data });
      map.addLayer({
        id: `${layer.id}-layer`,
        type: "fill",
        source: layer.id,
        layout: { visibility: "visible" },
        paint: {
          "fill-color": [
            "match",
            ["get", "Name"],
            ...Object.entries(countryColor).flat(),
            "#808080"
          ],
          "fill-outline-color": "#5a3e1b",
          "fill-opacity": 0,
          "fill-opacity-transition": { duration: 500 }
        }
      });
    }
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
}


export default StoryMap;
