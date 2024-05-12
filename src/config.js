import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYy9Uh150i537t_-5lKOKNlc3vDxs7TI",
  authDomain: "pawsome-pets-193c1.firebaseapp.com",
  projectId: "pawsome-pets-193c1",
  storageBucket: "pawsome-pets-193c1.appspot.com",
  messagingSenderId: "663841878633",
  appId: "1:663841878633:web:c7282d7f2130c5e5dc28f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;