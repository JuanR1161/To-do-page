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


function enableWarning (){
  console.log(localStorage.getItem("enableWarning"))
return localStorage.getItem("enableWarning")


}

const showSection = ref('list');

const newName = ref('');
const nameList = ref([]);


function addName() {
  const noname = newName.value.trim();
  if (noname) {
    nameList.value.push({ name: noname, checked: false });
    newName.value = '';
  }
}



function delMessage(index) {



if (enableWarning()) {
    if (window.confirm("Do you really want to delete the task?")) {
        nameList.value.splice(index, 1);
    }
} else {
    nameList.value.splice(index, 1);
}
}

function toggleCheckmark(index) {
  nameList.value[index].checked = !nameList.value[index].checked;
}
</script>

