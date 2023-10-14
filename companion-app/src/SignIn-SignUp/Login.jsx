import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../FirebaseConfig';
import './Login.css';

function Login() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  }

  return (
    <div className="container">
      <img className="icon" src="https://img.icons8.com/?size=512&id=17949&format=png"/>
      <button onClick={handleGoogleLogin} className="login-button">Login With Google</button>
    </div>
  );
}

export default Login;
