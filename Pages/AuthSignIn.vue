<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <main>
    <header>
      <Navbar2></Navbar2>
    </header>
    <div class="container">
      <div class="signup-box">
        <img src="../images/undraw_smiley-face.svg" alt="" class="image1">
        <h1>Sign In</h1>
        <form>
          <div class="inputs">
            <div class="input-area">
              <i class="bi bi-envelope"></i>
              <input type="email" class="input" placeholder="Email" id="username0">
            </div>
            
            <div class="input-area">
              <i class="bi bi-lock"></i>
              <input type="password" class="input" placeholder="Password" id="password0">
            </div>

      
          </div>
        </form>
        <div class="login">
          <button class="btn-primary" @click="login()">Login</button>
          <div class="forgotpassword">
            <router-link to="/AuthChangePassword">Forgot Password?</router-link>
<!--        <p><span style ="text-decoration: underline; cursor: pointer"  @click="changePasswordPage()">Forgot password?</span></p>-->
          </div>
          <div class="signup">
            <p>New user? <router-link to="/AuthCreateAccount">Sign up</router-link></p>
<!--        <p>New user? <span style ="text-decoration: underline; cursor: pointer"  @click="createAccountPage()">Sign up</span></p>-->
          </div>
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

  .forgotpassword {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .signup {
    margin-bottom: 10px;
  }
  
  .login {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  a {
    color: black;
    cursor: pointer;
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
    height: 40px;
    color:white;
    outline: 0;
    border: 0;
    cursor: pointer;
    will-change: box-shadow,transform;
    background: radial-gradient(#800080, #330433);
    box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
    padding: 0 32px;
    border-radius: 4px;
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
import firebase from 'firebase/compat/app';
import Navbar2 from '../components/Navbar2.vue';

 function getUsername(){
  var username = document.getElementById("username0").value;
  return username
}
function getPassword(){
  var password = document.getElementById("password0").value;
  return password
}


export default {
  components: {Navbar2},
  emits: ["open-note"],
  props: {
    note: {}
  },


  methods: {
    createAccountPage:function(){
  window.location = "/authCreateAccount"//goes to the home page
},

changePasswordPage:function(){
  window.location = "/authChangePassword"//goes to change password page
},

login:function(){
  //NOTE in this case 'this' does not have to be used to call getUsername() and getPassword() because getUsername and getPassword are outside of the 'method' brackets
    firebase.auth().signInWithEmailAndPassword(getUsername(), getPassword())//signs user in wtih firebase functiin
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;//these variables are used primarily for testing
    var uid = user.uid;
    console.log(uid);
    console.log("wewewewewewe")
    window.location = "/play";//beings user to their homepage
    // ...
  })
  .catch((error) => {//catches errors and prints appropriate error code
    console.log("error has been detected");
    document.getElementById("p1").innerHTML ="Either an error has been detected or you have entered the incorrect credentials";
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("login successful")//for testing
} else {
   console.log("Not signed in")
  }
});
  }
}
}
</script>