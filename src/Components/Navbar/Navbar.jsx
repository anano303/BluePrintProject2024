import React, { useState } from "react";
import { Link } from "react-router-dom";
import toggle from "../Icons/Toogle.png";
import "./Navbar.css";
import closeImage from "../Icons/X.png";
import toggleImage from "../Icons/Menu.png";
import { useContext } from "react";
import { TEXTS } from "../../Languages.js";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const { language } = useContext(LanguageContext);

  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);

  const geoOnClick = () => {
    langContext.setLanguage("ge");
  };
  const enOnClick = () => {
    langContext.setLanguage("en");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const lightOnClick = () => {
    themeContext.setTheme("light");
  };
  const darkOnClick = () => {
    themeContext.setTheme("dark");
  };

  return (
    <div>
      <div className={`navbar ${showLinks ? "" : "hidden"}`}>
        {showLinks && (
          <ul className="links">
            <li>
              <Link to="/"> {TEXTS[language].home} </Link>
            </li>

            <li>
              <Link to="/about" className="aboutLi">
                {TEXTS[language].about}
              </Link>
            </li>
            <li>
              <Link to="/services">{TEXTS[language].services}</Link>
            </li>
            <li>
              <Link to="/portfolio">{TEXTS[language].portfolio}</Link>
            </li>
            <li>
              <Link to="/contact">{TEXTS[language].contact}</Link>
            </li>

            <div className="contIcons">
              <div className="mainLangDiv">
                <div
                  className={
                    "GeoFlag " +
                    (langContext.language === "ge" ? "invisible" : "")
                  }
                  onClick={geoOnClick}
                >
                  <div className="darkLightStyles">
                    {" "}
                    <p>ქართული</p>
                  </div>
                </div>

                <div
                  className={
                    "EnFlag " +
                    (langContext.language === "en" ? "invisible" : "")
                  }
                  onClick={enOnClick}
                >
                  <div className="darkLightStyles">
                    <p> ENGLISH </p>
                  </div>{" "}
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>

      <div className="toggle-button">
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
        <img
          src={showLinks ? closeImage : toggleImage}
          onClick={toggleLinks}
          alt="Toggle"
        />{" "}
        {/* Use appropriate images */}
      </div>
    </div>
  );
};

export default Navbar;
