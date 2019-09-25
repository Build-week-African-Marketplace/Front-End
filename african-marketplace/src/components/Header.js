import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src={require("../images/am-logo-header.png")}
          alt="Business Logo"
          className="logo"
        />
      </div>

      <div className="nav-container">
        <Link to="/sell">Sell</Link>
        <a href="#">My Products</a>
        <Link onClick={logout} to="/">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Header;
