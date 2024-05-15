import { auth, googleProvider } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

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
      <div className="login-wrapper">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1 className="title">Log In</h1>
        <button
          onClick = {signInWithGoogle}
          className="google-button"
        >
          Sign in with Google
        </button>
        <input className="input-field"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className="input-field"
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
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
        </motion.button>
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