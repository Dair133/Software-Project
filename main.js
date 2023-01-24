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
  databaseURL: "https://software-engineering-d3376.firebaseio.com",
  projectId: "software-engineering-d3376",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "project-619760417335",
   //For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
}

firebase.initializeApp(config)
    //npm install ——save firebase



export default{
  name:"app",
  
methods: {
  test:function(){
    console.log("1");
    var array = ["TEST ARRAY FOUR"];
    return array
  },
  
}
}
   