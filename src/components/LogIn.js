import { useNavigate } from "react-router-dom";
import logInImage from "../img/LogIn.png"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion"
import { LogInForm } from "./LogInForm"
import { CreateLogInForm } from "./CreateLogin"
import { useState } from "react";

export const LogIn = () => {
  
  const navigate = useNavigate()

  const [loggingIn, setLoggingIn] = useState(true)

  const toCreateAccount= () => {
    navigate("/create-account")
  }

  return (
    <HelmetProvider>
      <Helmet>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
      </Helmet>
      <div className="login-wrapper">
        <img src={logInImage} className="img-artwork" alt="Monkey with tools working on red car."/>
        <div className="copy-wrapper">
          { loggingIn ? <h1>Log In</h1> : <h1>Sign Up</h1> }
          { loggingIn ? <LogInForm/> : <CreateLogInForm/> }
          <div className="desktop">
            { loggingIn ? signUpHint() : logInHint() }
          </div>
        </div>
        <div className="mobile">
          { loggingIn ? signUpHint() : logInHint() }
        </div>
      </div>
    </HelmetProvider>
  )

  function signUpHint() {
    return (
      <p className="hint">
        Don't have an account?
        <span
          className="hint-link"
          style={{fontWeight:"900"}}
          onClick={() => setLoggingIn(false)}>
            Sign Up
        </span>
      </p>
    )
  }

  function logInHint() {
    return (
      <p className="hint">
        Already have an account?
        <span
          className="hint-link"
          style={{fontWeight:"900"}}
          onClick={() => setLoggingIn(true)}>
            Log In
        </span>
      </p>
    )
  }
}