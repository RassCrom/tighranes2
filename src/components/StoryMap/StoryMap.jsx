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

  const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

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
      data[0].polygons.forEach(layer => addLayer(map, layer, "fill"));
      data[0].lines.forEach(layer => addLayer(map, layer, "line"));
      data[0].points.forEach(layer => addLayer(map, layer, "circle"));
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
      } else if (position > 11490 && position <= 13000) {
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
      } else if (position > 13000 && position <= 14523) {
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
      } else if (position > 14523 && position <= 16901) {
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
      } else if (position > 16901) {
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
    <div className={styles.map__outer}>
      <div ref={mapRef} className={`map-style ${styles.mapContainer}`}></div>
    </div>
  );
};

const addLayer = async (map, layer, type) => {
  try {
    const response = await axios.get(`/layers/${layer.geojsonFile}`);
    const data = response.data;

    if (!map.getSource(layer.id)) {
      map.addSource(layer.id, { type: "geojson", data });

      const layerConfig = {
        id: `${layer.id}-layer`,
        type,
        source: layer.id,
        layout: { visibility: "visible" },
      };

      if (type === "circle") {
        layerConfig.paint = {
          "circle-radius": ["interpolate", ["linear"], ["zoom"], 5, 3, 10, 6, 15, 10],
          "circle-color": "#fff",
          "circle-opacity": 0.8,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#000",
          "circle-stroke-opacity": 0.5
        };
        
      } else if (type === "line") {
        layerConfig.layout = {
          'line-join': 'round',
          'line-cap': 'round',
        }
        layerConfig.paint = {
          "line-color": "#888",
          "line-width": 8,
          "line-opacity": 0
        };
      } else if (type === "fill") {
        layerConfig.paint = {
        "fill-color": [
          "match",
          ["get", "Name"],
          ...Object.entries(countryColor).flat(),
          "#808080"
        ],
        "fill-outline-color": "#5a3e1b",
        "fill-opacity": 0
      };
      }

      map.addLayer(layerConfig);
    }
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
  }
};


export default StoryMap;
