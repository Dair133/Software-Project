<template>
    <head>
    
    </head>
    <body>
      <p>This is the sceenshots page. Users will be able to upload screenshots here</p>
      <button @click="readFile()">test downloadFile function</button>
      <button @click="readFile2()">test read function number 2</button>
        <button @click="uploadFile()">upload photo</button>
        <button @click="nonCloudRead()"> not cloud file</button>
        <button @click="readTextFile()"> read text file</button>
        <p id =p1></p>
        <input id = fileItem type = file>
        <img id =myImg>
        <p id = wordText></p>
        <p id = wordText2></p>
     <label>Type in the name you would like you file to be stored under</label>
        <input id = fileName>
    </body>
    </template>
    <script>
    import  firebase  from 'firebase/compat/app';
    import "firebase/storage";
    import test from '../main'
    import "firebase/storage";
import { getStorage,ref,uploadBytes } from 'firebase/storage';
import { httpsCallable } from '@firebase/functions';
import { getFunctions} from "firebase/functions";
import {  getDownloadURL } from "firebase/storage";
import { SourceMapGenerator } from 'source-map';


const readBlobAsText = (blob,encoding ='UTF-8') => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(blob);
  });
};
    export default {
      emits: ["open-note"],
      props: {
      note: {}
      },
    
      methods: {
    uploadFile:function(){

        //var file =  new File(arrayStrings,'space.jpg');//second argument here is path of file you want to upload
        const file = document.getElementById('fileItem').files[0];
        
        var storage = getStorage(test.methods.intialiseFirebase())
           
       var fileName = document.getElementById('fileName').value
        if(fileName == ""){
            fileName = "File Number 1"
        }
           const storageRef = ref(storage, fileName);//the second argument here is the path of where you want the file to go in the storage database
           //const imagesRef = ref(storage, 'images');
           //const spaceRef = ref(storage, 'images/space.jpg');
           uploadBytes(storageRef, file).then((snapshot) => {
           console.log('Uploaded a blob or file!');
           document.getElementById("p1").innerHTML = "Photo sucesfully uploaded"
});
               //const firebase = test.methods.intialiseFirebase()
              // const test =  test.methods.intialiseStorage()
            
        },
    readFile:function(){
  
        const functions = getFunctions(test.methods.intialiseFirebase());
       // const downloadFileVar = httpsCallable(functions, 'downloadFile');
    const downloadFileVar = httpsCallable(functions,'downloadFile');
downloadFileVar().then((result) => {
// Read result of the Cloud Function.
/** @type {any} */
console.log("successful downloadFile data property of result"+result.data);
console.log("successful downloadFile normal result variable"+result);
console.log("successful typeof is"+typeof(result));

imageUrl = result.data.imageUrl
document.getElementById("myImg").src = imageUrl;
});
},
nonCloudRead:function(){
    var storage = getStorage(test.methods.intialiseFirebase())
    
getDownloadURL(ref(storage, 'Example.docx'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myImg');
   document.getElementById('wordText').src = url
   document.getElementById('wordText2').innerHTML = url
    console.log(url)
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
  

},
readTextFile:function(){


    var storage = getStorage(test.methods.intialiseFirebase())
   
    getDownloadURL(ref(storage, 'newer.txt'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'
    // This can be downloaded directly:

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
        console.log("The first blob"+blob); 
        const reader = new FileReader();
       reader.readAsText(blob);
   
    
       reader.onload = function() {
        console.log("this is inside the reader function"+typeof(blob))
          const text = reader.result
  console.log(text);
};
    };
    console.log("beofre get statment")
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    console.log(url)
    var blobUrl = url.getBlob()
    console.log("The blobl url is"+blobUrl)
   console.log("reached this poinst")
      fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    });


  })
  .catch((error) => {
    // Handle any errors
  });


    },
   
    
},




    
    }

//npm install -gforebase-tools
    </script>

