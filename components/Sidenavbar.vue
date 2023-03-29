<template>
  <div id="myModal" class="modal"  v-bind:style='{"display" : (isActive? "block" : "none" )}'>
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="sphere">
        <p>1</p>
      </div>
      <div class="nav">
        <router-link to="/play" class="ilink">
          <img src="../images/home.svg" class="pic">
          <p class="txt">Home</p>
        </router-link>
        <router-link to="/about" class="ilink">
          <img src="../images/about.svg" class="pic">
          <p class="txt">About</p>
        </router-link>
        <router-link to="/support" class="ilink">
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
          <div id="listHolder" class="scrollabblearea">
          <div class="ilink">
            <p class="txt">sdfsfsdf <br><span style="font-size: 10px;top:-2vh" >LOCATION</span> </p>
          </div>
       
          </div>
        </div>
      </div>
      <div class="extra">
        <router-link to="/accountPage" class="extras">
          <p style="left: 30%">Settings</p>
        </router-link>
        <router-link to="/" class="extras">
          <p @click="logout()" style="left: 32%">Logout</p>
        </router-link>
      </div>
    </div>
  </div>

  <div class="sidebar" @click="showModal()" v-bind:style='{"display" : (isActive? "none" : "block" )}'>
    <div class="sidebar-content"></div>
  </div>
</template>

<script>
import app from "/firebase";
import firebase from "firebase/compat/app";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
export default {
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
    },
    logout(){
      const auth = getAuth();
      signOut(auth).then(() => {
// Send them back to the home page!
        this.$router.push("/");});
    }
  }
  
}
</script>

<style scoped>

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
  /* overflow: hidden; */
}

.pic {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 5vh;
  width: 5vh;
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
  height: 6vh;
  width: 6vh;
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