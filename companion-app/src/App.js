import React, { useState } from "react";
import Login from "./SignIn-SignUp/Login";
import Home from "./home/Home";// Import the Home component
import { auth } from './FirebaseConfig'; // Import your Firebase authentication configuration
import QuestionScreen from "./questions/QuestionScreen";

function App() {
  const [user, setUser] = useState(null); // Initialize the user state

  auth.onAuthStateChanged((currentUser) => {
    // Check if a user is logged in
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      
      {user ? (
        <Home user={user} />
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
