
//web version 8 namespaced?
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const { Storage } = require('@google-cloud/storage');
admin.initializeApp();

// Accept comment and return the same comment to the user
exports.postcomment = functions.https.onRequest((request, response) => {
cors(request, response, () => {
const currentTime = admin.firestore.Timestamp.now();
request.body.timestamp = currentTime;
return admin.firestore().collection('comments').add(request.body).then(()=>{
response.send({"data":"Saved in the database"});
});
});
}); 



 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello fzzzrom Firebase!");
 });
 exports.addMessage = functions.https.onCall((data,response) => {
  const text = data.text;
  window.location = data
  return text;
   //functions.logger.info("Hello logs!");

  });





  exports.readFile = functions.https.onRequest((request, response) => {
    const functions = require("firebase-functions");
const admin = require('firebase-admin');

const cors = require('cors')({origin: true});
const app = admin.initializeApp();
    cors(request, response, () => {
    const currentTime = admin.firestore.Timestamp.now();
    request.body.timestamp = currentTime;
    const storage = getStorage(app);
    getDownloadURL(ref(storage, 'images/stars.jpg'))
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
        //const img = document.getElementById('myimg');
       // img.setAttribute('src', url);
       response.send({"data":url});
      })
    });
    });

    
     
    exports.downloadFile = functions.https.onCall(async (req, res) => {
     
      //res.set('Access-Control-Allow-Origin', '*');
      //res.set('Access-Control-Allow-Methods', '*');
      //res.set('Access-Control-Allow-Headers', '*');
      const storage = new Storage();
    
      const bucketName = 'gs://software-engineering-d3376.appspot.com';
      const fileName = 'space.jpg';
      
     // storage
     // .bucket(bucketName)
   //.file(fileName)
     // .createReadStream()


      const file = storage.bucket(bucketName).file('space2.jpg');
      const stream = file.createReadStream();
      
        file.createReadStream()
        .on('error', (err) => {
          res.status(500).send(err);
        })
        .pipe(stream);
      
        
       // while(stream!= null){
    //      console.log("inside while loop")
     //     console.log(stream._read());
     // }
    });
     
       //return "hellow workd"
  
  
    
      
  
  
      
    
      
  
    

