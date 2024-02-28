import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import closeImage from "../Icons/X.png";
import toggleImage from "../Icons/Menu.png";
import { useContext } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const { language } = useContext(LanguageContext);

  const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  const geoOnClick = () => {
    langContext.setLanguage("ge");
  };
  const enOnClick = () => {
    langContext.setLanguage("en");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const closeNavbar = () => {
    setShowLinks(false);
  };

  return (
    <div>
      <div className={`navbar ${showLinks ? "" : "hidden"}`}>
        {showLinks && (
          <ul className="links">
            <ul>
              <li>
                <Link to="/" onClick={closeNavbar}>
                  {" "}
                  {TEXTS[language].home}{" "}
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={closeNavbar} className="aboutLi">
                  {TEXTS[language].about}
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeNavbar}>
                  {TEXTS[language].services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={closeNavbar}>
                  {TEXTS[language].portfolio}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeNavbar}>
                  {TEXTS[language].contact}
                </Link>
              </li>
            </ul>
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
