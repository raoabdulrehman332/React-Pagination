
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQqJUxRK5vXeTDIFogPxaRIdVSRMo0lbo",
  authDomain: "batch-11-7f35f.firebaseapp.com",
  projectId: "batch-11-7f35f",
  storageBucket: "batch-11-7f35f.appspot.com",
  messagingSenderId: "592055584312",
  appId: "1:592055584312:web:ab94c4dfdea62e3baa48cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth , app
}