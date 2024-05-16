import { useNavigate } from "react-router-dom";
import logInImage from "../img/LogIn.png"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion"
import { LogInForm } from "./LogInForm"

export const LogIn = () => {
  
  const navigate = useNavigate()

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
          <h1>Log In</h1>
          <LogInForm/>
        </div>
        <p className="hint">
            Don't have an account?
            <span
              className="hint-link"
              style={{fontWeight:"900"}}
              onClick={toCreateAccount}>
                Sign Up
            </span>
          </p>
      </div>
    </HelmetProvider>
  )
}