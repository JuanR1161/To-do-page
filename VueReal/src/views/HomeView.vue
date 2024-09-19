<template>
  <div v-if="showSection === 'list'" class="todo-container bg-success-subtle">
    <h1>To do list</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in nameList" :key="index">
          <td :class="getClass(item)">
            {{ item.name }}
          </td>
          <td>
            {{ item.descr }}
          </td>
          <td>
            {{ format_time(item.createdDate) }}
          </td>
          <td>
            <div class="style-b">
              <button @click="toggleCheckmark(index)">
                <span class="checkmark">✔️</span>
              </button>
              <button @click="pendingMessage(index)">
                <span class="checkmark">⌛</span>
              </button>
              <button @click="editTask(index)">
                <span class="checkmark">✏️</span>
              </button>
              <button @click="delMessage(index)">
                <span class="checkmark">✖</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>Title</h2>
    <input v-model="newTask.title" />
    <h2>Description</h2>
    <input v-model="newTask.descr" />
   
    <button :disabled="!canAddTask" @click="addTask">Add</button>
  </div>
</template>

<script setup>
import { getEnablewarning } from '@/utils/settings';
import { ref, onMounted, computed } from 'vue';

const showSection = ref('list');
const newTask = ref({
  title: '',
  descr: ''
});
const nameList = ref([]);
const taskColor = ref(localStorage.getItem('enableTaskColor') || 'green');

const canAddTask = computed(() => {
  return newTask.value.title.trim() !== '' && newTask.value.descr.trim() !== '';
});

function format_time(timestamp) {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC'
  });
  return dtFormat.format(new Date(timestamp));
}

function editTask(index) {
  const enableWarning = getEnablewarning();
  const task = nameList.value[index];
  if (enableWarning) {
    if (window.confirm("Edit your task")) {

      newTask.value.title = task.name;
      newTask.value.descr = task.descr;
      nameList.value.splice(index, 1);
      saveListToLocalStorage();
    }
  } else {
    newTask.value.title = task.name;
    newTask.value.descr = task.descr;
    nameList.value.splice(index, 1);
    saveListToLocalStorage();
  }
}



function addTask() {
  const noname = newTask.value.title.trim();
  if (noname) {
    nameList.value.push({
      name: noname,
      checked: false,
      pending: false,
      descr: newTask.value.descr,
      createdDate: Date.now()
    });

    newTask.value.title = '';
    newTask.value.descr = '';
    saveListToLocalStorage();
  }
}

onMounted(() => {
  const storedList = localStorage.getItem('nameList');
  if (storedList) {
    nameList.value = JSON.parse(storedList);
  }
  taskColor.value = localStorage.getItem('enableTaskColor') || 'green';
});

function saveListToLocalStorage() {
  localStorage.setItem('nameList', JSON.stringify(nameList.value));
}

function pendingMessage(index) {
  const item = nameList.value[index];
  if (item.checked) {
    item.pending = true;
    item.checked = false;
  } else if (item.pending) {
    item.pending = false;
  } else {
    item.pending = true;
  }
  saveListToLocalStorage();
}

function delMessage(index) {
  const enableWarning = getEnablewarning();
  if (enableWarning) {
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
  const item = nameList.value[index];
  if (item.pending) {
    item.checked = true;
    item.pending = false;
  } else {
    item.checked = !item.checked;
  }
  saveListToLocalStorage();
}

function getClass(item) {
  return {
    [`completed-${taskColor.value}`]: item.checked && !item.pending,
    pending: item.pending && !item.checked
  };
}

</script>


<style>
.completed-green {
  color: green !important;
  font-weight: bold !important;
}

.completed-purple {
  color: purple !important;
  font-weight: bold !important;
}

.completed-blue {
  color: blue !important;
  font-weight: bold !important;
}

.pending {
  color: rgb(235, 193, 7) !important;
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

.style-b {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.bg-success-subtle {
  padding: 40px;
}
</style>