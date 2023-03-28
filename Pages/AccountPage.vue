<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <div class="container" @load="auth()">
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
            <h2>Account info of <span id = name></span></h2>
            <div style="display: flex; justify-content: space-between;">
              <img id="ProfilePic" src="../images/user.svg" alt="" class="image1">
              <button @click="displayModal1()" type="button" class="btn btn-secondary btn-sm">
                <img  src="../images/note.svg" alt="" class="image">profile button</button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Display name: <span id = displayName ></span></h3>
              <button type="button" @click="displayModal2" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Email Address: <span id = emailAddress></span></h3>
              <button type="button" @click="displayModal3" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
            <div style="display: flex; justify-content: space-between;">
            <h3>Password: ********</h3>
              <button type="button" @click="displayModal4" class="btn btn-secondary btn-sm">
                <img src="../images/note.svg" alt="" class="image"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="stat-info">

      </div>
    </div>

    <div id="myModal" class="modal" v-bind:style='{"display" : (isActive4? "block" : "none" )}'>
      <div class="modal-background" @click="closeModal4"></div>
      <div class="modal-content">
        <h2>Change password</h2>
        <input id="email" type="email" class="input" placeholder="Email">
        <div class="button">
          <button class="btn-primary" @click="sendPasswordResetEmail()">Change Password</button>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal" v-bind:style='{"display" : (isActive3? "block" : "none" )}'>
      <div class="modal-background" @click="closeModal3"></div>
      <div class="modal-content">
        <h2>Change Email</h2>
        <input id="newEmail" type="email" class="input" placeholder="Email">
        <div class="button">
          <button class="btn-primary" @click="changeEmail()">Change Email</button>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal" v-bind:style='{"display" : (isActive2? "block" : "none" )}'>
      <div class="modal-background" @click="closeModal2"></div>
      <div class="modal-content">
        <h2>Change Display Name</h2>
        <input id="newDisplayName" type="email" class="input" placeholder="Name">
        <div class="button">
          <button class="btn-primary" @click="changeDisplayName()">Change Name</button>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal" v-bind:style='{"display" : (isActive1? "block" : "none" )}'>
      <div class="modal-background" @click="closeModal1"></div>
      <div class="modal-content">
        <h2>Change Profile Picture</h2>
        <input id="newProfilePic" type="file" class="input" placeholder="Profile Picture">
        <div class="button">
          <button class="btn-primary" @click="updateProfilePic()">Change Profile Picture</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import { getStorage, ref ,uploadBytes,getMetadata,getDownloadURL} from "firebase/storage";
export default {
  name: "Settings",
  data() {
    return {
      isActive1:false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    }
  },
  mounted:function(){
    this.auth()

  },
  methods: {
    auth:function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.photoURL
          console.log(user.uid)
          console.log(user.displayName)

          document.getElementById("name").innerHTML = user.displayName
          document.getElementById("displayName").innerHTML = user.displayName
          document.getElementById("emailAddress").innerHTML = user.email
          console.log(user.photoURL)
          document.getElementById("ProfilePic").src= user.photoURL
        }
        else {
          console.log("Error signing in")
        }
      })
    },
   displayModal1:function(){
      this.isActive1 =true
   },
   displayModal2:function () {
      this.isActive2 = true
    },

   closeModal1:function(){
      this.isActive1 =false;
    },
    closeModal2:function () {
      this.isActive2 = false
    },
    displayModal3:function () {
      this.isActive3 = true
    },
    closeModal3:function () {
      this.isActive3 = false
    },
    displayModal4:function () {
      this.isActive4 = true;
    },
    closeModal4:function () {
      this.isActive4 = false;
    },
    gotoStats:function () {
      window.location = "/stats";
    },
    sendPasswordResetEmail:function(){
      this.isActive4 = false;
      var email= document.getElementById("email").value;
      console.log(email)
      firebase.auth().sendPasswordResetEmail(email)
          .then(() => {
            console.log("Password email sent")
          }).catch((error) => {
        console.log("Error has occured")
        var errorCode = error.code;
        var errorMessage = error.message;});
    },
    changeEmail(){
      console.log("in email")

      const user = firebase.auth().currentUser;

      var newEmail = document.getElementById("newEmail").value;
      user.updateProfile({email: newEmail,});//updates email name obejct from the user profile
    },
    changeDisplayName() {

      console.log("in display name")

      const user = firebase.auth().currentUser;//gets the user which is currently logged in

      var newDisplayName = document.getElementById("newDisplayName").value;
      user.updateProfile({displayName: newDisplayName,});//updates display name obejct from the user profile

    },
    updateProfilePic:function(){
const storage = getStorage();
const user = firebase.auth().currentUser;

const metadata = {
  contentType: 'image/jpeg',
};

const imagesRef = ref(storage,'/ProfilePictures/'+user.displayName)

var file =  document.getElementById("newProfilePic").files[0]
uploadBytes(imagesRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
  
const profilePicRef = ref(storage, 'ProfilePictures/'+user.displayName);

getDownloadURL(ref(storage, 'ProfilePictures/'+user.displayName))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('ProfilePic');
    img.setAttribute('src', url);
    user.updateProfile({photoURL: url,});
  })
  .catch((error) => {
    // Handle any errors
  })
      user.updateProfile({photoURL: document.getElementById("ProfilePic").src,});//updates display name obejct from the user profile
console.log(user.photoURL)

     // document.getElementById("ProfilePic").src = user.photoURL
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
  z-index: 9;
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

.modal-background {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-content {
  text-align: center;
  z-index: 15;
  background-color: #fefefe;
  margin-top: 150px;
  margin-left: 35%;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
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

.input {
  width: 90%;
  margin: 15px 0;
  border-radius: 15px;
  padding: 10px;

}

.btn-primary{
  position: relative;
  display: inline-block;
  width: 45%;
  height: 40px;
  color:white;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow,transform;
  background: radial-gradient(#170117, #000000);
  box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
  padding: 0 32px;
  border-radius: 4px;
  font-size: 12px;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease,transform 0.15s ease;

}
.btn-primary:hover {
  box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #100110;
  transform: translateY(-2px);
}
.btn-primary:active{
  box-shadow: inset 0px 3px 7px #0e010e;
  transform: translateY(2px);
}
</style>