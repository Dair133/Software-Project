<template>
    <head>
    
    </head>
    <body>
    <div id="dataStorage">Example database storage</div>
    <div id="uid">Example database storage</div>    
    <div id="name">Example database storage</div>  
    <div id="numPlayers" style="visibility:hidden;">Example database storage</div>  
    <div id="listOfNames"></div>
        
        <p id =p1></p>
        <button @click="testingRealTime()">Testing real time</button>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime0" v-on:keyup="testingRealTime()" ></textarea>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime1" v-on:keyup="testingRealTime2()" ></textarea>
    </body>
    </template>
    
    <script>
    import { getDatabase, ref, set,onValue,get, onDisconnect,onChildRemoved,child,onChildAdded,update } from "firebase/database";
   import test from '../main';
   import loader from "@monaco-editor/loader";
import { listen } from "vscode-ws-jsonrpc";
import  firebase  from 'firebase/compat/app';
import {  push,serverTimestamp } from "firebase/database";

    import {  getDownloadURL } from "firebase/storage";



// setTimeout(() =>{
// console.log("inside html tag is"+document.getElementById("name").innerHTML)


// update(ref(db,'Online/'+document.getElementById("name").innerHTML),{
//       CurrentPage: window.location.href
//     })
// },3000)
// const starCountRef0 = ref(db, 'users/');
// console.log("datbase functionw roking")
// onValue(starCountRef0, (snapshot) => {
//   var data = snapshot.val();
//   document.getElementById("realTime0").innerHTML = data.editorData;
// });

//  const starCountRef1 = ref(db, 'users2/');
// onValue(starCountRef1, (snapshot) => {
//   var data = snapshot.val();
//   document.getElementById("realTime1").innerHTML = data.editorData;
// });

;

// Set up a listener for when the user disconnects

//http://localhost:5173/Realtime
//the following code detects if a user is online or offline


 
export default{
  data(){
    return{
      points:null,
      numPlayers:""
    }
  },
  mounted(){
    const db = getDatabase();
firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    
    document.getElementById("name").innerHTML = user.displayName
    document.getElementById("uid").innerHTML = user.uid
    //document.getElementById("displayName").innerHTML = user.displayName//displays
    //document.getElementById("email").innerHTML = user.email   
    

    update(ref(db,'Online/'+user.displayName),{
      CurrentPage: window.location.href
    })
   
    return user.displayName
  } 
  else {
    console.log("Error signing in")
  }
  }).bind(this)
  },
methods:{
    testingRealTime:function(){
     var text = document.getElementById("realTime0").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users/'),{
        editorData: text,
        
      })
      
},
awaitPlayerData: async function(){
var promise = await this.getCorrectData()
console.log("inside await player dayta"+promise.numberOfPlayers)

},
testingRealTime2:function(){
  var text = document.getElementById("realTime1").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users2/'),{
        editorData: text,
        
      })
      },
      getCorrectData:async function(){
        const db = test.methods.intaliseRealTimeDatabase();
 var user;
  const snapshot = await get(ref(db, '/globalPageData'))
  user = snapshot.val();
  console.log(user)
  return user


      },
      auth:function(){
    firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    
    document.getElementById("name").innerHTML = user.displayName
    //document.getElementById("displayName").innerHTML = user.displayName//displays
    //document.getElementById("email").innerHTML = user.email   
    return user.displayName
  } 
  else {
    console.log("Error signing in")
  }
  }).bind(this)
},
     
}
}
    
  





      
   
    </script>



