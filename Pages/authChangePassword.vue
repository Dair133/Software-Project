<template>
<head>

</head>
<body>
    <label id =newEmail>Type in the email associated with your account</label>
    <input id =email>

    
    
    <p id =p1></p>
    <button @click=sendPasswordResetEmail(); style = "width: 5000;height: 1500;color:blue;">Click to send password email</button>
    
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