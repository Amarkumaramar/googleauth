import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // Login function
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="App">
      {!user ? (
        <div>
          <h1>Welcome to the App</h1>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
