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
  
  // Initialize enableWarning based on localStorage
  const enableWarning = ref(localStorage.getItem("enableWarning") === 'true');
  
  // Function to toggle the enableWarning state and store it in localStorage
  function toggleWarning() {
    enableWarning.value = !enableWarning.value;
    localStorage.setItem("enableWarning", enableWarning.value);
  }
  
  // Watch for changes in enableWarning and update localStorage
  watch(enableWarning, (newValue) => {
    localStorage.setItem("enableWarning", newValue);
  });
  </script>
  