<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
  
  
    <div class="container">
      <nav class="navbar">
        <h1 class="logo">MMoguls</h1>
        <ul class="menu">
          <router-link class="underline" to="/">Home</router-link>
          <router-link class="underline" to="/aboutus">About us</router-link>
          <router-link class="underline" to="/help">Help</router-link>
          <router-link class="btn" to="/AuthCreateAccount">Sign up</router-link>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Background"
  }
  </script>
  
  <style scoped>
  


  
  </style>