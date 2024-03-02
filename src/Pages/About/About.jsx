import "./About.css";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../Languages.js";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";
import { Link } from "react-router-dom";

const About = () => {
  const { language } = useContext(LanguageContext);

  // const themeContext = useContext(ThemeContext);
  // const langContext = useContext(LanguageContext);

  useEffect(() => {
    document.body.className = language;
  }, [language]);
  return (
    <div className="aboutPage">
      <h3>
        {TEXTS[language].whoAreWe}
        <span> {TEXTS[language].ourVisionIs} </span>
        {TEXTS[language].provideCustomers}
      </h3>
      <Link to="/services">
        <button className="aboutBtn">{TEXTS[language].more}</button>
      </Link>
    </div>
  );
};
export default About;
