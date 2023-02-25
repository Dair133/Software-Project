<template>
<header style="height: 1.5cm;">
<p  id = holder >Example paragraph</p>
<div id="description"></div>
</header>
    <div v-on:keyup="testForMonaco()"  id="editor" style="width:600px; height: 500px;position: relative;left: 10cm;"></div>




   
<textarea id="outputDisplay" style="background-color:rgb(30, 30, 30);color:white;width: 600px;height: 2.5cm;position: relative;left:10cm;"></textarea><br>
<button class="btn btn-primary" style = "left:10cm;position:relative" @click="build()">Compile</button><br>
<button class="btn btn-primary" style="left:10cm;position:relative" @click="chooseChallenge();">Activate Challenge</button>

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
<script>
import loader from "@monaco-editor/loader";
import { listen } from "vscode-ws-jsonrpc";
import test from '../main'
import  firebase  from 'firebase/compat/app';
    import { getStorage,ref,uploadBytes } from 'firebase/storage';
    import {  getDownloadURL } from "firebase/storage";
window.setImmediate = window.setTimeout;


export default {
  name: "Editor",
  editorObject:null,
  text:"zz",
  data(){
    return{
    filePath:"",
    fileText:"",
    codeFilePathEnd:"",
    pythonC:"",
    challengeNum:"",
    challengesCompleted:0,
  locationofReadText:"",
  holder:1
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
    ordBasedSuggestions: true,
    suggestOnTriggerCharacters: true,
    acceptSuggestionOnEnter: "on",
    tabCompletion: "on",
    wordBasedSuggestions: true
           
       };

     this.editorObject= monaco.editor.create(document.getElementById("editor"),   editorOptions);
this.chooseChallenge()

  
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
  var line = this.editorObject.getPosition();
  var selection =this.editorObject.getSelection()
var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
var id = { major: 1, minor: 1 };             
//var text = "print";
var op = {identifier: id, range: new monaco.Range(1,14,1,20), text: this.fileText, forceMoveMarkers: true}
console.log(this.fileText)
this.editorObject.executeEdits("my-source", [op]);


},




build:function(){
 
 let text = "";


   let codeOutput="";
   let language = "";
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
               document.getElementById("outputDisplay").value= codeOutput;
               this.challengesCompleted +=1;
               this.chooseChallenge()
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


//document.getElementById('code').value = text
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

   
  
      var language = ["Python","C"]

      var challenges =["1","2","3"]

      this.challengeNum = challenges[this.challengesCompleted]

      this.pythonC = "Python"
     // var item = items[Math.floor(Math.random()*items.length)];
       this.filePath
       this.codeFilePathEnd
     
this.filePath = "Challenges/"+this.pythonC+"/Challenge-"+this.challengeNum+"/"+this.challengeNum+"-1.py"
this.locationofReadText = "holder"
console.log(this.filePath)
 await this.readTextFile().then((data) =>{
  console.log(data)
 }).catch((err)=>{
  console.log("error")
 })
console.log("after everything")



// this.filePath = "Challenges/"+this.pythonC+"/Challenge-"+this.challengeNum+"/Description.text"
// this.locationofReadText = "description"
// this.readTextFile()


    },
   
  
  }
};




</script>