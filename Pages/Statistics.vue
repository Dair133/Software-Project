<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <div class="container">
    <img src="../images/leftarrow.svg" alt="" class="image2">
    <div class="accountinfo">
      <div class="header">
        <h1>Settings</h1>
      </div>
      <div class="selector">
        <div class="s">
          <div class="settings select">
            <button class="bttn" @click="gotoAccount">Account</button>
          </div>
          <div class="stats select">
            <button class="bttn" style="background-color: #d9cbcb">Statistics</button>
          </div>
        </div>
      </div>
      <div class="acc-info">
        <div class="text">
          <div class="acc-text">
            <h2>Account statistics</h2>
            <h3>Gold medals: </h3>
            <h3>Silver medals: </h3>
            <h3>Bronze medals: </h3>
            <h3>Most challenges in 5 minutes: </h3>
            <h3>Highest survival streak: </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",

  methods: {
    gotoAccount:function () {
      window.location = "/settings";
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Secular One', sans-serif;
}

.container {
  background-image: radial-gradient(#46a0e0, #2565AE, #0F5298);
  height: 100vh;
  width: 100vw;
}

.accountinfo {
  position: absolute;
  z-index: 15;
  top: 10%;
  left: 20%;
  width: 60%;
  height: 80%;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr;
  grid-template-rows: 0.1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
}

.header {
  grid-area: 1/1/2/4;
  background-image: radial-gradient(#306bab, #174d86);
  color: white;
  border-radius: 5px;
}

.selector {
  grid-area: 2/1/3/2;
}

.select {
  background-image: radial-gradient(#306bab, #174d86);

}

.acc-info {
  background-color: white;
  border-radius: 5px;
  grid-area: 2/2/3/4;
}

h1 {
  font-size: 40px;
  left: 20px;
}

.bttn {
  font-size: 20px;
  color: black;
  background-color: white;
  border-radius: 5px;
  border-style: solid;
  border-color: black;
  padding: 9px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.btn {
  right: 50px;
}

.s {
  display: grid;
  grid-row-gap: 3px;
}

.text {
  left: 20px;
}

.image {
  width: 20px;
  height: 20px;
}

.image2 {
  top: 48%;
  left: 25px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>