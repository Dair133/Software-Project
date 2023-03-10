<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <div class="container">
    <div class="grid-item grid-item-1">
      <div class="grid-item grid-item-9">
        <div class="img">
          <img src="../images/user.svg" alt="" class="image1">
          <div class="dropdown">
            <router-link to="/settings" class="drop">Settings</router-link><br>
            <router-link to="/" class="drop">Log out</router-link>
          </div>
        </div>
      </div>
      <div class="grid-item grid-item-8">
        <h1 class="logo">MMoguls</h1>
      </div>
    </div>
    <div class="grid-item grid-item-2">
      <div class="grid-item-play grid-item-4">
        <div class="image grid-item-10">
          <img src="../images/survival.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-11">
          <router-link class="btn" to="/homepage">Survival</router-link>
        </div>
      </div>
      <div class="grid-item-play grid-item-5">
        <div class="image grid-item-12">
          <img src="../images/time.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-13">
          <router-link class="btn" to="/homepage">Time-Trial</router-link>
        </div>
      </div>
      <div class="grid-item-play grid-item-6">
        <div class="image grid-item-14">
          <img src="../images/connected.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-15">
          <router-link class="btn" to="/homepage">Battle Royale</router-link>
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
    <div class="grid-item grid-item-3">
      <div>
        <router-link id = navigation to ="/navigationPage" style ="color:blue" >link to the navigation page</router-link>
      </div>
    </div>
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
    grid-template-columns: 0.05fr auto;
    align-content: center;
  }

  .grid-item-play {
    display: grid;
    grid-template-rows: 1fr 0.2fr;
  }

  .grid-item-8 {
    display: grid;
    justify-items: center;
    padding-right: 140px;
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

  .dropdown {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown a {
    color: black;
    padding: 5px 5px;
    text-decoration: none;
    display: block;
  }

  .dropdown a:hover {background-color: #f1f1f1}

  .img:hover .dropdown {
    display: block;
  }

  .drop {
    font-size: 15px;
  }

</style>