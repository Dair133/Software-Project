<template>
    <body class="bodyMain">
    <h1 style="color:white">Navigation Page</h1>
    <router-link to ="/accountPage" class =btn-primary > AccountPage</router-link><br>
<router-link to ="/authSignIn" class =btn-primary>Sign In Page</router-link><br>
<router-link to ="/authChangePassword" class =btn-primary>Change Password </router-link><br>
<router-link to ="/authCreateAccount" class =btn-primary >Create Account</router-link><br>
<router-link to ="/homepage" class =btn-primary >Homepage</router-link><br>
<router-link to ="/screenshots" class =btn-primary >Screenshots page(WIP)</router-link><br>
<router-link to ="/test" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/Realtime" class =btn-primary>Realtime test</router-link><br>
<a href=/ideTest>link</a>
<!-- <img id="profilePic" src="https://firebasestorage.googleapis.com/v0/b/software-engineering-d3376.appspot.com/o/File%20Number%201?alt=media&token=c4cdfe21-658e-4964-b941-6fe7af57fe05"> -->
<div id="name">z</div>
<div id="numPlayers">z</div>
<!-- <div id="profilePic">z</div> -->
<div id="uid">z</div><br><br>
<div style="color:white" id="listOfNames">z</div>

<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>

</body>
    </template>
    <style scoped>
    .btn-primary{
  position: relative;
  display: inline-block;
  width: 35mm;
  height: 35mm;
color:white;
                outline: 0;
                border: 0;
                cursor: pointer;
                will-change: box-shadow,transform;
                background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
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
                    box-shadow: 0px 4px 8px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px #3c4fe0;
                    transform: translateY(-2px);
                }
               .btn-primary:active{
                    box-shadow: inset 0px 3px 7px #3c4fe0;
                    transform: translateY(2px);
                }
                .bodyMain{
  width:100%;
  height:100%;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}
        </style>
        <script>
          import { getDatabase, ref, set,onValue,get, onDisconnect,onChildRemoved,child,onChildAdded } from "firebase/database";
   import test from '../main';
   import loader from "@monaco-editor/loader";
import { listen } from "vscode-ws-jsonrpc";
import  firebase  from 'firebase/compat/app';
import {  push,serverTimestamp,update } from "firebase/database";
import { getFunctions, httpsCallable } from "firebase/functions";
import { connectFunctionsEmulator } from "@firebase/functions";
const db = getDatabase();
const currentUserRef = ref(db,'Online');
const listOfPlayers = ref(db,'ListOfPLayers/names');
    
  
 setTimeout(() =>{
    const OnlineRef = ref(db,'Online/');
onValue(OnlineRef,(snapshot) =>{
  document.getElementById("listOfNames").innerHTML ="";
  console.log(snapshot.val())
  var snapObject = snapshot.val()
  console.log("current final page is"+snapObject.CurrentPage)


snapshot.forEach(function (snapshot){//goes through list /online in realtime database and adds them to the html tag 
  
var snapObject = snapshot.val()
var name = snapObject.Name
var url  =  snapObject.CurrentPage
document.getElementById("listOfNames").innerHTML += "<br>"+name+" "+url+"<br>"
})

})
    document.getElementById("numPlayers").style.visibility = "visible"
  
},1000)


export default {

mounted(){

test.methods.auth()


setTimeout(() => {

if(test.methods.checkEntryExistence()){
  console.log("User Entry Exists")
}
else{
  test.methods.createUserEntry() 
}
 },500)

},


  methods: {
    
    createUserEntry:function(){
//       const db  = getDatabase()
//       const user = firebase.auth().currentUser;//gets the user which is currently logged in

//       const functions = getFunctions(test.methods.intialiseFirebase());
// const createUserEntry1 = httpsCallable(functions,'createUserEntry');
// createUserEntry1().then((result) => {

// console.log(result);

// });
  
//const functions = getFunctions(test.methods.intialiseFirebase());
// connectFunctionsEmulator(functions,'localhost',5001);
//  const secureFunction = httpsCallable(functions,'createUserEntry');
//  secureFunction().then((result) =>{
// console.log(result)
//  })


    }


  }
}


//   console.log("hopefully not now undefined is "+document.getElementById("name").innerHTML)
//   const db = getDatabase();
//   console.log("after database")
// const reference = ref(db,'Online/'+document.getElementById("name").innerHTML)
// console.log("after referecnce")
// var location = window.location.href

      </script>
