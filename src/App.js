import './index.css'
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
