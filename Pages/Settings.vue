<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <div class="container">
    <router-link to="/play"><img src="../images/leftarrow.svg" alt="" class="image2"></router-link>
    <div class="accountinfo">
      <div class="header">
        <h1>Settings</h1>
      </div>
      <div class="selector">
        <div class="s">
          <div class="settings select">
            <button class="bttn" style="background-color: #d9cbcb">Account</button>
          </div>
          <div class="stats select">
            <button class="bttn" @click="gotoStats">Statistics</button>
          </div>
        </div>
      </div>
      <div class="acc-info">
        <div class="text">
          <div class="acc-text">
            <h2>Account info</h2>
            <div style="display: flex; justify-content: space-between;">
              <img src="../images/user.svg" alt="" class="image1">
              <button type="button" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Display name: </h3>
              <button type="button" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Email Address: </h3>
              <button type="button" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Password: ********</h3>
              <button type="button" @click="displayModal" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="stat-info">

      </div>
    </div>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>

  </div>
</template>

<script>
var modal = document.getElementById("myModal");
var btn1 = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
export default {
  name: "Settings",

  methods: {
    displayModal:function () {
      modal.style.display = "block";
    },
    close1:function () {
      modal.style.display = "none";
    },
    close2:function () {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    },
    gotoStats:function () {
      window.location = "/stats";
    },

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
  max-height: 25px;
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
.image1 {
  width: 100px;
  height: 100px;
}

.image2 {
  top: 48%;
  left: 25px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 30; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>