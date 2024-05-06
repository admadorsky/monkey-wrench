import "../index.css"
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useNavigate } from "react-router-dom";

export const CreateLogIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  console.log(auth?.currentUser?.email)

  const signInWithEmail = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1>Create Account</h1>
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
      </div>
    </HelmetProvider>
  )
}