import "../index.css"
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom";

export const LogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  console.log(auth?.currentUser?.email)

  const signInWithEmail = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        console.error(err)
    }
    navigate("/home")
  }

  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleProvider)
    }
    catch (err) {
      console.error(err)
    }
    navigate("/home")
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    }
    catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
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
  )
}