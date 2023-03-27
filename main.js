import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from
'vue-router';
import routes from './router/routes'
import './assets/main.css'
//import { firebase } from '@firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import {  push,serverTimestamp,update,onValue,ref,child,set } from "firebase/database";

import "firebase/storage";
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";     
import { getFirestore } from "firebase/firestore";
import { getDatabase,onDisconnect,get } from "firebase/database";

//import  storage from 'firebase'; 


      let router = createRouter({
    history: createWebHistory(),
    routes: routes
    });
    const app = createApp(App)
    app.use(router);
    app.mount('#app');
    

        
const config = {
  apiKey: "AIzaSyBKNnpPI9PosJFLGupjlz5IDbHUVOo98bk",
  authDomain: "software-engineering-d3376.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://software-engineering-d3376-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "software-engineering-d3376",
  storageBucket: "gs://software-engineering-d3376.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "project-619760417335",
   //For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
}

const app1 = firebase.initializeApp(config)//app1 is equal to the firebase object
//firebase.storage(config)
const storage  = getStorage(app1)
    //npm install ——save firebase



export default{//this must stay as export defualt as far as i know
  name:"app",
  
methods: {
  test:function(){
    console.log("1");
    var array = ["TEST ARRAY FOUR"];
    return array
  },
  intialiseStorage:function(){
    const storage  = getStorage(app1)
    return storage
  },
  intialiseFirebase:function(){
    const app1 = firebase.initializeApp(config)
    return app1
  },
  intialiseFirestore:function(){
    const db = firebase.firestore()
    return db;
  },
  intialiseVue:function(){
    let router = createRouter({
      history: createWebHistory(),
      routes: routes
      });
      const app = createApp(App)
      app.use(router);
      app.mount('#app');
      return app;
  },
  intaliseRealTimeDatabase:function(){
      const realTimeDatabase = getDatabase(app1)
      return realTimeDatabase
  },
  createUserEntry:function(){

   
    const db = getDatabase();
    const listOfPlayers = ref(db,'ListOfPLayers/names');
    const currentUserRef = ref(db,'Online');
    const connectedRef = ref(db,".info/connected");
    console.log("inside test methods")
    onValue(connectedRef,(snap) =>{
      console.log(snap)
      if(snap.val() ==true){
        const realTime = this.intaliseRealTimeDatabase()
        // const con = push(child(currentUserRef,document.getElementById("name").innerHTML),'inside child');
      const Parent= child(currentUserRef,document.getElementById("name").innerHTML)
        const creatingName= (child (Parent,'Name',));
        const  creatingUid = (child (Parent,'Uid',));
        const  creatingCurrentPage = (child (Parent,'CurrentPage',));
        const creatingprofilePic = (child(Parent,'ProfilePic',))
        // const settingProfilePic = set(creatingprofilePic,document.getElementById("profilePic").innerHTML)
        const settingUid = set(creatingUid,document.getElementById("uid").innerHTML)
        const settingName= set(creatingName,document.getElementById("name").innerHTML)//working kinda at least
        console.log(window.location.href)
       // const settingCurrentPage = set(creatingCurrentPage,window.location.href)
        // const con2 = push(listOfPlayers,document.getElementById("name").innerHTML)
        // onDisconnect(con2).remove()
         onDisconnect(Parent).remove()
        // onDisconnect(con).remove();
         //set(con,true)
        }
        if(snap.val() == false){
        console.log("disconnected")
        }
      })


  },

  auth:function(){
 
      const db = getDatabase();
    firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
    if (user) {
   
      console.log(user.uid)
      console.log(user.displayName)
      // console.log(user.photoURL)
      document.getElementById("name").innerHTML = user.displayName
      document.getElementById("uid").innerHTML = user.uid
      // document.getElementById("profilePic").innerHTML = user.photoURL
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
    })
  
},

checkEntryExistence:function(){
  const db = getDatabase();
  const checkEntryExistence = ref(db,'Online/'+document.getElementById("name").innerHTML);

  get(checkEntryExistence).then((snapshot) =>{
if(snapshot.hasChild('Name')){
console.log("user entry exits")
return true
}
else{
console.log("user entry does not exits")
return false
}

  })


},

  
}
}
   