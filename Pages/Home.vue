<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <main>
    <header>
      <Navbar />
    </header>
    <div class="container">
      <div>
        <img src="../images/homepic2.svg" alt="" class="image1">
      </div>
      <div class="content">
        <h1>Competitives Programming</h1>
        <p>Improve your programming skills through fun game modes and watch your abilities grow</p>
        <router-link to="/authCreateAccount" >Sign up</router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(#800080, #330433);
}

* {
  font-family: 'Secular One', sans-serif;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  height: 90vh;
}

.image1 {
  height: 85vh;
  width: 40vw;
}

.content {
  margin-left: 10px;
  color: white;
}

h1 {
  font-size: 40px;
}

p {
  font-size: 25px;
}

a {
  color: black;
  background-color: white;
  font-size: 25px;
  border-radius: 5px;
  border-style: solid;
  border-color: #800080;
  padding: 7px 20px;
  text-decoration: none;
}
a:hover {
  border-color: #181818;
}

</style>
