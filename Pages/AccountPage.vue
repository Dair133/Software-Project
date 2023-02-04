<template>
    <head>
      <p>This is a placeholder HomePage. The place where the user willl be able to see their rank,challenegs completed,times,etc</p>
</head>
<body>
    
        <p>
    Account Details of <span id = name >z</span><br>
    Email:<span id = email></span><br>
    Display Name:<span id = displayName></span><br>
    TBD:<span></span><br>
    TBD:<span></span><br>
  </p>
  <br>
   <p  @click=html() id = p style ="color: blue;"></p>
   <div></div>
   <router-link to ="/" style ="color:blue" >link to the homepage</router-link>
   <router-link to ="/accountPage" style ="color:blue" >link to the account page</router-link>
   <button id = changeDisplayName @click=html()>Click to change texte</button>

 
  
  <p @load=auth()>Enter new display name in the box provided</p>

  <input  id = newDisplayName>
  <button id = changeDisplayName @click=changeDisplayName()>Click to change display name</button>
  
  
  <div>Enter new email in the box provided</div>
  <input  id = "newEmail">
  
  <button id = changeEmail @click=changeEmail()>Click to change email</button>
  <button id = defineFirebase @click=tempPassword()>Go to change password page</button>
</body>
</template>
<script >
import  firebase  from 'firebase/compat/app';
import  test  from '../main'


//call imported function
//test.methods.intialiseStorage

export default {
  emits: ["open-note"],
  props: {
  note: {}
  },
  mounted:function(){//as far as i know the 'mounted' keyword causes this function to be called onload.
    this.auth()//this bit of code cannot go below the 'methods' keyword or it doesnt work
   
  },
  methods: {

    html:function(){
        document.getElementById("p").innerHTML = "hellow this is"
   
    },
    auth:function(){
       

        firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    //displays the details of each users.
    document.getElementById("name").innerHTML = user.displayName
    document.getElementById("displayName").innerHTML = user.displayName
    document.getElementById("email").innerHTML = user.email   
  } 
  else {
    console.log("Error signing in")
  }
  })
},
changeDisplayName() {
   
    console.log("in display name")
   
    const user = firebase.auth().currentUser;//gets the user which is currently logged in

    var newDisplayName = document.getElementById("newDisplayName").value;
    user.updateProfile({displayName: newDisplayName,});//updates display name obejct from the user profile
    
},
changeEmail(){
    console.log("in email")

    const user = firebase.auth().currentUser;

    var newEmail = document.getElementById("newEmail").value;
    user.updateProfile({email: newEmail,});//updates email name obejct from the user profile
},
tempPassword(){//temportaty function for testing 
    window.location = '/authChangePassword'
},
test(){
  const user = firebase.auth().currentUser;
const db =test.methods.intialiseFirestore();
console.log(db.collection('Users').doc(user.uid).Pl)
}


  }
}





    


   
    



</script>