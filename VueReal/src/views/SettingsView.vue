<template>
    <div class="todo-container bg-success-subtle">
        <h1>Settings</h1>

        <div class="setting-item">
            <p>Ask when you want to delete a task</p>
            <button @click="toggleWarning" class="square-button">
                <template v-if="enableWarning">
                    ✔️
                </template>
                <template v-else>
                    ✖
                </template>
            </button>
        </div>

        <div class="setting-item">
            <p>Completed tasks color</p>
            <button @click="toggleTaskColor" :style="{ backgroundColor: currentColor }" class="square-button">
            </button>
        </div>
        <div class="setting-item">
            <p>On progress tasks color</p>
            <button @click="toggleTaskColor2" :style="{ backgroundColor: currentColor2 }" class="square-button2">
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { getEnablewarning } from '@/utils/settings';

const enableWarning = ref(getEnablewarning());
const taskColorOptions = ['green', 'purple', 'blue'];
const taskColorNames = { green: 'Green', purple: 'Purple', blue: 'Blue' };


const enableTaskColor = ref(localStorage.getItem("enableTaskColor") || 'green');
const currentColor = ref(enableTaskColor.value);
const currentColorName = ref(taskColorNames[enableTaskColor.value]);


const taskColorOptions2 = ['yellow', 'red', 'brown'];
const taskColorNames2 = { yellow: 'Yellow', red: 'Red', brown: 'Brown' };
const enableTaskColor2 = ref(localStorage.getItem("enableTaskColor2") || 'yellow');
const currentColor2 = ref(enableTaskColor2.value);
const currentColorName2 = ref(taskColorNames2[enableTaskColor2.value]);

function toggleWarning() {
    enableWarning.value = !enableWarning.value;
    localStorage.setItem("enableWarning", enableWarning.value);
}

function toggleTaskColor() {
    const currentIndex = taskColorOptions.indexOf(currentColor.value);
    const nextColor = taskColorOptions[(currentIndex + 1) % taskColorOptions.length];
    currentColor.value = nextColor;
    currentColorName.value = taskColorNames[nextColor];
    enableTaskColor.value = nextColor;
    localStorage.setItem("enableTaskColor", nextColor);
}

function toggleTaskColor2() {
    const currentIndex2 = taskColorOptions2.indexOf(currentColor2.value);
    const nextColor2 = taskColorOptions2[(currentIndex2 + 1) % taskColorOptions2.length];
    currentColor2.value = nextColor2;
    currentColorName2.value = taskColorNames2[nextColor2];
    enableTaskColor2.value = nextColor2;
    localStorage.setItem("enableTaskColor2", nextColor2);
}

watch(enableWarning, (newValue) => {
    localStorage.setItem("enableWarning", newValue);
});

watch(enableTaskColor, (newValue) => {
    localStorage.setItem("enableTaskColor", newValue);
});

watch(enableTaskColor2, (newValue) => {
    localStorage.setItem("enableTaskColor2", newValue);
});
</script>

<style>
.todo-container {
    border: 2px solid #000000;
    border-radius: 0px;
    padding: 0px;
    margin: 50px;
    background-color: #f8f9fa;
}

.bg-success-subtle {
    padding: 40px;
}

.setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.setting-item p {
    margin: 0;
    font-size: 18px;
}

.square-button, .square-button2 {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>
