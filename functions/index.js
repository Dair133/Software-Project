const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

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

