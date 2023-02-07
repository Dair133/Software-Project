<template>
    <head>
    
    </head>
    <body>
      <H1>Input</H1>
<textarea id="code"></textarea>
<button @click="build()">Compile</button>
<H1>Code Output</H1>
<p style="white-space: pre-line;" id='output'></p>
        <input id =email>
<p>You are on the Homepage of <span id="name"> </span></p>
        <h2>PLAY GAME HERE?</h2>
        
        <label>Click here to sign out</label>
        <button @click="signOut()"></button>
        <button @click="accountPage()"></button>
    </body>
    
    </template>
    <script>
    import  firebase  from 'firebase/compat/app';
    
    
    export default {
      emits: ["open-note"],
      props: {
      note: {}
      },
      mounted() {
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
auth:function(){
    firebase.auth().onAuthStateChanged(function(user) {//gets 'user' onbject when it has been intialized 
  if (user) {
 
    console.log(user.uid)
    console.log(user.displayName)
    
    document.getElementById("name").innerHTML = user.displayName
    document.getElementById("displayName").innerHTML = user.displayName//displays
    document.getElementById("email").innerHTML = user.email   
  } 
  else {
    console.log("Error signing in")
  }
  })
},
build:function(){
 
    let codeOutput="";
    let code = document.getElementById("code").value;

    const encodedParams = new URLSearchParams();
    encodedParams.append("code", code);
    encodedParams.append("language", "py");

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
            if(codeOutput!="") {
                document.getElementById("output").innerHTML = codeOutput;
            }
            else
                document.getElementById("output").innerHTML = "Failed to Compile, Error: "+data.error;
        })
      .catch(err => console.error(err));



}

    }
}
    </script>

