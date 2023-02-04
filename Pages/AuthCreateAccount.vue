<template>
    <head>
    
    </head>
    <body>
      
        
    

    <label for="lname">Username(Display Name)</label>
    <input id="displayName"><br><br>

    <label for="fname">Email</label>
    <input id="email"><br><br>
    
    <label for="lname">Password</label>
    <input id="password0"><br><br>

    <button id = createAccount @click="createAccount()">Create Account</button>
</body>
    </template>
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