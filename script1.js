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

  document.getElementById('contactForm2').addEventListener('submit', submitForm1);

  function submitForm1(e) {
  e.preventDefault();

  // get values
  var name = getInputVal('name1');
  var email = getInputVal('email1');
  var phone = getInputVal('phone1');
  var city = getInputVal('city1');
  var pincode = getInputVal('pincode1');
  var address = getInputVal('address1');

  saveMessage1(name, email, phone, city, pincode, address);
  document.getElementById('contactForm2').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage1(name, email, phone, city, pincode, address) {
  var newMessageRef1 = firebase.database().ref().child('users').push();
    newMessageRef1.set({
     name: name,
    email: email,
    phone: phone,
    city: city,
    pincode: pincode,
    address: address
    });
  }