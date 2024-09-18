<template>
  <div v-if="showSection === 'list'" class="todo-container bg-success-subtle">
    <h1>To do list</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            Title
          </th>
          <th>Description</th>
          <th> Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in nameList" :key="index">
          <td :class="getClass(item)">
            {{ item.name }}
          </td>
          <td :class="getClass(item)">
            {{ item.descr }}
              
          </td>
          <td>
            {{ item.createdDate }}

          </td>
          <td>
            <div class="style-b">
              <button @click="toggleCheckmark(index)">
                <span class="checkmark">✔️</span>
              </button>
              <button @click="pendingMessage(index)">
                <span class="checkmark">⌛</span>
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
    <h1></h1>
    <input v-model="newTask.title" />
   
    <h1></h1>
    <h2>Description</h2>
    <input v-model="newTask.descr" />
    <button @click="addTask" >Add</button>
  
  </div>
</template>





<script setup>
import { getEnablewarning } from '@/utils/settings';
import { ref, onMounted } from 'vue';

const showSection = ref('list');
const newTask = ref({})
const newName = ref('');
const newDesc = ref('');
const nameList = ref([]);
const descList = ref([]);
const taskColor = ref(localStorage.getItem('enableTaskColor') || 'green');


function format_time(s) {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'medium',
    timeZone: 'UTC'
  });
  
  return dtFormat.format(new Date(s * 1e3));
}

console.log( format_time(12345) );


function addTask() {
  const noname = newTask.value.title.trim();
  if (noname) {
    nameList.value.push({ name: noname, checked: false, pending: false, descr: newTask.value.descr, createdDate: Date.now() });
    newName.value = '';
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
  const enableWarning = getEnablewarning()
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
    completed: item.checked && !item.pending,
    pending: item.pending && !item.checked,
    [`completed-${taskColor.value}`]: item.checked && !item.pending
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
