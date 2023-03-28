<template>
  <div class="Sidenavbar">
    <div id="myModal" class="modal"  v-bind:style='{"display" : (isActive? "block" : "none" )}'>
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-content">
        <div class=logoArea>
          <p>1</p>
        </div>
        <div class="nav">
          <router-link to="/" class="ilink">
            <img src="../images/home.svg" class="pic">
            <p class="txt">Home</p>
          </router-link>
          <router-link to="/aboutus" class="ilink">
            <img src="../images/about.svg" class="pic">
            <p class="txt">About</p>
          </router-link>
          <router-link to="/help" class="ilink">
            <img src="../images/support.svg" class="pic">
            <p class="txt">Support</p>
          </router-link>
        </div>
        <div> 
          <div class="mainUserArea">       
          <div class="players">
          <div class="ilink">
            <img src="../images/user.svg" class="mainUserPic">
            <p class="mainUserText" style="left: 20%" id="displayName"></p>
          </div>
        </div>
        </div>
         <div class="otherUsers">
          <div class="ilink" >
            <img src="../images/user.svg" class="pic">
            <p id="listOfNames" class="txtList">sample user--------</p>
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
  </div>
    <div class="sidebar" @click="showModal()" v-bind:style='{"display" : (isActive? "none" : "block" )}'>
      <div class="sidebar-content"></div>
    </div>
  </template>
  
  <script>
  import firebase from "firebase/compat/app";
  export default {
    name:"Sidenavbar",
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
.logoArea{
border-bottom:solid


}
.txtList{
  left: 15%;
    top: 16%;
size: 2cm;
overflow: auto;
font-size: 2vh;

}
.otherUsers{
border-bottom:solid;
height: 22vh;

}

  .mainUserText{
    left: 4vh;
    top: 3vh;
  position:absolute

  }
  .mainUserArea{
border-bottom: solid;
    border-width: 0.8vh;
    border-color:darkslategrey;
    border-top:solid;
    height: 10vh;
  }
  .mainUserPic {
    display: inline-block;
    position: absolute;
    top: 3vh;
    left: 0;
    height: 5vh;
    width: 5vh;
  }
  
  a {
    font-size: 20px;
    text-decoration: none;
    color: #e8dede;
    /*padding: 8px 15px;*/
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
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content {
    z-index: 10;
    position: fixed;
    left: 0px;
    width: 30vh;
    height: 100%;
    background-color: rgb(0, 0, 0);
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
    display: block;
  }
  hr {
    border-style: solid;
    border-color: #690a69;
  }
  .players {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px;
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
    top: 1vh;
    left: 0;
    height: 4vh;
    width: 4vh;
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

  .extra {
    display: grid;
    grid-template-rows: 50% 50%;
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
  </style>