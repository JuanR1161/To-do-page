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
    const map = ref(null);

    const initializeMap = () => {
      map.value = L.map(mapContainer.value).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.value);

      L.marker([51.505, -0.09]).addTo(map.value);
    };

    const locateUser = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          map.value.setView([latitude, longitude], 13);
          L.marker([latitude, longitude]).addTo(map.value)
            .bindPopup('You are here')
            .openPopup();
        }, (error) => {
          console.error('Error getting location', error);
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    };

    onMounted(() => {
      if (mapContainer.value) {
        initializeMap();
        locateUser();
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
