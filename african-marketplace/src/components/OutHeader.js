import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";


function OutHeader() {
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem('userID');
  };

  const [darkMode, setDarkMode] = useDarkMode();
  console.log("Your mode is dark: ", darkMode)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <div className="header-container">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
      <div className="logo-container">
        <Link to="/dashboard">
          <img
            src={require("../images/am-logo-header.png")}
            alt="Business Logo"
            className="logo"
          />
        </Link>
      </div>

    </div>
  );
}

export default OutHeader;
