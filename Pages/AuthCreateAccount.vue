<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">

  <main>
    <div class="container">
      <Navbar/>
      <div class="signup-box">
        <img src="../images/undraw_smiley-face.svg" alt="" class="image1">
        <h1>Sign up</h1>
        <form>
          <div class="inputs">
            <div class="input-area">
              <i class="bi bi-envelope"></i>
              <input type="email" class="input" placeholder="Email">
            </div>
            <div class="input-area">
              <i class="bi bi-person"></i>
              <input type="text" class="input" placeholder="Username">
            </div>
            <div class="input-area">
              <i class="bi bi-lock"></i>
              <input type="password" class="input" placeholder="Password">
            </div>
            <div class="input-area">
              <i class="bi bi-lock"></i>
              <input type="password" class="input" placeholder=" Confirm Password">
            </div>
            <div class="button">
              <button @click="createAccount">
                <div>
                  <div class="btn-one">
                    <span style="font-size: 30px">Create Account</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </form>
        <div class="login">
          <p>Have an account? <router-link to="/AuthSignIn">Login</router-link></p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Secular One', sans-serif;
    }

    .container {
      width: 100vw;
      height: 100vh;
      /*background-image: radial-gradient(#800080, #330433);*/
      background-image: url("../images/blockdrop.jpg");
    }

    .signup-box {
      background-color: white;
      width: 400px;
      margin: 0 auto;
      top: 13%;
      text-align: center;
      border-radius: 15px;
      border-style: solid;
      border-color: black;
    }

    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }

    .input {
      width: 50%;
      margin: 10px 0;
      border-radius: 10px;
      padding: 10px;
    }

    .btn {
      color: black;
      background-color: white;
      border-radius: 5px;
      border-style: solid;
      padding: 9px 20px;
      margin-top: 5px;
      width: 40%;
      cursor: pointer;
      text-decoration: none;
    }


    .login {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    a {
      color: black;
    }

    .image1 {
      margin-top: 10px;
    }

    .button {
      margin-top: 20px;
    }

    .btn-one {
      color: #000000;
      transition: all 0.3s;
      position: relative;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: rgba(80, 59, 59, 0.5);
      border-bottom-color: rgba(105, 81, 81, 0.5);

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
      border-top-color: rgba(80, 59, 59, 0.5);
      border-bottom-color: rgba(105, 81, 81, 0.5);
      transform: scale(0.1, 1);
    }
    .btn-one:hover span {
      letter-spacing: 2px;
    }
    .btn-one:hover::before {
      opacity: 1;
      transform: scale(1, 1);
    }
    .btn-one::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255,255,255,0.1);
    }
    .btn-one:hover::after {
      opacity: 0;
      transform: scale(0.1, 1);
    }

    button, input[type="submit"], input[type="reset"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
</style>

<script>
    import  firebase  from 'firebase/compat/app';
    import { doc, updateDoc, deleteField } from "firebase/firestore";
    import { collection, addDoc } from "firebase/firestore";
    import Navbar from '../components/Navbar.vue';

    export default {
      components: {Navbar},
      emits: ["open-note"],
      props: {
      note: {}
      },
      
      methods: {
    getDisplayName:function(){
        var username = document.getElementById("displayName").value;
       return username
    },

    getPassword:function(){
        var password = document.getElementById("password0").value;
  return password
    },

    getEmail:function(){
        var displayName = document.getElementById("email").value;
  return displayName
    },

    createAccount:function(){
      firebase.auth().createUserWithEmailAndPassword(this.getEmail(), this.getPassword())//this object must be calling one method inside another method
      .then((userCredential) => {
      
    //signs the user into the newly created account
    //this is done so the displayName can be correctly updated
    //display name cannot be updated on account creation
      var user = userCredential.user;
      var data = {
 Uid: user.uid,
 Placeholder1: "placeholder data",
  placeholder2: "placeholder data",

};

const db = test.methods.intialiseFirestore();
console.log(user.uid)
      db.collection('Users').doc(user.uid).set(data)

      user.updateProfile({
      displayName: this.getDisplayName(),
})
 } )
 console.log("successful")
 }


    }
    }
</script>
