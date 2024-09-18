<template>
    <div id="map" ref="mapContainer" style="height: 500px; width: 100%;"></div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'LeafletMap',
    setup() {
      const mapContainer = ref(null);
  
      onMounted(() => {
        if (mapContainer.value) {
          const map = L.map(mapContainer.value).setView([51.505, -0.09], 13);
  
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
  
          L.marker([51.505, -0.09]).addTo(map);
        }
      });
  
      return {
        mapContainer
      };
    }
  };
  </script>
  
  <style>
  #map {
    height: 500px;
    width: 100%;
  }
  </style>
  