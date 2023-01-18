import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
import { getFirestore,doc,getDocs,getDoc} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
function main(){
try {
  let app = firebase.app();
  let features = [
    'auth', 
    'database', 
    'firestore',
    'functions',
    'messaging', 
    'storage', 
    'analytics', 
    'remoteConfig',
    'performance',
  ].filter(feature => typeof app[feature] === 'function');
  loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
} catch(e){

}
}
function signOut(){
  main();
  firebase.auth().signOut().then(function() {
   window.location = "authSignIn.html";
  console.log('Signed Outzzzzz');
}, function(error) {
  console.error('Sign Out Error', error);
});
  }
export { signOut }

function homePage(){
main()
window.location = "Homepage.html";
 console.log('Going to hompage'); //for testing
}
export { homePage };

function returnAccountDetails(){
  var details = [];
main();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("inside function")
    //document.getElementById("name").innerHTML = user.displayName
    //document.getElementById("email").innerHTML = user.email;
    //document.getElementById("displayName").innerHTML = user.displayName;
    details[0] = user.displayName
    details[1] = user.email;
    
    let name = user.displayName
    let email = user.email
    console.log(name +email)
    return [name,email]
  } else {
   
    
  }
});
//return false;
     }
     export { returnAccountDetails }

     function testFunction(){
      var number =1;
      return number;
     }
     export { testFunction }
  


