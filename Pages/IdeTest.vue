<template>
<header style="height: 1.5cm;">
<p  id = holder >Example paragraph</p>
<div id="description"></div>

</header>
    <div v-on:keyup="testForMonaco(),testingRealTime()"  id="editor" style="width:600px; height: 500px;position: relative;left: 4.5cm;"></div>
    <div style ="pointer-events: none;" >
      <div style="top:5vh;position:absolute;left: 140vh;"> example name position</div>
    <div id="name1"></div>
    <div v-on:keyup="testForMonaco(),testingRealTime()"  id="editor1" style="width:600px; height: 500px;position:absolute;left:21cm;top:1.5cm;visibility:visible;"></div>
    <div id="name2"></div>
    <div v-on:keyup="testForMonaco(),testingRealTime()"  id="editor2" style="width:200px; height: 200px;position:absolute;left: 17cm;visibility: hidden;"></div>
    <div id="name3"></div>
    <div v-on:keyup="testForMonaco(),testingRealTime()"  id="editor3" style="width:200px; height: 200px;position:absolute;left: 19cm;visibility: hidden;"></div>
    </div>
<div id="name"></div>
<div id="uid"></div>
<div id="numPlayers"></div>
<div id="editorIncrement">Null</div>
<div id="currentIncrement"></div>
<div id="checker">0</div>
<button v-on:click="cycleThroughEditor()">Cyclye through editors</button>
<button id="readyButton" v-on:click="readyUp">Ready Up</button>
<p>Inputs:</p><label for="inp1"></label><input id="inp1">

   
<textarea id="outputDisplay" style="background-color:rgb(30, 30, 30);color:white;width: 600px;height: 2.5cm;position: relative;left:10cm;"></textarea><br>
<button class="btn btn-primary" style = "left:10cm;position:relative" @click="build()">Compile</button><br>
<button class="btn btn-primary" style="left:10cm;position:relative" @click="chooseChallenge();">Activate Challenge</button>
<div id="desiredCodeOutput">zzzzzzzzz</div>
<div id="languageSelector" style="position:absolute; left: 725px; top: 195px;">

<H3 style="display: inline;position:relative;left:12cm">Language Selected: </H3><p style="positition:relative;left:12cm" id="Language" >None</p>
    <br>
    <br>
    <label style = "position:relative;left:12cm">Please select a Language:</label>
    <br>
    <label style ="position:relative;left:12cm" for="languages" ></label><select style="position:relative;left:12cm" class =select-primary name="Languages" id="languages" @change="select();">
        <option value="">--Please choose an option--</option>
        <option value="java">Java</option>
        <option style ="position:relative;left:12cm" value="py">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="go">GoLang</option>
        <option value="cs">C#</option>
        <option value="js">NodeJS</option>
    </select>
</div>
<textarea id="code" style="visibility:hidden;width:0cm;height: 0cm;"></textarea><br>
</template>
<RouterView :key="$router.url"/>
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
    ready:false

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
this.chooseChallenge()

test.methods.auth()


setTimeout(() => {

if(test.methods.checkEntryExistence()){//checks if database entry for user exists 
  console.log("User Entry Exists")
}
else{//if doesnt exist then create one (The function to create the entry amd check for its existence is called from main.js)
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

testForMonaco:function(){
 this.fileText = document.getElementById("holder").innerHTML
  var text = this.editorObject.getValue();
   this.text = text;
   console.log(this.text)
  document.getElementById("code").value = text;
  

},
insertCode:function(){
  this.fileText = document.getElementById("holder").innerHTML
  var text = this.editorObject.getValue();
   this.text = text;
   console.log(this.text)
// console.log(this.textObject.text)
//console.log(document.getElementById("zz").innerHTML)
  // document.getElementById("code").value = text;
//code for inserting text into the IDE

this.editorObject.setValue(this.fileText)


},





build:function(){
 
 let text = "";


   let codeOutput="";
   let language = "";
   let input = "";
   let code = document.getElementById("code").value

   if(code==""){
    console.log("asdsfsdfsdf")
       document.getElementById("outputDisplay").value = "";
       return null;
   }

   const encodedParams = new URLSearchParams();
   encodedParams.append("code", code);

   language = document.getElementById("languages").value;
   if(language==""){
    console.log("dfsdfsdf")
       document.getElementById("outputDisplay").value = "Please select a language";
       return null
   }
  //  language = "py"
   encodedParams.append("language", language);

   input = document.getElementById("inp1").value;
    if(input!==""){
        encodedParams.append("input", input);
    }


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
           console.log(data);
           codeOutput = data.output;
           document.getElementById("outputDisplay").value = text;
           if(codeOutput=="15\n"){
             console.log("inside if statment")
             document.getElementById("outputDisplay").value= codeOutput.output+"Well done challenge completed!";
           }
           if(codeOutput==""&&data.error=="") {
               document.getElementById("outputDisplay").value = "No Output";
           }
           else if(codeOutput!==""){
            //check for the code can be anywhere just create global variable,assign the code output and run the function here using that variable although not necesarry to have seperate function
            //you could possibly use a combination of the content from the outputs.text file and completed version to form a check if you need extra data in the databse then let me know
            //just make sure that the checks are not hard coded because right all the rest of the content to do with challemnges are not hard-coded
            //please let me know if you are confused by any of the variables I may have forgot to comment something. The choose challemge function moves to the next challemge and should be used if the user is correct
            //right now the choosechallenge function runs as long as the code compiles
               console.log("The text contained inside the Outputs.text file is"+this.desiredOutput)//contains the text from the outputs file for the respective challenges
               document.getElementById("outputDisplay").value= codeOutput;
               this.challengesCompleted +=1;
               this.chooseChallenge()//run choose challenge function if correct output recieved. Choose challenge activates the next function in the queue
           }
           else
               document.getElementById("outputDisplay").value = "Failed to Compile, Error: "+data.error;
       }).bind(this)
       .catch(err => console.error(err));
},

select:function(){
  var text;
    let el = document.getElementById("languages");
     text = el.options[el.selectedIndex].text;
    if(text==="--Please choose an option--"){
        document.getElementById("Language").innerHTML = "None";
        return null;
    }
    document.getElementById("Language").innerHTML = text;
},

readTextFile: async function(){//functions correctly
 
  var storage = getStorage(test.methods.intialiseFirebase())

   var textHolder = getDownloadURL(ref(storage,this.filePath))
   .then((url) => {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';//make sure that blob is the response file very important to ensure file can be read correctly

    xhr.onload =  (event) => {

        const blob = xhr.response;
        console.log("The first blob"+blob); //for testing

        const reader = new FileReader();
        reader.readAsText(blob);
  
      
         reader.onload =  function getFile() {

const text = reader.result;
console.log("isnide the reader function"+text);

this.fileText = text; //'returns' the text so it can be read in any function
console.log(this.fileText);
document.getElementById(this.locationofReadText).innerHTML = this.fileText; //stores the data in a html tag so it can be used again.
this.insertCode()
this.testForMonaco()





}.bind(this);

    };
    
    xhr.open('GET', url);
    xhr.send();
  

    // Or inserted into an <img> element
    

  })
  .catch((error) => {
    // Handle any errors
  });
 
  
  

    },
    chooseChallenge:async function(){
      this.codeFilePathEnd = "1-1.py"
  
 this.filePath = "Challenges/Python/Challenge-1/"+"1-1.py"

   //personal notes for this page
   //-make array containing different locations so its easy to change?
   //implement way of switcching between c and python right now no point because we only have python challenges
   //remove insert code function and add it to the end of the readTextFile function
   //properly indent code here
      var language = ["Python","C"]//this array is uselss until we have both c and python challenges.

      var challenges =["1","2","3"]

      this.challengeNum = challenges[this.challengesCompleted]

      this.pythonC = "Python"
     // var item = items[Math.floor(Math.random()*items.length)];
       this.filePath
       this.codeFilePathEnd
     
this.filePath = "Challenges/"+this.pythonC+"/Challenge-"+this.challengeNum+"/"+this.challengeNum+"-1.py"
this.locationofReadText = "holder"
console.log(this.filePath)
 this.readTextFile()


//these time outs are necessary to ensure thet the data is read correctly form the database they are not at their lowest possible values and could psissbly be more effficient than they are now there must.
//please note thet their must be sufficient difference between the two times or the data will not be read correctly.
setTimeout(() => {//the set timeout is here to ensure that the filepath variable is changed in time for the readtext function without this the data will not be read correctly.
  console.log("inside set")
   this.filePath = "Challenges/"+this.pythonC+"/Challenge-"+this.challengeNum+"/Description.text"
this.locationofReadText = "description"
this.readTextFile()
  }, 650)
  setTimeout(() => {//the set timeout is here to ensure that the filepath variable is changed in time 
  console.log("inside set")
   this.filePath = "Challenges/"+this.pythonC+"/Challenge-"+this.challengeNum+"/Outputs.text"
this.locationofReadText = "desiredCodeOutput"
this.readTextFile()
  }, 1250)


    },
    getNumPlayers:function(){

const db = getDatabase()
const playerRef = sref(db,'Online/')


onValue(playerRef,(snapshot) =>{
  var holder=0
  snapshot.forEach(function (snapshot){//goes through each entry andc ounts the number of entries whose current page is the IDE page
  
var name = snapshot.child('Name')   
var onThisPage = snapshot.child('CurrentPage') 

//if current page is ide page then increment number of players
if(onThisPage.val() == "http://localhost:5173/ideTest" || onThisPage.val() =='http://127.0.0.1:5173/ideTest' ){//needs to be switched to online url
  console.log("THe main val is "+name.val())
console.log("Current Page is "+onThisPage.val())
  holder+=1  //counts number of players with correct url and increment variable to update the database with
  document.getElementById('numPlayers').innerHTML = holder
  const playerRef1 = sref(db,'Online/'+document.getElementById('name').innerHTML)
  off(playerRef1)

  update(sref(db,'GameData/'),{//updates database with new value
          numPlayers:document.getElementById('numPlayers').innerHTML
        
        })
 
}

})


}).bind(this)


},
instance:function(){
//PLEASE IGNORE THIS CODE IT IS NOT RELEVANT AND WONT BE NEEDED IN FINAL PROJECT


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

   
  








        
},
testingRealTime:function(){//this function updates the databse with the current iteration of the user's code

  var db = getDatabase()
     var text = document.getElementById("code").value //code html tag is invisible text area which takes in the code from the moncaco editor
      
     this.currentDatabaseEditor =   document.getElementById('editorIncrement').innerHTML//gets players current editor
       update(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-'+this.currentDatabaseEditor),{
       Name:document.getElementById('name').innerHTML,//this probably needs to be moved.
       Value: text,//updates code in the database
        
      })
    
  
  },
  chooseEditor:function(){ //no longer used needs to be removed
    const db = getDatabase();
  const editorNumber = sref(db,'GameData/numPlayers');
    get(editorNumber).then((snapshot) =>{
      console.log("snapshot value is"+snapshot.val())
      this.numPlayers = snapshot.val()
      console.log("The number of players is "+this.numPlayers)
  })

  // this.currentDatabaseEditor = document.getElementById('numPlayers').innerHTML
console.log("we are checking instance "+this.incrementInstanceProperty)
  var checkEntryExistence = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty);//path to entry in database


//the following code decided which editor the player should connect to
  get(checkEntryExistence).then((snapshot =>{
    var currentIncrement=0;
    snapshot.forEach(function (snapshot){ 
      currentIncrement+=1;//incrememnts every time that a editor is connected
      console.log(currentIncrement);
if(snapshot.child('Connected').val() == false){ //when editor is found that is not taken then it 'connects' to that editor
  console.log("The disconnected increment is"+currentIncrement)
  document.getElementById('editorIncrement').innerHTML = currentIncrement //saves value of editor it has connected to

  return true;
}
else{

//no longer needed after ready up added will remove once im sure
  // update(checkEntryExistence,{
   
  //        Started:true
  //       })
     
    
}

    } )
  }).bind(this)

  ) },
  incrementInstance:function(){//should also no longer be needed
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
checkInstanceCorrect:function(){//makes sure that the instance you're connecting too has not  yet started 
  const db = getDatabase();
var instanceCheck = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty)

get(instanceCheck).then((snapshot =>{
  if(snapshot.child('Started').val() == true){ //if instance started then move into next instance
  
  this.incrementInstanceProperty++; //increments the instance the user should connect to
  console.log("adter instance increment"+this.incrementInstanceProperty)
  this.instance()//creates new instance need to add check of the instance already exists or not
 
console.log("inside value check "+this.currentDatabaseEditor)
  this.checkInstanceCorrect()//uses recursion to continue iterating through instances if one that has not started has not been found
  }
  this.chooseEditor()//checks all the 'connected' of the individual editors
 
}).bind(this)
)


 

},


//this code correctly assigns each ide 'screen' i.e. ensures each user has access to the left ide and that the other 3 
//belong to the other 3 players 

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
           if(this.currentDatabaseEditor ==1){//if your editor is one
            console.log("adter instance increment after incrmeent"+this.incrementInstanceProperty)
            var setBool = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Connected')
            set(setBool,true)
            console.log("INSIDE EDIOTR ONE")
            var editorTwoValue = snapshot.child('Editor-2/Value').val() //assigns other 3 ides to editors 2 3 4. if you ide was 2 other 3 ides would be 1,3,4
       
            var editorThreeValue = snapshot.child('Editor-3/Value').val()
            var editorFourValue = snapshot.child('Editor-4/Value').val()
         console.log(editorTwoValue)
          
       //picks out name associated with each respective editor so each player can see the names of the other players who are playing and the code they are writing
           document.getElementById('name1').innerHTML  = snapshot.child('Editor-2/Name').val() 
           monaco.editor.getModels()[1].setValue(editorTwoValue)
      
           document.getElementById('name2').innerHTML  = snapshot.child('Editor-3/Name').val() 
           monaco.editor.getModels()[2].setValue(editorThreeValue)
           
           document.getElementById('name3').innerHTML  = snapshot.child('Editor-4/Name').val() 
           monaco.editor.getModels()[3].setValue(editorFourValue)

           var removeName = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Name')
           var removeValue = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Value')
           var removeBool = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Connected')
           var resetReady = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Ready')
           onDisconnect(removeName).set('Waiting For Player')
           onDisconnect(removeValue).set('Waiting For Player')
           onDisconnect(removeBool).set(false)
           onDisconnect(resetReady).set(false)
           //resets values to default when user disconnects and prepares for next game
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
}
else{
  document.getElementById('readyButton').innerHTML = "Ready Up"
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
  }
   
  
  }
};




</script>
