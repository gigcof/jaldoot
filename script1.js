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

    document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 sec
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  
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