import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

export const LogInForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const signInWithEmail = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/home")
    }
    catch (err) {
        alert("Please enter a valid email and password.")
    }
  }

  const signInWithGoogle = async () => {
    try{
      await signInWithPopup(auth, googleProvider)
      navigate("/home")
    }
    catch (err) {
      alert("Login with Google failed. Please try again.")
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
      <div className="loginform-wrapper">
        <Helmet>
          <title>Sign In</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
        </Helmet>
        <button
          onClick = {signInWithGoogle}
          className="google-button"
        >
          Sign in with Google
          <p className="custom-icon">A</p>
        </button>
        <input className="input-field"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          autoComplete="on"
        />
        <input className="input-field"
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          autoComplete="on"
        />
        <motion.button
          onClick = {signInWithEmail}
          className="submit-button"
          whileHover={{
            boxShadow: "0px 15px 35px var(--shadow)",
            transition: { duration: 0.1 }
          }}
        >
          Sign In
          <i className="material-icons">trending_flat</i>
        </motion.button>
      </div>
    </HelmetProvider>
  )
}