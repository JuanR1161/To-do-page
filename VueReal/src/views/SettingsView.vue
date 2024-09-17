<template>
    <div class="todo-container bg-success-subtle ">

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


    </div>

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


<style>
.completed {
    color: green !important;
    font-weight: bold !important;
}


.todo-container {
    border: 2px solid #000000;
    border-radius: 0px;
    padding: 0px;

    margin: 50px;
    background-color: #f8f9fa;
}

.style-a {

    color: black !important;
    font-weight: bold;
    margin: auto;
}

.bg-success-subtle {
    padding: 40px;
}
</style>