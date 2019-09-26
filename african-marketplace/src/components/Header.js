import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to = "/dashboard">><img
          src={require("../images/am-logo-header.png")}
          alt="Business Logo"
          className="logo"
        /></Link>
      </div>

      <div className="nav-container">
        <Link to="/sell">Sell</Link>
        <Link to="/myads">My Products</Link>
        <Link onClick={logout} to="/">
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Header;
