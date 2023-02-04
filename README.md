# Software-Project
###General Notes
]=
PLEASE NOTE: There are 3 totally different storage databases. Firestore(storing strings,ints under certain ids) and storage(for storing files) and realtime database(for storing small amounts of data that we need to access frequently)

The first section for each page will contain a short note on how to use the page from the user’s point of view. 
Obviously in the final product the screen will contain this info.

##AuthCreateAccount.vue

• Do not use one of you main passwords because this is not secure at all !!!!!!!!

•	Use a strong password or it will print an error.

•	Confirmation input boxes have yet to be added this will get the user to type in their credentials twice

•	If you want to test the page multiple times with the same email then make sure to go to ‘authentication’ on firebase and delete your previous account, this cam also be used to ensure that your account creation was successful.

•	I have not tested if this works on the vue local server, it may have to be on the firebase server.

• When you create an account it creates a firestore entry also in case any extra data needs to be stored.

##AuthSignIn.vue

• When signing in you can use either the account credentials you have created or the sample ones I have left on the page for you to use.

• If you sign in and then go to the naviagtion page and then click accountPage then it will display your account details.


##AccountPage.vue

• This page is intented to be a layout an acccount/Settings page. I have not tested the change email function cause its annoying.

• The change display name should work correctly.

• If you type in a name, click 'change display name' then refresh the page and the new name should appear.

• Click to change tect currently does nothing and is purely for testing purposes.


##AuthChangePassword
• This page functions correctly and if you type in your email and click the button it will send you a change password email


##Homepage.vue
• The intention with this page is to be the 'Play Game' page that possibly contains a list of challenges, the leaderboard, links to the different types of games,etc

• Functionally doesn't do a lot as we need the IDE in before we can begin on leaderboard,chat,different types of challeneges etc


##Navigation.vue

• Just a simple naviagiton page whcich contains links to all the other pages.


##Screenshot.vue

• This is a experimental page which I was using to test the storage database currently this reads in text from a text file in the storage database and prints
 it to the console. It can also be very easily changed to take an image from the storage database and display it all i need to do is change one string
 
 • The general goal with this page is to potentially allow users to upload their own challenges,profile pictures,maybe even upload a unique background for their
 home page kind've like how you can change your steam account background.
 
 • In the future each user will have their own series of files one for images,personal challenges uploaded,file which contains code they wish to download,etc.
 
 • Potential with this is very high.
 
 ##Test.vue
 
 • This page is also a testing page. This was the page i was using to experiment with functions,nodejs and https requests. No clear intention for this page
 it was also used to complete class notes.
