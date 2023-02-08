<template>
<head>
<p>
  This is the sign in page
</p>
</head>
<body>
  <label for="fname">Email</label>
    <input id="username0"><br><br>

    <label for="lname">Password</label>
    <input id="password0"><br><br>

    <p id =p1></p>
    <button  @click= login(); style = "width: 5000;height: 1500;color:blue;">Click to login</button>
   <br><button id = createAccountPage @click =createAccountPage() style = "color:blue">No Account? Click here to create one</button>
   <button @click=changePasswordPage(); style = "width: 5000;height: 1500;color:blue;">Forgot Password</button>
    <br><br>
  
    <p>Sample email and password if you want to test the pages
      <br>Sample email: alasdairjball@gmail.com
      <br>Sample password:zxcv!123
    </p>
    <router-link id = navigation to ="/navigationPage" style ="color:blue" >link to the navigation page</router-link>
</body>
</template>

<script>
import firebase from 'firebase/compat/app';

 function getUsername(){
  var username = document.getElementById("username0").value;
  return username
}
function getPassword(){
  var password = document.getElementById("password0").value;
  return password
}


export default {
  emits: ["open-note"],
  props: {
    note: {}
  },
methods: {
createAccountPage(){
  window.location = "/"//goes to the home page
},

changePasswordPage(){
  window.location = "/authChangePassword"//goes to change password page
},

},

  methods: {
login(){
  //NOTE in this case 'this' does not have to be used to call getUsername() and getPassword() because getUsername and getPassword are outside of the 'method' brackets
    firebase.auth().signInWithEmailAndPassword(getUsername(), getPassword())//signs user in wtih firebase functiin
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;//these variables are used primarily for testing
    var uid = user.uid;
    console.log(uid);
    window.location = "/homepage";//beings user to their homepage
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