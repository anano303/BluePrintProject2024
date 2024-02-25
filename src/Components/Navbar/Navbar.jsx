
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const toggleLinks = () => {
    setShowLinks(!showLinks);
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
              <Link to="/contact">{TEXTS[language].contact}</Link>
            </li>
            <li>
              <Link to="/about">{TEXTS[language].about}</Link>
            </li>
            <li>
              <Link to="/services">{TEXTS[language].services}</Link>
            </li>
            <li>
              <Link to="/portfolio">{TEXTS[language].portfolio}</Link>
            </li>
          </ul>
        )}
      </div>

      <div className="toggle-button" onClick={toggleLinks}>
        <img src={showLinks ? closeImage : toggleImage} alt="Toggle" />{" "}
        {/* Use appropriate images */}
      </div>
    </div>
  );
};

export default Navbar;
