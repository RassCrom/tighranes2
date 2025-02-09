import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import axios from "axios";
import proj4 from "proj4";
import { useFetchData } from '../../hooks/useFetchData';

import "maplibre-theme/icons.lucide.css";
import "maplibre-theme/modern.css";
import './StoryMap.scss';
import styles from './StoryMap.module.scss';

proj4.defs("EPSG:9802", "+proj=lcc +lat_1=50 +lat_2=52 +lat_0=51 +lon_0=69 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs");

const STARTING_POINT = {
    center: [38.16, 40.35],
    pitch: 0,
    bearing: 0,
    zoom: 5
};

const MAX_BOUNDS = [
  [10.0, 10.0], // Southwest corner (minLng, minLat)
  [75.0, 65.0] // Northeast corner (maxLng, maxLat)
];

const MAP_SETTINGS = {
    minZoom: 4,
    maxZoom: 19,
    rollEnabled: false,
    attributionControl: false,
    preserveDrawingBuffer: true,
    projection: {
      name: 'custom',
      custom: {
          forward: (lnglat) => proj4("EPSG:4326", "EPSG:9802", lnglat),
          inverse: (coord) => proj4("EPSG:9802", "EPSG:4326", coord),
      },
    },
    fadeDuration: 700,
    renderWorldCopies: false,
    keyboard: true,
    doubleClickZoom: true,
    maxBounds: MAX_BOUNDS
};

const StoryMap = () => {
    const mapRef = useRef(null);
    const { data } = useFetchData('/data/layers_chapter.json');
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (!data) return;

        const map = new maplibregl.Map({
            container: mapRef.current,
            style: '/layers/basemap.json',
            ...STARTING_POINT,
            ...MAP_SETTINGS
        });

        map.addControl(
            new maplibregl.NavigationControl({
              visualizePitch: true,
              visualizeRoll: true,
              showZoom: true,
              showCompass: true,
            })
        );
        map.addControl(new maplibregl.FullscreenControl());

        map.on('load', () => {
          // TODO add id to the params
            addGeoPolygon(map, data);
            addGeoPoint(map, data);
        });

        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            if (position > 500 && position < 1000) {
                map.setLayoutProperty('prologue-polygon-layer', 'visibility', 'none');
                map.setLayoutProperty('prologue-layer', 'visibility', 'visible');
            } else if (position > 1000) {
                map.setLayoutProperty('prologue-layer', 'visibility', 'none');
            } else {
                map.setLayoutProperty('prologue-polygon-layer', 'visibility', 'visible');
                map.setLayoutProperty('prologue-layer', 'visibility', 'none');
            }
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

async function addGeoLine(map, geojson) {
    if (!map || !geojson) {
      console.error("Invalid GeoJSON data or map instance.");
      return;
    }

    try {
        const { id, layer } = geojson;
        const response = await axios.get(`/layers/${layer}`);
        const data = response.data;
    
        if (!map.getSource(id)) {
          map.addSource(id, { type: "geojson", data });
    
          map.addLayer({
            id: `${id}-layer`,
            type: "line",
            source: id,
            layout: {
                'line-join': 'round',
                'line-cap': 'round',
                'visibility': 'none' // По умолчанию слой отключен
            },
            paint: {
                'line-color': '#888',
                'line-width': 8
            }
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return;
    }
}

async function addGeoPoint(map, geojson) {
    if (!map || !geojson) {
        console.error("Invalid GeoJSON data or map instance.");
        return;
    }

    try {
        const { id, city_layer } = geojson[0];
        const response = await axios.get(`/layers/${city_layer}`);
        const data = response.data;
    
        if (!map.getSource(id)) {
          map.addSource(id, { type: "geojson", data });
    
          map.addLayer({
            id: `${id}-layer`,
            type: "heatmap",
            source: id,
            layout: {
                'visibility': 'none' // По умолчанию слой отключен
            },
            paint: {
              "heatmap-radius": 30,
              "heatmap-weight": 1,
              "heatmap-intensity": 1,
              "heatmap-opacity": 1,
              "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(0,0,255,0)",
                0.5, "blue",
                1, "red"
              ]
            },
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return;
    }
}

async function addGeoPolygon(map, geojson) {
    if (!map || !geojson) {
      console.error("Invalid GeoJSON data or map instance.");
      return;
    }

    try {
        let { id, boundary95_layer } = geojson[0];
        const response = await axios.get(`/layers/${boundary95_layer}`);
        const data = response.data;
        id += '-polygon';
        console.log(`${id}-layer`)
    
        if (!map.getSource(id)) {
          map.addSource(id, { type: "geojson", data });
    
          map.addLayer({
            id: `${id}-layer`,
            type: "fill",
            source: id,
            layout: {
                "visibility": "visible" // По умолчанию слой включен
            },
            paint: {
              "fill-color": "#6b5b38",
              "fill-outline-color": '#5a3e1b',
              "fill-opacity": 1,
              "fill-antialias": true
            },
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return;
    }
}

export default StoryMap;