<template>
    <head>
    
    </head>
    <body class = bodyMain>
      
    <header>
    
    </header>
    
      
      <div>
      
        <h1 style = "color:hotpink;border-bottom: crimson;">Welcome back <span id = name></span>
          <button @click="signOut()" style="position:relative;left:0.5cm" class="btn btn-primary">Sign Out</button>
        <button @click="accountPage()" style="position:relative;left:1cm" class="btn btn-primary">Account Page</button>
        <button @click="navigationPage()" style="position:relative;left:1.5cm"  class="btn btn-primary">Navigation Page</button>
      </h1>
    <textarea id="code" class = textArea></textarea>Enter code here<br>
<textarea id="outputDisplay" class =outputTextArea></textarea>Shell<br>
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
<button class="btn btn-primary" @click="readTextFile();">Activate Challenge</button>
<button class="btn btn-primary" style = "left:12cm;" @click="build()">Compile</button><br>
<div id=" name"></div>
<div id="uid"></div>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>
<router-link to ="/test" style="visibility:hidden" class =btn-primary>Node Test Page</router-link><br>

       

<p style="white-space: pre-line;height: 1.8cm;" id='output'></p>

        
      </div>
    
   
 

  </body>
    
  </template>
  <style>

  main {
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
  /*background-image: radial-gradient(#800080, #700070);*/
}
.bodyMain{
  width:100%;
  height: 100%;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}
.background{
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 20.8%, rgb(0, 255, 160) 100.2%);
}



* {
  font-family: 'Secular One', sans-serif;
}
.btn-primary{
  position: relative;
  display: inline-block;
  width: 35mm;
  height: 35mm;
  left:10cm;
                outline: 0;
                border: 0;
                cursor: pointer;
                will-change: box-shadow,transform;
                background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #5468FF 100% );
                box-shadow: 0px 2px 4px rgb(45 35 66 / 40%), 0px 7px 13px -3px rgb(45 35 66 / 30%), inset 0px -3px 0px rgb(58 65 111 / 50%);
                padding: 0 32px;
                border-radius: 6px;
                color: #fff;
                height: 48px;
                font-size: 14px;
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
              
                


.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: 100%;
}

.image1 {
  width: 85vh;
}

.content {
  margin-left: 10px;
  color: magenta;
  
}
.textArea{
  left:10cm;
  position:relative;
  background-color: black;
  color:white;
  width:20cm;
  height:9cm;
}
.outputTextArea{
  position: relative;
  left: 10cm;
  background-color: black;
  color:white;
  width:20cm;
  height: 3cm;
}

h1 {
  font-size: 40px;
}

p {
  color:blue;
  font-size:5px;
  
}

a {
  color: black;
  background-color: brown;
  font-size: 25px;
  padding: 7px 20px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
    <script>
    import  firebase  from 'firebase/compat/app';
    import { getStorage,ref,uploadBytes } from 'firebase/storage';
import { httpsCallable } from '@firebase/functions';
import { getFunctions} from "firebase/functions";
import {  getDownloadURL } from "firebase/storage";
import test from '../main'
    
    export default {
      emits: ["open-note"],
      props: {
      note: {}
      },
      data(){
        return{
          username:""
        }
      },
      mounted() {

test.methods.auth()

setTimeout(() => {

   if(test.methods.checkEntryExistence()){
             console.log("User Entry Exists")
    }
  else{
    test.methods.createUserEntry() 
   }
  },500)





      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', "API-Handler.js")
      document.head.appendChild(recaptchaScript)
    },

      methods: {
    signOut:function(){
      firebase.auth().signOut().then(function() {//signs user out

        window.location = "/authSignIn";//brings user to the sign in page
        console.log('Signed Out');
        });
    },

    accountPage:function(){
        window.location = "/accountPage"//brings user to the accountPage
    },
    navigationPage:function(){
      window.location = "/"
    },

auth:function(){
    firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    
    document.getElementById("name").innerHTML = user.displayName
    //document.getElementById("displayName").innerHTML = user.displayName//displays
    //document.getElementById("email").innerHTML = user.email   
  } 
  else {
    console.log("Error signing in")
  }
  }).bind(this)
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
readTextFile:function(){//functions correctly
  var storage = getStorage(test.methods.intialiseFirebase())
   
   var textHolder = getDownloadURL(ref(storage, 'holder.java'))
   .then((url) => {
    
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';//make sure that blob is the response file very important to ensure file can be read correctly

    xhr.onload = (event) => {

        const blob = xhr.response;
        console.log("The first blob"+blob); //for testing

        const reader = new FileReader();
        reader.readAsText(blob);
  
         reader.onload = function getFile() {

           const text = reader.result

           console.log(text);

           this.fileText = text //'returns' the text so it can be read in any function
           console.log(this.fileText)
   
         
           document.getElementById('code').value = text
     };

    };
    console.log("beofre get statment")
    
    xhr.open('GET', url);
    xhr.send();
  

    // Or inserted into an <img> element
    

  })
  .catch((error) => {
    // Handle any errors
  });
  

    }


    }
}
    </script>

