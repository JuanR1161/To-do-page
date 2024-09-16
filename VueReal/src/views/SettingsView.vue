<template>
    <h1>Settings</h1>
    Ask when you want to delete a task
    <button @click="askdel">
      <template v-if="enableWarning">
        ✔️
      </template>
      <template v-else>
        ✖
      </template>
    </button>
</template>


<script setup>


import { ref } from 'vue'
const enableWarning = ref(localStorage.getItem("enableWarning"));
function askdel() {
    enableWarning.value = !enableWarning.value;
    console.log('Warning enabled:', enableWarning.value);
    localStorage.setItem("enableWarning", enableWarning.value);
}


</script>