import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Icons/logo anim.png";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext.js";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const lightOnClick = () => {
    themeContext.setTheme("light");
  };
  const darkOnClick = () => {
    themeContext.setTheme("dark");
  };
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
