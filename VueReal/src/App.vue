<template>

  <div class=""   >
     
     <nav class="navbar " >
     
      <RouterLink class="style-a" v-for="item in navegationItems" :to="item.route">{{item.label}}</RouterLink>
  
   
  
  
  
     
     </nav>
     <RouterView />
  </div>
  
  
  
  </template>
  
  
  <script setup>
  
  
  
  const navegationItems=[
    {label:"Home", route:"/"},
    {label:"Settings", route:"/settings"},
    {label:"Danger", route:"/danger"},
    {label:"About", route:"/about"},
  ]
  </script>
  
  <style scoped>
  .todo-container {
    border: 2px solid #000000;
    border-radius: 0px;
    padding: 0px;
    
    background-color: #f8f9fa;
  }
  
  .style-a{
   
    color: black !important;
    font-weight: bold;
    
  }
  
  .bg-success-subtle {
    padding: 40px;
  }
  
  .completed {
    font-weight: bold;
    color: green;
  }
  </style>
  