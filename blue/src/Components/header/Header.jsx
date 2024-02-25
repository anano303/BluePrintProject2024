import React from "react";
import Navbar from "../navbar/navbar.jsx";
import logo from "../Icons/logo anim.png";
import "./Header.css";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { TEXTS } from "../../Languages.js";
import { useContext } from "react";

const Header = () => {
  const { language } = useContext(LanguageContext);

  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);

  const ligthOnClick = () => {
    themeContext.setTheme("light");
  };
  const darkOnClick = () => {
    themeContext.setTheme("dark");
  };
  const geoOnClick = () => {
    langContext.setLanguage("ge");
  };
  const enOnClick = () => {
    langContext.setLanguage("en");
  };

  return (
    <div className="headerPage">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Navbar />

      <div>
        <div className="contIcons">
          <div className="ThemeMainDiv">
            <div
              className={
                "lightMode " +
                (themeContext.theme === "light" ? "unvisible" : "")
              }
              onClick={ligthOnClick}
            >
              <div className="darkLightStyles"></div>
            </div>

            <div
              className={
                "darkMode " + (themeContext.theme === "dark" ? "unvisible" : "")
              }
              onClick={darkOnClick}
            >
              <div className="darkLightStyles"></div>
            </div>
          </div>

          <div className="MainLangDiv">
            <div
              className={
                "GeoFlag " + (langContext.language === "ge" ? "unvisible" : "")
              }
              onClick={geoOnClick}
            >
              <div className="darkLightStyles"></div>
            </div>

            <div
              className={
                "EnFlag " + (langContext.language === "en" ? "unvisible" : "")
              }
              onClick={enOnClick}
            >
              <div className="darkLightStyles"></div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
