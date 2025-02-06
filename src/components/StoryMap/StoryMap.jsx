import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import axios from "axios";
import { useFetchData } from '../../hooks/useFetchData'

import "maplibre-theme/icons.lucide.css";
import "maplibre-theme/modern.css";
import './StoryMap.scss'
import styles from './StoryMap.module.scss'

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

const MAP_SETTINGS ={
    minZoom: 4,
    maxZoom: 19,
    rollEnabled: false,
    hash: false,
    attributionControl: false,
    failIfMajorPerformanceCaveat: true,
    preserveDrawingBuffer: true,
    projection: 'lambertConformalConic',
    fadeDuration: 700,
    renderWorldCopies: false,
    keyboard: true,
    maxBounds: MAX_BOUNDS
}  

const StoryMap = () => {
    const mapRef = useRef(null);
    const { data } = useFetchData('/data/layers_chapter.json');

    useEffect(() => {
        if (!data) return
        
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
            addGeoPolygon(map, data)
            addGeoPoint(map, data);
        })

        map.on('move', () => {
          console.log(map.getBounds())
        })

        return () => map.remove()
    }, [data])

    return (<div className={styles.map__outer}>
        <div ref={mapRef} className={`map-style ${styles.mapContainer}`}></div>
    </div>);
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
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#888',
                'line-width': 8
            }
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return
    }
}

async function addGeoPoint(map, geojson) {
    if (!map && !geojson) {
        console.error("Invalid GeoJSON data or map instance.");
        return;
    }

    try {
        const { id, city_layer } = geojson[0];
        const response = await axios.get(`/layers/${city_layer}`);
        const data = response.data;
        console.log(geojson, id, city_layer)
    
        if (!map.getSource(id)) {
          map.addSource(id, { type: "geojson", data });
    
          map.addLayer({
            id: `${id}-layer`,
            type: "heatmap",
            source: id,
            layout: {},
            paint: {
              "heatmap-radius": 30, // Heatmap point radius
              "heatmap-weight": 1, // Weight of points
              "heatmap-intensity": 1, // Intensity scaling
              "heatmap-opacity": 1, // Opacity
              "heatmap-color": [
                "interpolate",
                ["linear"],
                ["heatmap-density"],
                0, "rgba(0,0,255,0)",
                0.5, "blue",
                1, "red"
              ] // Gradient color mapping
            },
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return
    }
}

async function addGeoPolygon(map, geojson) {
    if (!map || !geojson) {
      console.error("Invalid GeoJSON data or map instance.");
      return;
    }

    try {
        let { id, boundary95_layer } = geojson[0];
        console.log(id, boundary95_layer)
        const response = await axios.get(`/layers/${boundary95_layer}`);
        const data = response.data;
        id += '-polygon'
    
        if (!map.getSource(id)) {
          map.addSource(id, { type: "geojson", data });
    
          map.addLayer({
            id: `${id}-layer`,
            type: "fill",
            source: id,
            layout: {
              "visibility": "visible" // visible or none
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
        return
    }

}

export default StoryMap;