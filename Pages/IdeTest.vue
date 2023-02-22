<template>
<header style="height: 1.5cm;">

</header>
    <div v-on:keyup="testForMonaco()"  id="editor" style="width:60%; height: 500px;align-self: center;"></div>




   
<textarea id="outputDisplay" style="background-color:rgb(30, 30, 30);color:white;width: 100%;height: 2.5cm;"></textarea><br>
<button class="btn btn-primary" style = "left:12cm;" @click="build()">Compile</button><br>
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
window.setImmediate = window.setTimeout;


export default {
  name: "Editor",
  editDiv:null,
  async mounted() {

    loader.init().then((monaco) => {
      const editorOptions = {
           language: "python",
           minimap: { enabled: true },
           theme:"vs-dark"
           
       };

      this.editDiv = monaco.editor.create(document.getElementById("editor"),   editorOptions);
 
    });
    
  },
  methods:{
    
testForMonaco:function(){
  var text = this.editDiv.getValue();
  console.log(text)

  document.getElementById("code").value = text;
//code for inserting text into the IDE
//   var line = this.editDiv.getPosition();
// var range = new monaco.Range(line.lineNumber, 1, line.lineNumber, 1);
// var id = { major: 1, minor: 1 };             
// var text = "print";
// var op = {identifier: id, range: range, text: text, forceMoveMarkers: true,language:"python"}
// this.editDiv.executeEdits(null, [op]);
},
build:function(){
 
 let text = "";


   let codeOutput="";
   let language = "";
   let code = document.getElementById("code").value;

   if(code===""){
       document.getElementById("output").innerHTML = "";
       return null;
   }

   const encodedParams = new URLSearchParams();
   encodedParams.append("code", code);

   language = document.getElementById("languages").value;
   if(language===""){
       document.getElementById("output").innerHTML = "Please select a language";
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
           if(codeOutput===""&&data.error==="") {
               document.getElementById("outputDisplay").value = "No Output";
           }
           else if(codeOutput!==""){
               document.getElementById("outputDisplay").value= codeOutput;
           }
           else
               document.getElementById("outputDisplay").value = "Failed to Compile, Error: "+data.error;
       })
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



   
  
  }
};




</script>