<template>
    <head>
    
    </head>
    <body>

        <input id =email>
<p>You are on the Homepage of <span id="name"> </span></p>
        <h2>PLAY GAME HERE?</h2>
        
        <label>Click here to sign out</label>
        <button @click="signOut()"></button>
        <button @click="accountPage()"></button>
    </body>
    </template>
    <script>
    import  firebase  from 'firebase/compat/app';
    
    
    export default {
      emits: ["open-note"],
      props: {
      note: {}
      },
      
      methods: {
    signOut:function(){
      firebase.auth().signOut().then(function() {//signs user out

        window.location = "/authSignIn";//brings user to the sign in page
        console.log('Signed Out');
        });
    },

    accountPage:function(){
        window.location = "/accountPage"//brings user to the accountPage
    },
auth:function(){
    firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    
    document.getElementById("name").innerHTML = user.displayName
    document.getElementById("displayName").innerHTML = user.displayName//displays
    document.getElementById("email").innerHTML = user.email   
  } 
  else {
    console.log("Error signing in")
  }
  })
}
    }
}
    </script>

