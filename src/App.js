import "./styles/App.css"
import "./styles/Universal.css"
import "./styles/Welcome.css"
import "./styles/Login.css"
import { Welcome } from "./components/Welcome"
import { LogIn } from "./components/LogIn"
import { CreateLogIn } from './components/CreateLogin'
import { Home } from "./components/Home"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Helmet>
            <title>MonkeyWrench</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
          </Helmet>
          <Routes>
            <Route
              exact path="/"
              element={<Welcome/>}
            />
            <Route
              path="/login"
              element={<LogIn/>}
            />
            <Route
              path="/create-account"
              element={<CreateLogIn/>}
            />
            <Route
              path="/home"
              element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
