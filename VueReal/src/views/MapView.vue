<template>
    <div class="todo-container">
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
  .todo-container {
    border: 2px solid #000000;
    border-radius: 0px;
    padding: 0px;
  
    background-color: #f8f9fa;
  }
  
  .style-a {
  
    color: black !important;
    font-weight: bold;
  
  }
  
  .bg-success-subtle {
    padding: 40px;
  }
  
  .completed {
    font-weight: bold;
    color: green;
  }
  </style>