import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Icons/tetri.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerPage">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      {/* <div className="icons">
        <div className="ThemeMainDiv">
          <div
            className={
              "lightMode " + (themeContext.theme === "light" ? "invisible" : "")
            }
            onClick={lightOnClick}
          >
            <div className="darkLightStyles"></div>
          </div>

          <div
            className={
              "darkMode " + (themeContext.theme === "dark" ? "invisible" : "")
            }
            onClick={darkOnClick}
          >
            <div className="darkLightStyles"></div>
          </div>
        </div> */}

      {/* <Navbar />
      </div> */}
      <Navbar />
    </div>
  );
};

export default Header;
