
var firebaseConfig = {
    apiKey: "AIzaSyBrNP1v9CyNKIeHUxOPF0Lzf7UxU84oJOg",
    authDomain: "kidstagram-ea334.firebaseapp.com",
    databaseURL: "https://kidstagram-ea334-default-rtdb.firebaseio.com",
    projectId: "kidstagram-ea334",
    storageBucket: "kidstagram-ea334.appspot.com",
    messagingSenderId: "374322508881",
    appId: "1:374322508881:web:b9ede7099421264899b470"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }