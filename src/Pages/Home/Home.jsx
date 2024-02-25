import "./Home.css";
import { useContext } from "react";
import { TEXTS } from "../../Languages.js";
import { ThemeContext } from "../../ThemeContext.js";
import { LanguageContext } from "../../LanguageContext.js";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const themeContext = useContext(ThemeContext);
  const langContext = useContext(LanguageContext);
  return (
    <div className="homePage">
      <div className="overlay"></div>
      <div className="homeText">
        <h1> {TEXTS[language].whatIsYours}</h1>
        <h1> ცხოვრების </h1>{" "}
        <h1>
          {" "}
          მთავარი
          <span>{TEXTS[language].blueprint}? </span>
        </h1>
        <p>
        {TEXTS[language].youPlanYourVision}
        </p>
      </div>
      <button className="homeButton"> {TEXTS[language].findOut} </button>
    </div>
  );
};

export default Home;
