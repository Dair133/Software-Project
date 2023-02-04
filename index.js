
//web version 8 namespaced?
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
const { Storage } = require('@google-cloud/storage');
admin.initializeApp();

// Accept comment and return the same comment to the user
//exports.postcomment = functions.https.onRequest((request, response) => {
//cors(request, response, () => {
//const currentTime = admin.firestore.Timestamp.now();
//request.body.timestamp = currentTime;
//return admin.firestore().collection('comments').add(request.body).then(()=>{
//response.send({"data":"Saved in the database"});
//});
//});
//}); 


  exports.downloadFile = functions.https.onCall(async (req, res) => {
     
    
      const storage = new Storage();
    
      const bucketName = 'gs://software-engineering-d3376.appspot.com';
      const fileName = 'space.jpg';
      
   


     const imageRef = storage.bucket(bucketName).file('space2.jpg');
     return imageRef
     
   //  const imageRef = admin.storage().bucket().file('images/image.jpg');
 //    return imageRef.getSignedUrl({
   //    action: 'read',
   //    expires: '03-09-2491'
   //  }).then(signedUrls => {
   //    return {imageUrl: signedUrls[0]};
  //   });
   });
  
     
      //const stream = file.createReadStream();
      
      //  file.createReadStream()
       // .on('error', (err) => {
      //    res.status(500).send(err);
      //  })
       // .pipe(stream);
      
        
       // while(stream!= null){
    //      console.log("inside while loop")
     //     console.log(stream._read());
     // }
  
//  exports.getcomments = functions.https.onRequest((request,
//response) => {
//cors(request, response, () => {
// 1. Connect to our Firestore database
//let myData = []
//admin.firestore().collection('comments').orderBy("timestamp",
//"desc").get().then((snapshot) => {
//if (snapshot.empty) {
//console.log('No matching documents.');
//response.send('No data in database');
//return;
//}
//snapshot.forEach(doc => {
//myData.push(doc.data());
//});
// 2. Send data back to client
//response.send({data:myData});
//});
//});
//});   
  
  
  
    
      
  
  
      
    
      
  
    

