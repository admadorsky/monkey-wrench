import { useNavigate } from "react-router-dom";

export const Welcome = () => {

  const navigate = useNavigate()

  const toLogIn = () => {
    navigate("/login")
  }

  const toCreateAccount= () => {
    navigate("/create-account")
  }

  return (
    <div>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"/>
      </head>
      <h1>Welcome</h1>
      <button
        className="submit-button"
        onClick={toLogIn}
      >
        Log in
        <i className="material-icons">trending_flat</i>
      </button>
    </div>
  );
}