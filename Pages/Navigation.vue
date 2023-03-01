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
<router-link to ="/ideTest" class =btn-primary>New IDE test</router-link><br>
<div id="name">z</div>
<div id="numPlayers">z</div>
<div id="uid">z</div><br><br>
<div load id="listOfNames">z<span id="location"></span></div>

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
const db = getDatabase();
const currentUserRef = ref(db,'Online');
const listOfPlayers = ref(db,'ListOfPLayers/names');
    
  


//maybe get rid of numOfUsers child as it may not be necessary
const connectedRef = ref(db,".info/connected");
onValue(connectedRef,(snap) =>{
  console.log(snap)
  if(snap.val() ==true){
    const realTime = test.methods.intaliseRealTimeDatabase();
    // const con = push(child(currentUserRef,document.getElementById("name").innerHTML),'inside child');
  const Parent= child(currentUserRef,document.getElementById("name").innerHTML)
    const creatingName= (child (Parent,'Name',));
    const  creatingUid = (child (Parent,'Uid',));
    const  creatingCurrentPage = (child (Parent,'CurrentPage',));
    const settingUid = set(creatingUid,document.getElementById("uid").innerHTML)
    const settingName= set(creatingName,document.getElementById("name").innerHTML)//working kinda at least
    console.log(window.location.href)
   // const settingCurrentPage = set(creatingCurrentPage,window.location.href)
     const con2 = push(listOfPlayers,document.getElementById("name").innerHTML)
     onDisconnect(con2).remove()
     onDisconnect(Parent).remove()
    // onDisconnect(con).remove();
     //set(con,true)
    }
    if(snap.val() == false){
      // const realTime = test.methods.intaliseRealTimeDatabase();
      // set(ref(realTime,'user33/'),{
      //   numberOfPlayers:10,
      //   status:"offline"
      // })

    }
    
    onValue(listOfPlayers,(snapshot) =>{
      var holder =0;
snapshot.forEach(function (snapshot){
holder+=1;
document.getElementById("numPlayers").innerHTML = holder;

})

}).bind(this)

// onValue(listOfPlayers,(snapshot) =>{
//   document.getElementById("listOfNames").innerHTML ="";
// var name ="";
// snapshot.forEach(function (snapshot){//goes through list /ListOfPLayers in realtime database and adds them to the html tag 
//   console.log("name snapshot "+snapshot.val())
//   name = snapshot.val()
//   document.getElementById("listOfNames").innerHTML +="<br>"+name+;
// })

// })




   setTimeout(() =>{
    const OnlineRef = ref(db,'Online/');
onValue(OnlineRef,(snapshot) =>{
  document.getElementById("listOfNames").innerHTML ="";
  console.log(snapshot.val())
  var snapObject = snapshot.val()
  console.log("current final page is"+snapObject.CurrentPage)


snapshot.forEach(function (snapshot){//goes through list /ListOfPLayers in realtime database and adds them to the html tag 
var snapObject = snapshot.val()
var name = snapObject.Name
var url  =  snapObject.CurrentPage
document.getElementById("listOfNames").innerHTML += "<br>"+name+" "+url+"<br>"
})

})
    document.getElementById("numPlayers").style.visibility = "visible"
    //const con2 = push(listOfPlayers,document.getElementById("name").innerHTML)
},1000)
}).bind(this)

export default {

mounted(){
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


  methods: {




  }
}


//   console.log("hopefully not now undefined is "+document.getElementById("name").innerHTML)
//   const db = getDatabase();
//   console.log("after database")
// const reference = ref(db,'Online/'+document.getElementById("name").innerHTML)
// console.log("after referecnce")
// var location = window.location.href

      </script>
