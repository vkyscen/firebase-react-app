import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
