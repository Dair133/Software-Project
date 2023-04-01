



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
        <h1 class="logo">Script Sphere</h1>
      </div>
    </div>
    <div class="grid-item grid-item-2">
<!--      <div class="grid-item-play grid-item-4">
        <div class="image grid-item-10">
          <img src="../images/survival.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-11">
          <router-link class="btn" to="/homepage">Survival</router-link>
        </div>
      </div>-->
<!--      <div class="grid-item-play grid-item-5">
        <div class="image grid-item-12">
          <img src="../images/time.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-13">
          <router-link class="btn" to="/homepage">Time-Trial</router-link>
        </div>
      </div>-->
      <div class="grid-item-play grid-item-6">
        <div class="image grid-item-14">
          <img src="../images/fight.svg" alt="" class="image2">
        </div>
        <div class="button grid-item-15">
          <router-link class="" to="/idetest" style="height: 80%; font-size: 50px">
            <div class="box-1">
              <div class="btn-one">
                <span>BATTLE ROYALE</span>
              </div>
            </div>
          </router-link>
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
      </div>
    </div>
  </div>
  <Navbar></Navbar>

</template>

<script>
  import firebase from "firebase/compat/app";
  import Navbar from "@/components/Sidenavbar.vue";

  export default {
    components: {Navbar},
    data() {
      return {
        isActive: false
      }
    },
    mounted:function(){
      this.auth()
    },
    methods: {
      auth:function(){
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {

            console.log(user.uid)
            console.log(user.displayName)

            document.getElementById("displayName").innerHTML = user.displayName
          }
          else {
            console.log("Error signing in")
          }
        })
      },
      showModal: function () {
        this.isActive = true;
      },
      closeModal: function () {
        this.isActive = false;
      }
    }
  }
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
    /*background-image: radial-gradient(#800080, #330433);*/
    background-image: url("../images/blockdrop.jpg");
    background-size: 100% 100%;
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 0.15fr 1fr 0.4fr;
  }

  .grid-item-2 {
    display: grid;
    grid-template-columns: 1fr;
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
    padding-right: 100px;
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
    /*padding: 8px 15px;*/
  }



  .dropdown {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
  }

  .dropdown a {
    color: black;
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
  
  hr {
    border-style: solid;
    border-color: #690a69;
  }

  .btn-one {
    color: #FFF;
    transition: all 0.3s;
    position: relative;
  }
  .btn-one span {
    transition: all 0.3s;
  }
  .btn-one::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255,255,255,0.5);
    border-bottom-color: rgba(255,255,255,0.5);
    transform: scale(0.1, 1);
  }
  .btn-one:hover span {
    letter-spacing: 2px;
  }
  .btn-one:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }



</style>