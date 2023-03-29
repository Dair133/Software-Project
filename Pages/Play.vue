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
<!--  <div id="myModal" class="modal"  v-bind:style='{"display" : (isActive? "block" : "none" )}'>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="sphere">
        <p>1</p>
      </div>
      <div class="nav">
        <router-link to="/" class="ilink">
          <img src="../images/home.svg" class="pic">
          <p class="txt">Home</p>
        </router-link>
        <router-link to="/" class="ilink">
          <img src="../images/about.svg" class="pic">
          <p class="txt">About</p>
        </router-link>
        <router-link to="/" class="ilink">
          <img src="../images/support.svg" class="pic">
          <p class="txt">Support</p>
        </router-link>
      </div>
      <div class="mainuser">
        <div class="ilink">
          <img src="../images/user.svg" class="mainuserpic">
          <p class="txt" style="left: 20%" id="displayName"></p>
        </div>
        <div class="players">
          <div class="scrollabblearea">
            <div class="ilink">
              <img src="../images/user.svg" class="pic">
              <p class="txt">sample user</p>
            </div>
          </div>
        </div>
      </div>
      <div class="extra">
          <router-link to="/settings" class="extras">
            <p style="left: 30%">Settings</p>
          </router-link>
          <router-link to="/" class="extras">
            <p style="left: 32%">Logout</p>
          </router-link>
      </div>
    </div>
  </div>

  <div class="sidebar" @click="showModal()" v-bind:style='{"display" : (isActive? "none" : "block" )}'>
    <div class="sidebar-content"></div>
  </div>-->
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

  .modal-background {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.1);
  }

  .modal-content {
    z-index: 10;
    position: fixed;
    left: 0px;
    width: 30vh;
    height: 100%;
    background-color: purple;
    background-image: linear-gradient(#1a0d70 30%, #14148c 50%, purple);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.25fr 0.25fr 0.4fr 0.1fr;
  }

  .sidebar {
    z-index: 10;
    position: fixed;
    left: 0px;
    width: 4%;
    height: 100%;
    background-color: purple;
    background-image: linear-gradient(#1a0d70 30%, #14148c 50%, purple);
    display: block;
  }

  hr {
    border-style: solid;
    border-color: #690a69;
  }

  .mainuser {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto;
  }

  .scrollabblearea {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
  }


  .players {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
    overflow: auto;
    overflow-x: hidden;
  }

  .nav {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 50px;
  }

  .ilink {
    font-size: 20px;
    text-decoration: none;
    color: #e8dede;
    display: inline-block;
    position: relative;
    padding-left: 40px;
    line-height: 40px;
    overflow: hidden;
  }

  .pic {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 50px;
    width: 50px;
  }


  .ilink:hover {
    background-color: #720072;
  }

  .extras:hover {
    background-color: #720072;
  }

  .txt {
    left: 15%;
    top: 16%;
  }

  .mainuserpic {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 60px;
  }

  .extra {
    display: grid;
    grid-template-rows: 50% 50%;
  }

  .settings .logout {

  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #7a187a;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
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