import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navbar.css";
import closeImage from "../Icons/X.png";
import toggleImage from "../Icons/Menu.png";
import { useContext } from "react";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";

const Navbar = ({ setShowAllPages }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);
  useEffect(() => {
    setClickedLink(location.pathname);
  }, [location.pathname]);

  const geoOnClick = () => {
    langContext.setLanguage("ge");
  };
  const enOnClick = () => {
    langContext.setLanguage("en");
  };

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLinkClick = (link) => {
    setClickedLink(link);
    setShowLinks(false);
    setShowAllPages(false);
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
                <Link
                  to="/"
                  onClick={() => {
                    handleLinkClick("/");
                    closeNavbar();
                  }}
                  className={clickedLink === "/" ? "active" : ""}
                >
                  {" "}
                  {TEXTS[language].home}{" "}
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => {
                    handleLinkClick("/about");
                    closeNavbar();
                  }}
                  className={clickedLink === "/about" ? "active" : ""}
                >
                  {TEXTS[language].about}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => {
                    handleLinkClick("/services");
                    closeNavbar();
                  }}
                  className={clickedLink === "/services" ? "active" : ""}
                >
                  {TEXTS[language].services}
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => {
                    handleLinkClick("/portfolio");
                    closeNavbar();
                  }}
                  className={clickedLink === "/portfolio" ? "active" : ""}
                >
                  {TEXTS[language].portfolio}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => {
                    handleLinkClick("/contact");
                    closeNavbar();
                  }}
                  className={clickedLink === "/contact" ? "active" : ""}
                >
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
