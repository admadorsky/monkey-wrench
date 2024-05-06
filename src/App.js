import './index.css'
import { Welcome } from "./components/Welcome"
import { LogIn } from "./components/LogIn"
import { Home } from "./components/Home"
import { Helmet } from "react-helmet"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
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
            exact path="/login"
            element={<LogIn/>}
          />
          <Route
            path="/home"
            element={<Home/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
