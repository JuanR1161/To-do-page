<template >


    <div class="todo-container bg-success-subtle ">
        <h1>This option is only if you want to delete the ENTIRE list

        </h1> <button @click=deList>Delete all the list</button>
    </div>

</template>

<script setup>
function deList() {
localStorage.setItem("nameList", [])
}

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

.style-a{
 
  color: black !important;
  font-weight: bold;
  margin: auto;
}

.bg-success-subtle {
  padding: 40px;
}


</style>
