<template>
    <head>
      <p>This is a placeholder HomePage. The place where the user willl be able to see their rank,challenegs completed,times,etc</p>
</head>
<body class = bodyMain>
    
        <p style="color:white">
    Account Details of <span id = name >z</span><br>
    Email:<span id = email></span><br>
    Display Name:<span id = displayName></span><br>
  </p>
  <br>
   <p  @click=html() id = p style ="color: blue;"></p>
   <div></div>
   <router-link to ="/navigationPage" class="btn-primary" >Navigation Page</router-link><br>
   <router-link to ="/accountPage" class="btn-primary" >Account page</router-link>
   

 
  <div style="color:white"  @load=auth()>Enter new display name in the box provided</div>
  <input  id = newDisplayName>
  <button style ="background-color: #FFFFFF;background-image: linear-gradient(271deg, #FFFFFF 0%, #6284FF 6%, #FF0000 100%);" id = changeDisplayName @click=changeDisplayName()>Change display name</button>
  <br>
  <br>
  
  <div style="color:white">Enter new email in the box provided</div>
  <input  id = "newEmail">
  <button  style ="background-color: #FFFFFF;background-image: linear-gradient(271deg, #FFFFFF 0%, #6284FF 6%, #FF0000 100%);" id = changeEmail @click=changeEmail()>Change email</button><br>
  <br>
  <br>
  
 
  <button style="background-color: #FFFFFF;background-image: linear-gradient(271deg, #FFFFFF 0%, #6284FF 6%, #FF0000 100%);" id = defineFirebase @click=tempPassword()>Change password page</button>
 
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
</body>
</template>
<style>
.bodyMain{
  width:100%;
  height: 100%;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}
.btn-primary{
  position: relative;
  display: inline-block;
  width: 35mm;
  height: 22mm;
  
                outline: 0;
                border: 0;
                cursor: pointer;
                will-change: box-shadow,transform;
                background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
                box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
                padding: 0 32px;
                border-radius: 6px;
                color: #fff;
                height: 48px;
                font-size: 14px;
                text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
                transition: box-shadow 0.15s ease,transform 0.15s ease;
                
}
                .btn-primary:hover {
                    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
                    transform: translateY(-2px);
                }
               .btn-primary:active{
                    box-shadow: inset 0px 3px 7px #3c4fe0;
                    transform: translateY(2px);
                }
              
                
</style>
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