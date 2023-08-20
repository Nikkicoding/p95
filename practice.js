
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyChvzqvTTyh1o3LifWlogBG-Go1gb4Vmuw",
    authDomain: "class93-dc07d.firebaseapp.com",
    projectId: "class93-dc07d",
    storageBucket: "class93-dc07d.appspot.com",
    messagingSenderId: "1035589658608",
    appId: "1:1035589658608:web:b08e70dbbf76d310311f35"
  };
  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) document.getElementById("output").innerHTML
    Group_name = childKey;
    
    )};
    getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
Room_names = childKey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML  += row;

})};
    getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}