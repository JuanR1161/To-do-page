<template>
  <div v-if="showSection === 'list'">
    <h1>To do list</h1>
    <table class="table table-striped">
      <tbody>
        <tr v-for="(item, index) in nameList" :key="index">
          <td :class="{ completed: item.checked }">
            {{ item.name }}
          </td>
          <td>
            <button @click="toggleCheckmark(index)">
              <span class="checkmark">✔️</span>
            </button>
            <button @click="delMessage(index)">
              <span class="checkmark">✖</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <input v-model="newName" />
    <button @click="addName">Add</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

function getEnableWarning() {
  const storedValue = localStorage.getItem("enableWarning");
  return storedValue === 'true'; 
}

const showSection = ref('list');
const newName = ref('');
const nameList = ref([]);

// Load the nameList from localStorage when the component is mounted
onMounted(() => {
  const storedList = localStorage.getItem('nameList');
  if (storedList) {
    nameList.value = JSON.parse(storedList);
  }
});

function saveListToLocalStorage() {
  localStorage.setItem('nameList', JSON.stringify(nameList.value));
}

function addName() {
  const noname = newName.value.trim();
  if (noname) {
    nameList.value.push({ name: noname, checked: false });
    newName.value = '';
    saveListToLocalStorage();
  }
}

function delMessage(index) {
  if (getEnableWarning()) {
    if (window.confirm("Do you really want to delete the task?")) {
      nameList.value.splice(index, 1);
      saveListToLocalStorage();
    }
  } else {
    nameList.value.splice(index, 1);
    saveListToLocalStorage();
  }
}

function toggleCheckmark(index) {
  nameList.value[index].checked = !nameList.value[index].checked;
  saveListToLocalStorage();
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
