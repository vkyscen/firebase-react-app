import React, { useEffect, useState } from "react";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
} from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="login" style={{ backgroundColor: user ? "red" : "blue" }}>
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>Forgot Password</div>
        <div>
          Don't have an account?{" "}
          <button
            className="login__btn"
            onClick={() => registerWithEmailAndPassword(email, password)}
          >
            Register
          </button>
        </div>
      </div>
      <button className="reset__btn" onClick={() => sendPasswordReset(email)}>
        Send password reset email
      </button>
      <button className="login__btn" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
export default Login;
