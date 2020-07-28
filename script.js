  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhNrAlsKws8GZNlZ1UnsnRHeQ8XJkKnSc",
    authDomain: "jaldoot.firebaseapp.com",
    databaseURL: "https://jaldoot.firebaseio.com",
    projectId: "jaldoot",
    storageBucket: "jaldoot.appspot.com",
    messagingSenderId: "855265481949",
    appId: "1:855265481949:web:d41a3d18bb4a96dc243734",
    measurementId: "G-PVXMVP4707"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  // FCM
  // const messaging = firebase.messaging();
  // messaging.requestPermission()
  // .then(function() {
  //   console.log('Have Permission');
  //   return messaging.getToken();
  // })
  // .then(function(token) {
  //   console.log(token);
  // })
  // .catch(function(err) {
  //   console.log('error: ', err);
  // })

  // messaging.onMessage(function(payload) {
  //   console.log('onMessage: ', payload);
  // });



  // var messageRef = firebase.database().ref();
  // var messageRef1 = firebase.database().ref();

document.getElementById('contactForm1').addEventListener('submit', submitForm);
// Retrieve Firebase Messaging object.

function submitForm(e) {
  e.preventDefault();

  // get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var city = getInputVal('city');
  var pincode = getInputVal('pincode');
  var address = getInputVal('address');

  saveMessage(name, email, phone, city, pincode, address);

  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm1').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, email, phone, city, pincode, address) {

  var newMessageRef = firebase.database().ref().child('applicants').push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    city: city,
    pincode: pincode,
    address: address
  });
}