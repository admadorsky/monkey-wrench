import { useNavigate } from "react-router-dom";
import welcomeImage from "../img/Welcome_3x.png"
import { Helmet, HelmetProvider } from "react-helmet-async";

export const Welcome = () => {

  const navigate = useNavigate()

  const toLogIn = () => {
    navigate("/login")
  }

  const toCreateAccount= () => {
    navigate("/create-account")
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
          <h1>Welcome</h1>
          <p>
            Manage at-home maintenance and ensure the longevity of your vehicles
          </p>
          <button
            className="submit-button"
            onClick={toLogIn}
          >
            <span className="button-text">login</span>
            <i className="material-icons">trending_flat</i>
          </button>
          <p>
            Don't have an account?
            <span
              className="paragraph-link"
              style={{fontWeight:"900"}}
              onClick={toCreateAccount}>
                Sign Up
              </span>
          </p>
        </div>
      </main>
    </HelmetProvider>
  );
}