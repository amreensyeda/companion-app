import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "Your api key",
  authDomain: "Your domain",
  projectId: "Your details",
  storageBucket: "Your details",
  messagingSenderId: "Your details",
  appId: "Your details",
  measurementId: "Your details"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app};
