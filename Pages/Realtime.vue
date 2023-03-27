<template>
    <head>
    
    </head>
    <body>
    <div id="dataStorage">Example database storage</div>
    <div id="uid">Example database storage</div>    
    <div id="name">Example database storage</div>  
    <div>Num Players On this Page is<span id="numPlayers"></span></div>

    <div id="listOfNames"></div>
        
        <p id =p1></p>
        <button @click="testingRealTime()">Testing real time</button>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime0" v-on:keyup="testingRealTime()" ></textarea>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime1" v-on:keyup="testingRealTime2()" ></textarea>
    </body>
    </template>
    
    <script>
    import { getDatabase, ref, set,onValue,get, onDisconnect,onChildRemoved,child,onChildAdded,update, equalTo } from "firebase/database";
   import test from '../main';
   import loader from "@monaco-editor/loader";
import { listen } from "vscode-ws-jsonrpc";
import  firebase  from 'firebase/compat/app';
import {  push,serverTimestamp,off,query } from "firebase/database";

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

    test.methods.auth()


setTimeout(() => {

if(test.methods.checkEntryExistence()){
  console.log("User Entry Exists")
}
else{
  test.methods.createUserEntry() 
}
 },500)

 setTimeout(() => {
  this.getNumPlayers()

 },1000)


  },
methods:{
    testingRealTime:function(){
     var text = document.getElementById("realTime0").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users/'),{
        editorData: text,
        
      })
      
},

testingRealTime2:function(){
  var text = document.getElementById("realTime1").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users2/'),{
        editorData: text,
        
      })
      },
getNumPlayers:function(){

const db = getDatabase()
const playerRef = ref(db,'Online/')
const queryVar = query(playerRef,equalTo('http://localhost:5173/Realtime'))


onValue(playerRef,(snapshot) =>{
  var holder=0
  snapshot.forEach(function (snapshot){
  
var name = snapshot.child('Name')   
var onThisPage = snapshot.child('CurrentPage') 
console.log("THe main val is "+name.val())
console.log("Current Page is "+onThisPage.val())

if(onThisPage.val() == "http://localhost:5173/Realtime"){
  holder+=1
  document.getElementById('numPlayers').innerHTML = holder
  const playerRef1 = ref(db,'Online/'+document.getElementById('name').innerHTML)
  off(playerRef1)


  update(ref(db,'GameData/'),{
          numPlayers:   document.getElementById('numPlayers').innerHTML
        })
 
}

})


})


}

}
}
    
  





      
   
    </script>



