import React from 'react';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/Login';
import Signup from './components/Signup';
import Sell from './components/Sell';
import AddProduct from './components/AddProduct';
import useDarkMode from "./hooks/useDarkMode";

function App() {

  const [darkMode, setDarkMode] = useDarkMode();
  console.log("Your mode is dark: ", darkMode)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            African Marketplace App
          </h1>
            <div className="dark-mode__toggle">
              <div
              onClick={toggleMode}
              className={darkMode ? 'toggle toggled' : 'toggle'}
              />
            </div>
        </header>
        <Route exact path="/" component={LoginForm} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/sell" component={Sell} />
        <PrivateRoute path="/myads" component={AddProduct} />
      </div>
    </Router>
  );
}

export default App;
