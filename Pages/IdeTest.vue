<template>
<body style="background-color: aqua;height: 100vh;margin-left: 30vh;background: linear-gradient(135.8deg, rgb(26, 26, 29) 27.1%, rgb(111, 34, 50) 77.5%);">
<p  id = holder >Example paragraph</p>

<div id="info"></div>
<div id="score"></div>

<div style="top:72vh;position:absolute;left: 110vh;color:crimson;text-align: center;text-decoration: underline;width: 45.5vh;height: 7vh;">Players</div>

<div id="name" class="name" style="top:76vh"></div>
<div id="name1" class="name" style="top:80vh"></div>
<div id="name2" class="name" style="top:84vh"></div>
<div id="name3" class="name" style="top:88vh"></div>

<div id="ready" class="ready" style="top:76vh">Not Ready</div>
<div id="ready1" class="ready" style="top:80vh"></div>
<div id="ready2" class="ready" style="top:84vh"></div>
<div id="ready3" class="ready" style="top:88vh"></div>

    <div v-on:keyup="updateCodeAPIArea(),testingRealTime()"  id="editor" style="width:91vh; height: 55vh;position: absolute;left:31.5vh;top:0.5vh"></div>
    <div style ="pointer-events: none;" >
  

    <div v-on:keyup="updateCodeAPIArea(),testingRealTime()"  id="editor1" style="width:91vh; height: 55vh;position:absolute;right:1vh;top:0.5vh;visibility:visible;"></div>
 
    <div v-on:keyup="updateCodeAPIArea(),testingRealTime()"  id="editor2" style="width:200px; height: 200px;position:absolute;left: 17cm;visibility: hidden;"></div>

    <div v-on:keyup="updateCodeAPIArea(),testingRealTime()"  id="editor3" style="width:200px; height: 200px;position:absolute;left: 19cm;visibility: hidden;"></div>
    </div>
<div id="name"></div>
<div id="uid"></div>
<div id="numPlayers"></div>
<div id="editorIncrement">Null</div>
<div id="currentIncrement"></div>
<div id="checker">0</div>
<button class=button-54 style = "font-size: 10px; position:absolute;left:123vh;top:56vh;width: 20vh;height: 7vh;;" v-on:click="cycleThroughEditor()">Cycle through editors</button>

<p>Inputs:</p><label for="inp1"></label><input id="inp1">


<textarea id="outputDisplay" style="background-color:rgb(30, 30, 30);color:white;width: 45.5vh;height: 7vh;position: absolute;left:31vh;top:56vh"></textarea><br>
<button id="readyButton" class="button-54"  style = "position:absolute;left:100vh;top:56vh;width: 20vh;height: 7vh;"   v-on:click="readyUp">Ready Up</button>
<button class="button-54" style = "position:absolute;left: 77vh;top:56vh;width: 20vh;height: 7vh;" @click="test()">Compile</button><br>

<header  style="position:absolute;top:72vh;left:160vh;width:45.5vh;height: 20vh;font-size:large;text-decoration: underline;text-align: center;color:crimson;">Score tracker will go below here</header>

<div id="descriptionWrapper">
<header  style="position:absolute;top:72vh;left:55vh;width:45.5vh;height: 20vh;font-size:large;text-decoration: underline;text-align: center;color:crimson;">Challenge Description</header>
<div style="position:absolute;top:76vh;left:50vh;width:60vh;height: 20vh;;color: white;text-align:center;font-family: Verdana, Geneva, Tahoma, sans-serif" id="description"></div>
<div id="leftBorder" style="position:absolute;top:77vh;left:48.5vh;background-color:darkred;width: 0.02vh;height: 16vh;"></div>   
<div id="rightBorder" style="position:absolute;top:77vh;left:111.5vh;background-color:darkred;width: 0.02vh;height: 16vh;"></div>  
<div id="topBorder" style="position:absolute;top:71.5vh;left:54vh;background-color:darkred;width: 48vh;height: 0.02vh;"></div>  
</div>
<div id="desiredCodeOutput">zzzzzzzzz</div>
<textarea id="code" style="visibility:hidden;width:0cm;height: 0cm;"></textarea><br>
</body>

</template>
<RouterView :key="$router.url"/>
<style>




.name{

  position: absolute;
  left:120vh;
  color:white
}
.ready{

position:absolute;
left:140vh;
color:white

}

/* CSS */
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}






</style>
<script>
import loader from "@monaco-editor/loader";
import { listen } from "vscode-ws-jsonrpc";
import test from '../main'
import  firebase  from 'firebase/compat/app';
    import { getStorage,uploadBytes,ref } from 'firebase/storage';
    import {  getDownloadURL } from "firebase/storage";
    import { getDatabase, ref as sref,set,onValue,get,onDisconnect,onChildRemoved,child,onChildAdded,update, equalTo,off,remove } from "firebase/database";
import { calculateBackoffMillis } from "@firebase/util";

window.setImmediate = window.setTimeout;
const storage = getStorage();
window.readFile = function readFile(path) {
    let pathReference = ref(storage, path);
    return getDownloadURL(pathReference)
        .then(function (url) {
            return fetch(url);
        })
        .then(function (response) {
            return response.text();
        })
        .catch(function (error) {
            console.error(error);
        });
  
   
  
  }
  function checkReady(ready,playerNum){
if(ready == false){
  document.getElementById('ready'+playerNum).innerHTML = "Not Ready"
}
else{
  document.getElementById('ready'+playerNum).innerHTML = "Ready"
}


}


export default {
  name: "Editor",
  editorObject:null,
  text:"zz",
  data(){
    return{//the following variables function effectively as 'global variables' allowing data to be sued easily across many functions
    filePath:"",//very final variable which is a combination of the following 4 variables used to take the correct challenge from the database
    fileText:"",
    codeFilePathEnd:"",
    pythonC:"",
    challengeNum:"",
    challengesCompleted:0,//number of challenges user has completed, this variable is used to 
    locationofReadText:"",
    desiredOutput:"",
    numPlayers:null,
    incrementInstanceProperty:1,//content of the Outputs.text file in the database which contains the answer for the code.
    currentDatabaseEditor:1,
    editorOne:null,
    editorTwo:null,
    editorthree:null,
    editorCycle:1,
    checker:0,
    ready:false,
    challenges:['1', '2', '3', '4', '5'],
    chall:null,
    challCompleted:null

    }
  },
  async mounted() {

    loader.init().then((monaco) => {
      const editorOptions = {
           language: "python",
           minimap: { enabled: true },
           theme:"vs-dark",
           quickSuggestions:{
            "other": true,
        "comments": true,
        "strings": true
           },
           parameterHints: {
        enabled: true
    },
    wordBasedSuggestions: true,
    suggestOnTriggerCharacters: true,
    acceptSuggestionOnEnter: "on",
    tabCompletion: "on",
    wordBasedSuggestions: true
           
       };

     this.editorObject= monaco.editor.create(document.getElementById("editor"),   editorOptions);
     this.editorOne = monaco.editor.create(document.getElementById("editor1"),   editorOptions);
      monaco.editor.create(document.getElementById("editor2"),   editorOptions);
      monaco.editor.create(document.getElementById("editor3"),   editorOptions);
//this.chooseChallenge()
this.begin()

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
  this.getNumPlayers()//increments number of players in the database and assigns it to the html value
  //this.chooseEditor() //assigns number of players value to the global variable numOf

 },400)

 
 setTimeout(() => {
 
  this.chooseEditor() 
  this.checkInstanceCorrect()
  // this.increme ntInstance()
                              

 //this.testingRealTime()
 },1500)

 setTimeout(() => {
 
  this.createOtherEditors()
 // this.instance() //creates new instance does ont need to run on start up if instance has already been created
  //this.ensureCorrectDatabase()
},2500)



});
    
 
    
  },
  methods:{

//

updateCodeAPIArea:function(){
 this.fileText = document.getElementById("holder").innerHTML
  var text = this.editorObject.getValue();
   this.text = text;
   console.log(this.text)
  document.getElementById("code").value = text;
  

},


build:function(input,output){
 
  return new Promise((resolve, reject) => {
        const encodedParams = new URLSearchParams();
        let code = document.getElementById("code").value;

        encodedParams.append("code", code);
        encodedParams.append("language", "py");
        encodedParams.append("input", input);

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '7f5ebdc991msh779918a8b5d23a9p10d434jsne9e7e4a1586e',
                'X-RapidAPI-Host': 'codex7.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://codex7.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(data => {
                let codeOutput = data.output;
                console.log(codeOutput)
                codeOutput = codeOutput.toLowerCase().replace(/(\r\n|\n|\r)/gm, "");
                document.getElementById("outputDisplay").innerHTML = codeOutput
                resolve(codeOutput === output);
           
            })
            .catch(err => reject(err));
    });
},



    getNumPlayers:function(){

const db = getDatabase()
const playerRef = sref(db,'Online/')


onValue(playerRef,(snapshot) =>{
  var holder=0
  snapshot.forEach(function (snapshot){
  
var name = snapshot.child('Name')   
var onThisPage = snapshot.child('CurrentPage') 


if(onThisPage.val() == "http://localhost:5173/ideTest" || onThisPage.val() =='http://127.0.0.1:5173/ideTest' ){//needs to be switched to online url
  console.log("THe main val is "+name.val())
console.log("Current Page is "+onThisPage.val())
  holder+=1
  document.getElementById('numPlayers').innerHTML = holder
  const playerRef1 = sref(db,'Online/'+document.getElementById('name').innerHTML)
  off(playerRef1)

  update(sref(db,'GameData/'),{
          numPlayers:document.getElementById('numPlayers').innerHTML
        
        })
 
}

})


}).bind(this)


},
instance:function(){

//   var db = getDatabase()
//   const currentUserRef = sref(db,'GameData');
//   const Parent= child(currentUserRef,'Instances')
//         var InstanceOne= (child (Parent,'Instance-'+this.incrementInstanceProperty,));

//         const EditorOne = child(InstanceOne,'Editor-1')
//         const EditorTwo = child(InstanceOne,'Editor-2')
//         const EditorThree = child(InstanceOne,'Editor-3')
//         const EditorFour = child(InstanceOne,'Editor-4')

//         //adding connected values
//       //  const startedbool = child(InstanceOne,'Started')
//        // const settingStartedBool = set(startedbool,false)
        


     
// const createEditorOneName = child(EditorOne,'Name')
// const createEditorOneValue = child(EditorOne,'Value')
// const createEditorOneBool = child(EditorOne,'Connected')
// const settingEditorOneName = set(createEditorOneName,'Empty Name')
// const settingEditorOneValue = set(createEditorOneValue,'zzz')
// const settingBoolOne = set(createEditorOneBool,false)
        
      
// const createEditorTwoName = child(EditorTwo,'Name')
// const createEditorTwoValue = child(EditorTwo,'Value')
// const createEditorTwoBool = child(EditorTwo,'Connected')
// const settingEditorTwoName = set(createEditorTwoName,'Empty Name')
// const settingEditorTwoValue = set(createEditorTwoValue,'zzz')
// const settingBoolTwo = set(createEditorTwoBool,false)
        
// const createEditorThreeName = child(EditorThree,'Name')
// const createEditorThreeValue = child(EditorThree,'Value')
// const createEditorThreeBool = child(EditorThree,'Connected')
// const settingEditorThreeName = set(createEditorThreeName,'Empty Name')
// const settingEditorThreeValue = set(createEditorThreeValue,'zzz')   
// const settingBoolThree = set(createEditorThreeBool,false)

// const createEditorFourName = child(EditorFour,'Name')
// const createEditorFourValue = child(EditorFour,'Value')
// const createEditorFourBool = child(EditorFour,'Connected')
// const settingEditorFourName = set(createEditorFourName,'Empty Name')
// const settingEditorFourValue = set(createEditorFourValue,'zzz')  
// const settingBoolFour = set(createEditorFourBool,false) 

   
  






// //Important notes for when i start again

        
},
testingRealTime:function(){

  var db = getDatabase()
     var text = document.getElementById("code").value
      
     this.currentDatabaseEditor =   document.getElementById('editorIncrement').innerHTML
       update(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-'+this.currentDatabaseEditor),{
       Name:document.getElementById('name').innerHTML,//this probably needs to be moved.
       Value: text,
        
      })
    
  
  },
  chooseEditor:function(){
    const db = getDatabase();
  const editorNumber = sref(db,'GameData/numPlayers');
    get(editorNumber).then((snapshot) =>{
      console.log("snapshot value is"+snapshot.val())
      this.numPlayers = snapshot.val()
      console.log("The number of players is "+this.numPlayers)
  })

  // this.currentDatabaseEditor = document.getElementById('numPlayers').innerHTML
console.log("we are checking instance "+this.incrementInstanceProperty)
  var checkEntryExistence = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty);



  get(checkEntryExistence).then((snapshot =>{
    var currentIncrement=0;
    snapshot.forEach(function (snapshot){
      currentIncrement+=1;
      console.log(currentIncrement);
if(snapshot.child('Connected').val() == false){
  console.log("The disconnected increment is"+currentIncrement)
  document.getElementById('editorIncrement').innerHTML = currentIncrement

  return true;
}
else{


  // update(checkEntryExistence,{
   
  //        Started:true
  //       })
     
    
}

    } )
  }).bind(this)

  ) },
  incrementInstance:function(){
    const db = getDatabase()
console.log("number of players inside incrementinstance function "+this.numPlayers)
onValue(sref(db,'GameData/numPlayers'),(snapshot) => {
if(snapshot.val() % 4 == 0 ){
 this.incrementInstanceProperty++;
 update(sref(db,'GameData/'),{
         // numPlayers:document.getElementById('numPlayers').innerHTML
         nextInstance:this.incrementInstanceProperty
        })
      }
 
}).bind(this)

  },
checkInstanceCorrect:function(){
  const db = getDatabase();
var instanceCheck = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty)

get(instanceCheck).then((snapshot =>{
  if(snapshot.child('Started').val() == true){
  
  this.incrementInstanceProperty++;
  console.log("adter instance increment"+this.incrementInstanceProperty)
  this.instance()//creates new instance need to add check of the instance already exists or not
 
console.log("inside value check "+this.currentDatabaseEditor)
  this.checkInstanceCorrect()
  }
  this.chooseEditor()//checks all the 'connected' of the individual editors
 
}).bind(this)
)


 

},




  createOtherEditors:function(){
    const db = getDatabase()
 
    onValue(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty),(snapshot) => {



if(document.getElementById('editorIncrement').innerHTML == 'Null'){
  console.log("editor is equal to null")
  return true;
}
            //use main editor html tag make change incremen of main editor tag based on current editor which it is connected too.
            
console.log(this.currentDatabaseEditor +'current database ditor is')
            var editorHolder = this.currentDatabaseEditor;
            this.testingRealTime()//updates database with user name and the value of the IDE
           if(this.currentDatabaseEditor ==1){
            console.log("adter instance increment after incrmeent"+this.incrementInstanceProperty)
            var setBool = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Connected')
            set(setBool,true)
            console.log("INSIDE EDIOTR ONE")
            var editorTwoValue = snapshot.child('Editor-2/Value').val()
       
            var editorThreeValue = snapshot.child('Editor-3/Value').val()
            var editorFourValue = snapshot.child('Editor-4/Value').val()
         console.log(editorTwoValue)
          
       
           document.getElementById('name1').innerHTML  = snapshot.child('Editor-2/Name').val() 
           monaco.editor.getModels()[1].setValue(editorTwoValue)
      
           document.getElementById('name2').innerHTML  = snapshot.child('Editor-3/Name').val() 
           monaco.editor.getModels()[2].setValue(editorThreeValue)
           
           document.getElementById('name3').innerHTML  = snapshot.child('Editor-4/Name').val() 
           monaco.editor.getModels()[3].setValue(editorFourValue)


           //correctly adjusts and keeps track of other user's ready status from the database
           checkReady(snapshot.child('Editor-2/Ready').val(),1)
           checkReady(snapshot.child('Editor-3/Ready').val(),2)
           checkReady(snapshot.child('Editor-4/Ready').val(),3)


           var removeName = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Name')
           var removeValue = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Value')
           var removeBool = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Connected')
           var resetReady = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Ready')
           onDisconnect(removeName).set('Waiting For Player')
           onDisconnect(removeValue).set('Waiting For Player')
           onDisconnect(removeBool).set(false)
           onDisconnect(resetReady).set(false)
           }


           if(this.currentDatabaseEditor ==2){
            console.log("INSIDE EDIOTR two")
            var setBool2 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-2/Connected')
            set(setBool2,true)
            

            var editorOneValue = snapshot.child('Editor-1/Value').val()
             editorThreeValue = snapshot.child('Editor-3/Value').val()
             editorFourValue = snapshot.child('Editor-4/Value').val()
       
          
           //this.editorOne.getModel().setValue('some value');

           document.getElementById('name1').innerHTML  = snapshot.child('Editor-1/Name').val() 
           monaco.editor.getModels()[1].setValue(editorOneValue)

           document.getElementById('name2').innerHTML  = snapshot.child('Editor-3/Name').val() 
           monaco.editor.getModels()[2].setValue(editorThreeValue)

           document.getElementById('name3').innerHTML  = snapshot.child('Editor-4/Name').val() 
           monaco.editor.getModels()[3].setValue(editorFourValue)
 
          //updates ready values correctly
          checkReady(snapshot.child('Editor-1/Ready').val(),1)
           checkReady(snapshot.child('Editor-3/Ready').val(),2)
           checkReady(snapshot.child('Editor-4/Ready').val(),3)

           var removeName2 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-2/Name')
           var removeValue2= sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-2/Value')
           var removeBool2 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-2/Connected')
           var resetReady2 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-2/Ready')
           onDisconnect(removeName2).set('Waiting For Player')
           onDisconnect(removeValue2).set('Waiting For Player')
           onDisconnect(removeBool2).set(false)
           onDisconnect(resetReady2).set(false)


           }
           if(this.currentDatabaseEditor ==3){
            var setBool3 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-3/Connected')
            set(setBool3,true)
            
            console.log("mmmmmmmmmmm")
             editorOneValue = snapshot.child('Editor-1/Value').val()
             editorTwoValue = snapshot.child('Editor-2/Value').val()
             editorFourValue = snapshot.child('Editor-4/Value').val()
       
          
           //this.editorOne.getModel().setValue('some value');
           document.getElementById('name1').innerHTML  = snapshot.child('Editor-1/Name').val() 
           monaco.editor.getModels()[1].setValue(editorOneValue)

           document.getElementById('name1').innerHTML  = snapshot.child('Editor-2/Name').val() 
           monaco.editor.getModels()[2].setValue(editorTwoValue)

           document.getElementById('name3').innerHTML  = snapshot.child('Editor-4/Name').val() 
           monaco.editor.getModels()[3].setValue(editorFourValue)

           checkReady(snapshot.child('Editor-1/Ready').val(),1)
           checkReady(snapshot.child('Editor-2/Ready').val(),2)
           checkReady(snapshot.child('Editor-4/Ready').val(),3)



           var removeName3 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-3/Name')
           var removeValue3= sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-3/Value')
           var removeBool3 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-3/Connected')
           var resetReady3 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-3/Ready')
           onDisconnect(removeName3).set('Waiting For Player')
           onDisconnect(removeValue3).set('Waiting For Player')
           onDisconnect(removeBool3).set(false)
           onDisconnect(resetReady3).set(false)


           }
           if(this.currentDatabaseEditor ==4){
            var setBool4 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-4/Connected')
            set(setBool4,true)
            console.log("mmmmmmmmmmm")
             editorOneValue = snapshot.child('Editor-1/Value').val()
             editorTwoValue = snapshot.child('Editor-2/Value').val()
             editorThreeValue = snapshot.child('Editor-3/Value').val()
       
           checkReady(snapshot.child('Editor-1/Ready').val(),1)
           checkReady(snapshot.child('Editor-2/Ready').val(),2)
           checkReady(snapshot.child('Editor-3/Ready').val(),3)
          
           //this.editorOne.getModel().setValue('some value');
           document.getElementById('name1').innerHTML  = snapshot.child('Editor-1/Name').val() 
           monaco.editor.getModels()[1].setValue(editorOneValue)

           document.getElementById('name1').innerHTML  = snapshot.child('Editor-2/Name').val() 
           monaco.editor.getModels()[2].setValue(editorTwoValue)

           document.getElementById('name2').innerHTML  = snapshot.child('Editor-3/Name').val() 
           monaco.editor.getModels()[3].setValue(editorValue)

           
           var removeName4 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-4/Name')
           var removeValue4= sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-4/Value')
           var removeBool4 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-4/Connected')
           var resetReady4 = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-4/Ready')
           onDisconnect(removeName4).set('Waiting For Player')
           onDisconnect(removeValue4).set('Waiting For Player')
           onDisconnect(removeBool4).set(false)
           onDisconnect(resetReady4).set(false)
           }
     

}).bind(this)


  },
  cycleThroughEditor:function(){
for(var i=1; i<4;i++){
if( document.getElementById('editor'+i).style.visibility == 'visible'){
  document.getElementById('editor'+i).style.visibility = 'hidden'
}
if( document.getElementById('name'+i).style.visibility == 'visible'){
  document.getElementById('name'+i).style.visibility = 'hidden'
}

}

console.log(this.editorCycle)
document.getElementById('editor'+this.editorCycle).style.visibility = 'visible'
document.getElementById('name'+this.editorCycle).style.visibility = 'visible'
//isibilityHolder = 'visible'
this.editorCycle++;

if(this.editorCycle == 4){
  this.editorCycle=1;
}


  },
  readyUp:function(){
    const db = getDatabase()
   //probably add check if game has started or not as we dont want users changing their ready status mid game



if(this.ready == false){
  document.getElementById('readyButton').innerHTML = "Cancel"
  document.getElementById('ready').innerHTML = "Ready"
}
else{
  document.getElementById('readyButton').innerHTML = "Ready Up"
  document.getElementById('ready').innerHTML = ""
}
this.ready = !this.ready
console.log("inside ready function")
    update(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-'+this.currentDatabaseEditor),{
          Ready:this.ready
        })

 //add you are now ready notification
 //check all connected clients and check if they are ready or not
 //way to see if other players are ready or not
 onValue(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty),(snapshot) => {
var startChecker =true;
  snapshot.forEach(function (snapshot){
if(snapshot.child('Connected').val() == true){
  if(snapshot.child('Ready').val() == false){ 
     startChecker =false; 
  }
  
}

  })
  if(startChecker == true){
    update(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty),{
         Started:true
        })
  }

 
}).bind(this)
  },
  begin:async function(){
    //randomChallengeNumber = random();
    this.chall = this.random();
console.log("The random number is"+this.chall)

  var temp = await readFile("Challenges/"+this.chall+"/description.txt");
  document.getElementById("description").innerHTML = temp;

  temp = await readFile("Challenges/"+this.chall+"/startCode.txt");
  console.log("INSIDE NEW FUNCTION")
  
  document.getElementById("code").innerHTML = temp;//whwere final value is used
  this.editorObject.setValue(temp)

},

test:async function() {
  document.getElementById("info").innerHTML="";
    let code = document.getElementById("code").value;

    if (code === "") {
        document.getElementById("info").innerHTML = "Please enter code";
        return null;
    }

    let input;
    let output;

    input = await readFile("Challenges/"+this.chall+"inputs.txt");
    output = await readFile("Challenges/"+this.chall+"testOutputs.txt");

    input = input.split(/\r?\n/);
    output = output.split(/\r?\n/);

    let pass = 0

    for(let i = 0; i<5; i++) {
        if(await this.build(input[i],output[i])){
            document.getElementById("info").insertAdjacentHTML('beforeend', "Test "+(i+1)+" passed\n");
            pass++;
        }
        else
            document.getElementById("info").insertAdjacentHTML('beforeend', "Test " + (i + 1) + " failed\n");

        if(pass===5){
            document.getElementById("info").textContent="All tests passed, next challenge!";
            await next();
        }
    }
    },
   random:function(){
    console.log("The challenges array test"+this.challenges[2])
    
    //Picks a random challenge number from the global array challenges
    const randomIndex = Math.floor(Math.random() * this.challenges.length);
    //Store that random challenge number and delete it from the array so no repetition occurs
    const randomChallenge = this.challenges.splice(randomIndex, 1)[0];
    console.log(this.challenges);
    return randomChallenge+"_Challenge/";
},
next: async function() {
    this.challCompleted++;
    document.getElementById("score").textContent="Score: "+challCompleted;
    if (this.challCompleted === 5) {
        //Resetting play data if user wants to play again
        this.challCompleted = 0;
        this.challenges = ['1', '2', '3', '4', '5'];

        //Remove everything from the screen
        document.getElementById("intro").remove();
        document.getElementById("code").remove();
        document.getElementById("btn").remove();
        document.getElementById("info").remove();

        //Generate a congratulations screen and a button to play again.
        let h1 = document.createElement("H1");
        h1.textContent="Congratulations noob, you've passed all the challenges, consider yourself a true MAGA Python pro!"
        nBody.appendChild(h1);

        let bt = document.createElement("button");
        bt.textContent = "Play Again?";
        bt.onclick = begin;
        bt.style.fontSize="50px";

        nBody.style.textAlign="center"
        nBody.appendChild(bt);

    } else {
        this.chall = random();
        document.getElementById("intro").textContent = "Challenge " + this.chall.charAt(0) + ": ";

        temp = await readFile(this.chall + "description.txt");
        document.getElementById("intro").insertAdjacentHTML('beforeend', temp);

        temp = await readFile(this.chall + "startCode.txt");
        

  }
},
}
}




</script>