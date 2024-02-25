import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Icons/logo anim.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerPage">
      <img src={logo} alt="logo" className="logo" />

      <Navbar />
    </div>
  );
};

export default Header;
