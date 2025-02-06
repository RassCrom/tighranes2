import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import axios from "axios";
import { useFetchData } from '../../hooks/useFetchData'

import "maplibre-gl/dist/maplibre-gl.css";
import styles from './StoryMap.module.scss'

const STARTING_POINT = {
    center: [38.16, 40.35],
    pitch: 0,
    bearing: 0,
    zoom: 5
};

const MAX_BOUNDS = [
    [10.9297944, 15.2662687], // Southwest corner (minLng, minLat)
    [45.99275, 65.9618] // Northeast corner (maxLng, maxLat)
];

const MAP_SETTINGS ={
    minZoom: 4,
    maxZoom: 19,
    rollEnabled: false,
    hash: false,
    attributionControl: false,
    failIfMajorPerformanceCaveat: true,
    preserveDrawingBuffer: true,
    projection: 'winkelTripel',
    fadeDuration: 700,
    renderWorldCopies: false,
    keyboard: true,
    // maxBounds: MAX_BOUNDS
}  

const StoryMap = () => {
    const mapRef = useRef(null);
    const { data } = useFetchData('/data/layers_chapter.json');

    useEffect(() => {
        if (!data) return
        
        const map = new maplibregl.Map({
            container: mapRef.current,
            style: '/layers/custom_style.json',
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
            addGeoPoint(map, data)
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
            type: "circle",
            source: id,
            layout: {},
            paint: {
                'circle-color': '#8CCFFF',
                'circle-radius': 6,
                'circle-opacity': 1
            },
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return
    }
}

async function addGeoPolygon(map, geojson) {
    if (!map || !geojson || !geojson.id || !geojson.layer) {
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
            type: "fill",
            source: id,
            paint: {
              "fill-color": "#0080ff",
              "fill-opacity": 0.6,
            },
          });
        }
    } catch (error) {
        console.error("Error loading GeoJSON:", error);
        return
    }

}

export default StoryMap;