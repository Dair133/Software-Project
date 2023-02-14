<template style>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gtastic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <head>
    
    </head>
    <body class =bodyMain >
    
    <div class="container">
        <div class="signup-dox">
           
            <h1>Sign up</h1>
            <form>
                <div class="inputs">
                    <div class="input-area">
                        <i class="bi bi-person"></i>
                        <label style="color:white"   for="lname">Username (Display name)</label> 
                        <input id="displayName" type="text" class="input" placeholder="Username">
                    </div>
                    <div class="input-area">
                        <i class="bi bi-envelope"></i>
                        <label style="color:white"  for="fname">Email</label>
                        <input id="email" type="email" class="input" placeholder="Email">
                    </div>
                    <div class="input-area">
                        <i class="bi bi-lock"></i>
                        <label style="color:white"  for="lname">Password</label>
                        <input id="password0" type="password" class="input" placeholder="Password">
                    </div>
                    <div class="button">
                        <button id = createAccount @click="createAccount()">Create Account</button><br>
                        <router-link id = navigation to ="/navigationPage" style ="color:blue" >link to the navigation page</router-link>
                    </div>
                   
                </div>
            </form>
            <div class="login">
                <p> Already have an account? <router-link id = signIn to ="/authSignIn" style="color:blue"> Log in </router-link></p>
                <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
                    <router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
            </div>
        </div>
    </div>
</body>
    </template>
    <style>
.bodyMain{
  width:100%;
  height: 100%;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}
</style>
    <script>
    import  firebase  from 'firebase/compat/app';
    import { doc, updateDoc, deleteField } from "firebase/firestore";
    import { collection, addDoc } from "firebase/firestore";
    
    import test from '../main'
    export default {
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
