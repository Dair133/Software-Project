<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <div class="container">
    <div class="grid-item grid-item-1">
      <div class="grid-item grid-item-8">
        <h1 class="logo">MMoguls</h1>
      </div>
      <div class="grid-item grid-item-9">
        <div class="img">
          <img src="../images/user.svg" alt="" class="image1">
        </div>
      </div>
    </div>
    <div class="grid-item grid-item-2">
      <div class="grid-item-play grid-item-4">
        <div class="image grid-item-10">
          <img src="../images/survival.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-11">
          <router-link class="btn" to="/play">Survival</router-link>
        </div>
      </div>
      <div class="grid-item-play grid-item-5">
        <div class="image grid-item-12">
          <img src="../images/time.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-13">
          <router-link class="btn" to="/play">Time-Trial</router-link>
        </div>
      </div>
      <div class="grid-item-play grid-item-6">
        <div class="image grid-item-14">
          <img src="../images/question-mark.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-15">
          <router-link class="btn" to="/play">Coming soon</router-link>
        </div>
      </div>
<!--      <div class="grid-item-play grid-item-7">
        <div class="image grid-item-16">
          <img src="images/question-mark.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-17">
          <router-link class="btn" to="/play">Coming soon</router-link>
        </div>
      </div>-->
    </div>
    <div class="grid-item grid-item-3"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>

  * {
    font-family: 'Secular One', sans-serif;
  }

  .logo {
    display: grid;
    color: white;
    margin-left: 20px;
  }

  .container {
    background-image: radial-gradient(#800080, #330433);
    height: 100vh;
    width: 100vw;
  }

  .container {
    display: grid;
    grid-template-rows: 0.15fr 1fr 0.4fr;
  }
  .grid-item-2 {
    display: grid;
    grid-template-columns: 0.33fr 0.33fr 0.33fr;
  }

  .grid-item-1 {
    display: grid;
    grid-template-columns: auto 0.05fr;
    align-content: center;
  }

  .grid-item-play {
    display: grid;
    grid-template-rows: 1fr 0.2fr;
  }

  .grid-item-8 {
    display: grid;
    justify-items: center;
    padding-left: 50px;
  }


  .image1 {
    width: 50px;
    height: 50px;
  }

  .image2 {
    width: 300px;
    height: 300px;
  }

  .image, .button {
    display: grid;
    align-items: end;
    justify-items: center;
  }

  .btn {
    color: black;
    background-color: white;
    border-radius: 5px;
    border-style: solid;
    border-color: black;
    padding: 9px;
    width: 200px;
    text-align: center;
  }

  a {
    font-size: 20px;
    text-decoration: none;
    color: #e8dede;
    padding: 8px 15px;
  }
</style>