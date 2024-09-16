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
import { ref } from 'vue'

// Read the warning setting from localStorage and convert it to a boolean
function getEnableWarning() {
  const storedValue = localStorage.getItem("enableWarning");
  return storedValue === 'true'; // Convert string to boolean
}

const showSection = ref('list');
const newName = ref('');
const nameList = ref([]);

// Function to add a new name to the list
function addName() {
  const noname = newName.value.trim();
  if (noname) {
    nameList.value.push({ name: noname, checked: false });
    newName.value = '';
  }
}

// Function to delete an item with a confirmation prompt if required
function delMessage(index) {
  if (getEnableWarning()) {
    if (window.confirm("Do you really want to delete the task?")) {
      nameList.value.splice(index, 1);
    }
  } else {
    nameList.value.splice(index, 1);
  }
}

// Function to toggle the checked state of an item
function toggleCheckmark(index) {
  nameList.value[index].checked = !nameList.value[index].checked;
}
</script>
