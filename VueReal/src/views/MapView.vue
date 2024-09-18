<template>
    <div>
      <LeafletMap />
    </div>
  </template>
  
  <script>
  import LeafletMap from '@/components/LeafletMap.vue';
  
  export default {
    name: 'MapView',
    components: {
      LeafletMap
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  