// confused

// {/* <script type="module"> */}

//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyB-CT77c3YDG_clEgWWWVwp-WoDda7eXk8",
//     authDomain: "phan-quang-minh-long.firebaseapp.com",
//     databaseURL: "https://phan-quang-minh-long-default-rtdb.firebaseio.com",
//     projectId: "phan-quang-minh-long",
//     storageBucket: "phan-quang-minh-long.appspot.com",
//     messagingSenderId: "512552014980",
//     appId: "1:512552014980:web:089ee965f2687427709ed1",
//     measurementId: "G-76C5X8H02B"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

  var firebaseConfig = {
    apiKey: "AIzaSyB-CT77c3YDG_clEgWWWVwp-WoDda7eXk8",
    authDomain: "phan-quang-minh-long.firebaseapp.com",
    databaseURL: "https://phan-quang-minh-long-default-rtdb.firebaseio.com",
    projectId: "phan-quang-minh-long",
    storageBucket: "phan-quang-minh-long.appspot.com",
    messagingSenderId: "512552014980",
    appId: "1:512552014980:web:089ee965f2687427709ed1",
    measurementId: "G-76C5X8H02B"
  };

// {/* </script> */}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

const rootRef = firebase.database().ref("issues/");

// Task 3 ------------------------------------------

// test push data thử
// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });

// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");

// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

var recordRef = firebase.database().ref("issues/delete-me");

recordRef.remove()
   .catch(function(error) {
     alert("Delete failed: " + error.message)
   });
