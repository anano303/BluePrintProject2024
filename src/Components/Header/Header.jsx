import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import logo from "../Icons/logo anim.png";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext.js";
import { useContext } from "react";

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
      <div className="icons">
        <img src={logo} alt="logo" className="logo" />
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
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
