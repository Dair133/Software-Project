<template>
    <head>
    
    </head>
    <body>
      
 
    
        //html tags go here
        
        <p id =p1></p>
        <button @click="testingRealTime()">Testing real time</button>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime0" v-on:keyup="testingRealTime()" ></textarea>
        <textarea style ="background-color: black;color:white;width:10cm;height:9cm;" id="realTime1" v-on:keyup="testingRealTime2()" ></textarea>
    </body>
    </template>
    
    <script>
    import { getDatabase, ref, set,onValue } from "firebase/database";
   import test from '../main';


const db = getDatabase();
const starCountRef0 = ref(db, 'users/');
console.log("datbase functionw roking")
onValue(starCountRef0, (snapshot) => {
  var data = snapshot.val();
  document.getElementById("realTime0").innerHTML = data.username;
});

const starCountRef1 = ref(db, 'users2/');
onValue(starCountRef1, (snapshot) => {
  var data = snapshot.val();
  document.getElementById("realTime1").innerHTML = data.username;
});

//   var vm = test.methods.intialiseVue(
//     {
// el:'example',
// data:{
//     name:'Vue.js'
// },
export default{
methods:{
    testingRealTime:function(){
     var text = document.getElementById("realTime0").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users/'),{
        username: text,
        email:'alasdairjball@gmail.com'
      })
      
},
testingRealTime2:function(){
  var text = document.getElementById("realTime1").value
      const realTime = test.methods.intaliseRealTimeDatabase();//intialises relatime database with imported function from main
      set(ref(realTime,'users2/'),{
        username: text,
        email:'alasdairjball@gmail.com'
      })
      }
}
}
    
  





      
   
    </script>



