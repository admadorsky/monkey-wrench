import "../index.css"
import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useNavigate } from "react-router-dom";

export const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signInWithEmail = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
    }
    catch (err) {
        alert(err.code)
    }
  }

  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleProvider)
      navigate("/home")
    }
    catch (err) {
      alert(err.code)
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    }
    catch (err) {
      alert(err.code)
    }
    navigate("/")
  }

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1>Log In</h1>
        <input className="input-field"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="input-field"
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick = {signInWithEmail}
          className="submit-button"
        >
          Sign In
        </button>
        <button
          onClick = {signInWithGoogle}
          className="alternate-button"
        >
          Sign in with Google
        </button>
        <button
          onClick = {logOut}
          className="caution-button"
        >
          Logout
        </button>
      </div>
    </HelmetProvider>
  )
}