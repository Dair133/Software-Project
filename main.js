import { createApp } from 'vue'
import Vue from 'vue'
//import { firebase } from '@firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from './router/routes';
import './assets/main.css'
import "firebase/storage";
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";     
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

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
  }
  
}
}
   