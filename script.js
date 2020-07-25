  var firebaseConfig = {
    apiKey: "AIzaSyCj7ev2kfWEeC8Fy1eunEPmqBITb56a4FI",
    authDomain: "jaldooth.firebaseapp.com",
    databaseURL: "https://jaldooth.firebaseio.com",
    projectId: "jaldooth",
    storageBucket: "jaldooth.appspot.com",
    messagingSenderId: "576960951689",
    appId: "1:576960951689:web:b86d5fc035755a8ff71d58",
    measurementId: "G-3TYKCPN8P0"
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

  // Clear form
  document.getElementById('contactForm1').reset();
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