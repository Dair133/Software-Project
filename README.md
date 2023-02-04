# Software-Project
**_General Notes_**

Please excuse any typos

PLEASE NOTE: There are 3 totally different storage databases. **_Firestore_**(storing strings,ints under certain ids) and **_storage_**(for storing files) and **_realtime database_**(for storing small amounts of data that we need to access frequently)


**AuthCreateAccount.vue**

• Do not use one of you main passwords because this is not secure at all !!!!!!!!

•	Use a strong password or it will print an error.

•	Confirmation input boxes have yet to be added this will get the user to type in their credentials twice

•	If you want to test the page multiple times with the same email then make sure to go to ‘authentication’ on firebase and delete your previous account, this can also be used to ensure that your account creation was successful.

•	I have not tested if this works on the vue local server, it may have to be on the firebase server.

• When you create an account it creates a firestore entry also in case any extra data needs to be stored write now this just sotres placeholder text.

**AuthSignIn.vue**

• When signing in you can use either the account credentials you have created or the sample ones I have left on the page for you to use.

• If you sign in and then go to the naviagtion page and then click accountPage then it will display your account details.


**AccountPage.vue**

• This page is intented to be a layout an acccount/Settings page. I have not tested the change email function cause its annoying.

• The change display name should work correctly.

• If you type in a name, click 'change display name' then refresh the page and the new name should appear.

• Click to change tect currently does nothing and is purely for testing purposes.


**AuthChangePassword**

• This page functions correctly and if you type in your email and click the button it will send you a change password email


**Homepage.vue**
• The intention with this page is to be the 'Play Game' page that possibly contains a list of challenges, the leaderboard, links to the different types of games,etc

• Functionally doesn't do a lot as we need the IDE in before we can begin on leaderboard,chat,different types of challeneges etc


**Navigation.vue**

• Just a simple naviagiton page whcich contains links to all the other pages.


**Screenshot.vue**

• This is a experimental page which I was using to test the storage database currently this reads in text from a text file in the storage database and prints
 it to the console. It can also be very easily changed to take an image from the storage database and display it all i need to do is change one string
 
 • The general goal with this page is to potentially allow users to upload their own challenges,profile pictures,maybe even upload a unique background for their
 home page kind've like how you can change your steam account background.
 
 • In the future each user will have their own series of files one for images,personal challenges uploaded,file which contains code they wish to download,etc.
 
 • Potential with this is very high.
 
**Test.vue**
 
 • This page is also a testing page. This was the page i was using to experiment with functions,nodejs and https requests. No clear intention for this page
 it was also used to complete class notes.
 
 **Index.js**
 
  •This page is monstly commented out because i wanted to upload functions without it taking 5 minutes everytime I deployed. Feel free to uncomment and deploy
  as you wish most of the functions on that page function correctly. I believe the only page right now which relies on cloud functions is the test.vue page
  
  •In the future we may want to reduce code repition by converting some functions into cloud functions so they can be called on any page easily.
  
  Main.js
  • Main.js contains functions which return the different firebase components as objects. This means that we can reduce repition of imports. IN order to call a             function you need to import test from main ( import test from '../main') no brackets. Then to call a function from main you use test.methods.desiredFunctionName()
    there is an example of this in the screnshots page within the uploadFile function in the getStorage function. At the time of writinhg this is on line 57



