<template>
    <h1>Settings</h1>
    Ask when you want to delete a task
    <button @click="toggleWarning">
      <template v-if="enableWarning">
        ✔️
      </template>
      <template v-else>
        ✖
      </template>
    </button>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  

  const enableWarning = ref(localStorage.getItem("enableWarning") === 'true');
 
  function toggleWarning() {
    enableWarning.value = !enableWarning.value;
    localStorage.setItem("enableWarning", enableWarning.value);
  }
  

  watch(enableWarning, (newValue) => {
    localStorage.setItem("enableWarning", newValue);
  });
  </script>
  