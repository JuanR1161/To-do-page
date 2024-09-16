<template>

<div class="app-container todo-container bg-success-subtle"   >
   
   <nav class="navbar" >
     <RouterLink to="/">Home</RouterLink>
     <RouterLink to="/about">About</RouterLink>
     <RouterLink to="/settings">Settings</RouterLink>
 
   </nav>
   <RouterView />
</div>



</template>




<style scoped>
.todo-container {
  border: 2px solid #000000;
  border-radius: 0px;
  padding: 0px;
  margin: 15px;
  background-color: #f8f9fa;
}

.bg-success-subtle {
  padding: 40px;
}

.completed {
  font-weight: bold;
  color: green;
}
</style>
