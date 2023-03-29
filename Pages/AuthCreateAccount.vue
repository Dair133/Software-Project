<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  
    <main>
      <header>
        <Navbar/>
      </header>
      <div class="container">
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
                <button id = createAccount @click="createAccount()" class="btn-primary">Create Account</button>
              </div>
              <router-link id = navigation to ="/navigationPage" style ="color:blue" >link to the navigation page</router-link>
            </div>
          </form>
          <div class="login">
            <p>Have an account? <router-link to="/login">Login</router-link></p>
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
        height: 90vh;
        background-image: radial-gradient(#800080, #330433);
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
  
      .btn-primary{
        position: relative;
        display: inline-block;
        width: 40%;
        outline: 0;
        border: 0;
        cursor: pointer;
        will-change: box-shadow,transform;
        background: radial-gradient(#800080, #330433);
        box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
        padding: 0 32px;
        border-radius: 4px;
        color: #fff;
        height: 40px;
        font-size: 12px;
        text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
        transition: box-shadow 0.15s ease,transform 0.15s ease;
  
      }
      .btn-primary:hover {
        box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #490849;
        transform: translateY(-2px);
      }
      .btn-primary:active{
        box-shadow: inset 0px 3px 7px #490849;
        transform: translateY(2px);
      }
  </style>
  
  <script>
      import  firebase  from 'firebase/compat/app';
      import { doc, updateDoc, deleteField } from "firebase/firestore";
      import { collection, addDoc } from "firebase/firestore";
      import Navbar2 from '../components/Navbar2.vue';
  
      export default {
        components: {Navbar2},
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