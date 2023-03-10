<template>
<header style="height: 1.5cm;">
<p  id = holder >Example paragraph</p>
<div id="description"></div>

</header>
    <div v-on:keyup="testForMonaco(),testingRealTime()"  id="editor" style="width:600px; height: 500px;position: relative;left: 4.5cm;"></div>
    <div style ="pointer-events: none;" >
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
<button v-on:click="cycleThroughEditor()">Cyclye through editors</button>
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
    currentDatabaseEditor:null,
    editorOne:null,
    editorTwo:null,
    editorthree:null,
    editorCycle:1

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

 
 setTimeout(() => {
  this.instance()
  this.chooseEditor()
 this.incrementInstance()
 this.testingRealTime()
 this.createOtherEditors()

 },2000)



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


})


},
instance:function(){
//   console.log("inside gamedata")
//   var db = getDatabase()
//   const currentUserRef = sref(db,'GameData');
//   const Parent= child(currentUserRef,'Instances')
//         const InstanceOne= (child (Parent,'Instance-1',));
//         const  InstanceTwo = (child (Parent,'Instance-2',));
//         const  InstanceThree = (child (Parent,'Instance-3',));

//         const EditorOne = child(InstanceOne,'Editor-1')
//         const EditorTwo = child(InstanceOne,'Editor-2')
//         const EditorThree = child(InstanceOne,'Editor-3')
//         const EditorFour = child(InstanceOne,'Editor-4')

// const createEditorOneName = child(EditorOne,'Name')
// const createEditorOneValue = child(EditorOne,'Value')
// const settingEditorOneName = set(createEditorOneName,'Empty Name')
// const settingEditorOneValue = set(createEditorOneValue,'zzz')

// const createEditorTwoName = child(EditorTwo,'Name')
// const createEditorTwoValue = child(EditorTwo,'Value')
// const settingEditorTwoName = set(createEditorTwoName,'Empty Name')
// const settingEditorTwoValue = set(createEditorTwoValue,'zzz')

// const createEditorThreeName = child(EditorThree,'Name')
// const createEditorThreeValue = child(EditorThree,'Value')
// const settingEditorThreeName = set(createEditorThreeName,'Empty Name')
// const settingEditorThreeValue = set(createEditorThreeValue,'zzz')   

// const createEditorFourName = child(EditorFour,'Name')
// const createEditorFourValue = child(EditorFour,'Value')
// const settingEditorFourName = set(createEditorFourName,'Empty Name')
// const settingEditorFourValue = set(createEditorFourValue,'zzz')   

   
  






//Important notes for when i start again
//currently i have just added an incrementing instance property which updates every time the modulus of four is equal to Z_ERRNO
//The next thing i need to add is a new instance being created with the nextInstance value in the databasen i.e. if th next instanvce calue is 3
//then a new 'instance-3' is created with 4 editors
//the next step should then be setting up the 'secondary editor' for each user with th e other four editor properties int he database and allowing the users to 
//see what each user is doing while also see their own code.
//then we need someway to keep track of challeneg completion time,number of points,but this should be easy enough 
//Note we may have to change the structure of the database so that each editor has properties maybe ach editor parent keeps track of the number of points for that player/editor may be easiest way although
//it will be annoying to have to change around some of the existing code.
//also ensure that no values are hard-coded for testing 
//need to make code above dynamic at least a little bit . at least dynamic instance creation

        
},
testingRealTime:function(){

  var db = getDatabase()
     var text = document.getElementById("code").value
     var editorAdjustment = this.numPlayers
     var instanceAdjustment=0;
     editorAdjustment = editorAdjustment %4;
     if(editorAdjustment == 0){
        instanceAdjustment++;
     }
     if(editorAdjustment ==0){//ensures that a new eidotr editor-0 zero is not created after modulus calculation
      editorAdjustment++;
     }
     this.currentDatabaseEditor = editorAdjustment
     console.log("editroe adjustment is"+editorAdjustment)
      update(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-'+editorAdjustment),{
       Name:document.getElementById('name').innerHTML,
       Value: text,
        
      })
  
  },
  chooseEditor:function(){
    const db = getDatabase();
  const editorNumber = sref(db,'GameData/numPlayers');
    get(editorNumber).then((snapshot) =>{
      console.log("snapshot value is"+snapshot.val())
      this.numPlayers = snapshot.val()
      console.log(this.numPlayers)
  })
  setTimeout(() => {
    console.log(this.numPlayers)
  },500)


  },
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

  createOtherEditors:function(){
    const db = getDatabase()
    var clientEditor
    onValue(sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty),(snapshot) => {

            //use main editor html tag make change incremen of main editor tag based on current editor which it is connected too.

           if(this.currentDatabaseEditor ==1){
            console.log("mmmmmmmmmmm")
            var editorTwoValue = snapshot.child('Editor-2/Value').val()
       
            var editorThreeValue = snapshot.child('Editor-3/Value').val()
            var editorFourValue = snapshot.child('Editor-4/Value').val()
         console.log(editorTwoValue)
          
       
           document.getElementById('name1').innerHTML  = snapshot.child('Editor-2/Name').val() 
           monaco.editor.getModels()[1].setValue(editorTwoValue)
          // this.editorOne.setValue("asasd")
          //this.editorObject.setValue(this.fileText)
           document.getElementById('name2').innerHTML  = snapshot.child('Editor-3/Name').val() 
           monaco.editor.getModels()[2].setValue(editorThreeValue)
           
           document.getElementById('name3').innerHTML  = snapshot.child('Editor-4/Name').val() 
           monaco.editor.getModels()[3].setValue(editorFourValue)
           var removeEntry = sref(db,'GameData/Instances/Instance-'+this.incrementInstanceProperty+'/Editor-1/Name')
           onDisconnect(removeEntry).set('Waiting For Player')
           }
           if(this.currentDatabaseEditor ==2){
            console.log("mmmmmmmmmmm")
            var editorOneValue = snapshot.child('Editor-1/Value').val()
             editorThreeValue = snapshot.child('Editor-3/Value').val()
             editorFourValue = snapshot.child('Editor-4/Value').val()
       
          
           //this.editorOne.getModel().setValue('some value');
           monaco.editor.getModels()[1].setValue(editorOneValue)
           monaco.editor.getModels()[2].setValue(editorThreeValue)
           monaco.editor.getModels()[3].setValue(editorFourValue)
           }
           if(this.currentDatabaseEditor ==3){
            console.log("mmmmmmmmmmm")
             editorOneValue = snapshot.child('Editor-1/Value').val()
             editorTwoValue = snapshot.child('Editor-2/Value').val()
             editorFourValue = snapshot.child('Editor-4/Value').val()
       
          
           //this.editorOne.getModel().setValue('some value');
           monaco.editor.getModels()[1].setValue(editorOneValue)
           monaco.editor.getModels()[2].setValue(editorTwoValue)
           monaco.editor.getModels()[3].setValue(editorFourValue)
           }
           if(this.currentDatabaseEditor ==4){
            console.log("mmmmmmmmmmm")
             editorOneValue = snapshot.child('Editor-1/Value').val()
             editorTwoValue = snapshot.child('Editor-2/Value').val()
             editorThreeValue = snapshot.child('Editor-3/Value').val()
       
          
           //this.editorOne.getModel().setValue('some value');
           monaco.editor.getModels()[1].setValue(editorOneValue)
           monaco.editor.getModels()[2].setValue(editorTwoValue)
           monaco.editor.getModels()[3].setValue(editorValue)
           }
     

}).bind(this)


  },
  cycleThroughEditor:function(){
for(var i=1; i<4;i++){
if( document.getElementById('editor'+i).style.visibility == 'visible'){
  document.getElementById('editor'+i).style.visibility = 'hidden'
}

}

console.log(this.editorCycle)
document.getElementById('editor'+this.editorCycle).style.visibility = 'visible'
//isibilityHolder = 'visible'
this.editorCycle++;

if(this.editorCycle == 4){
  this.editorCycle=1;
}


  }


  
   
  
  }
};




</script>