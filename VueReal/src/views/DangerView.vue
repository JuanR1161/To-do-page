<template>


  <div class="todo-container bg-success-subtle ">
    <h1>This option is only if you want to delete the ENTIRE list

    </h1> <button @click=dellList>Delete all the list</button>
  </div>

</template>

<script setup>
function deList() {
  localStorage.setItem("nameList", [])
}


function dellList(index) {

  if (window.confirm("Do you really want to delete the list?")) {
    localStorage.setItem("nameList", [])
    saveListToLocalStorage();
  } else {
    nameList.value.splice(index, 1);
    saveListToLocalStorage();
  }
}
</script>

<style>

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
