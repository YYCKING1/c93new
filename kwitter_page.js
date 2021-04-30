//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCIuTZcp8IQAW9kaa9MYA5szmiYWvBDt0U",
      authDomain: "class-text-624a4.firebaseapp.com",
      databaseURL: "https://class-text-624a4-default-rtdb.firebaseio.com",
      projectId: "class-text-624a4",
      storageBucket: "class-text-624a4.appspot.com",
      messagingSenderId: "784847864558",
      appId: "1:784847864558:web:48cd75787648501830e9ff"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function Send()
{
      message = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:message,
            likes:0
      })
}


function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
{
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}