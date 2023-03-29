<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">

  <header>
    <Navbar2></Navbar2>
  </header>
  <div class="container">
    <div class="box">
      <img src="../images/undraw_smiley-face.svg" alt="" class="image1">
      <h1>Forgot your password?</h1>
      <form>
        <div class="inputs">
          <div class="input-area">
            <i class="bi bi-person"></i>
            <input id="email" type="email" class="input" placeholder="Email">
          </div>
          <div class="button">
            <button class="btn-primary" @click="sendPasswordResetEmail()">Change Password</button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>
<script>
import  firebase  from 'firebase/compat/app';
import Navbar2 from '../components/Navbar2.vue';

export default {
  components: {Navbar2},
  emits: ["open-note"],
  props: {
  note: {}
  },
  
  methods: {
sendPasswordResetEmail:function(){
    var email= document.getElementById("email").value;
console.log(email)
firebase.auth().sendPasswordResetEmail(email)
.then(() => {
  console.log("Password email sent")
}).catch((error) => {
  console.log("Error has occured")
  var errorCode = error.code;
  var errorMessage = error.message;});
}

}
}
</script>
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
  .box {
    background-color: white;
    width: 400px;
    margin: 0 auto;
    top: 30%;
    text-align: center;
    border-radius: 15px;
    border-color: black;
    border-style: solid;
  }

  h1 {
    font-size: 35px;
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

  .image1 {
    margin-top: 10px;
  }

  .button {
    margin-top: 20px;
    margin-bottom: 30px;
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