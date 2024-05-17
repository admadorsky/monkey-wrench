import { useNavigate } from "react-router-dom";
import welcomeImage from "../img/Welcome.png"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion"
import { LogInForm } from "./LogInForm"
import { CreateLogInForm } from "./CreateLogin"
import { useState } from "react";

export const Welcome = () => {

  const navigate = useNavigate()

  const [loggingIn, setLoggingIn] = useState(true)

  const toLogIn = () => {
    navigate("/login", { state: true })
  }

  const toSignUp = () => {
    navigate("/login", { state: false })
  }

  return (
    <HelmetProvider>
      <main>
        <Helmet>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"/>
        </Helmet>
        <div className="welcome-wrapper">
          <img src={welcomeImage} className="img-artwork" alt="Monkey with tools working on red car."/>
          <div className="copy-wrapper">
            <h1>Welcome</h1>
            <h3>
              Manage at-home maintenance and ensure the longevity of your vehicles
            </h3>
            <motion.button
              className="submit-button"
              onClick={toLogIn}
              whileHover={{
                boxShadow: "0px 15px 35px var(--shadow)"
              }}
            >
              <span className="button-text">login</span>
              <i className="material-icons">trending_flat</i>
            </motion.button>
            <div className="loginform-wrapper">
              { loggingIn ? <LogInForm/> : <CreateLogInForm/> }
            </div>
            <div className="desktop">
              { loggingIn ? signUpHint() : logInHint() }
            </div>
          </div>
          <div className="mobile">
          <p className="hint">
            Don't have an account?
            <span
              className="hint-link"
              style={{fontWeight:"900"}}
              onClick={() => toSignUp()}>
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </main>
    </HelmetProvider>
  );

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