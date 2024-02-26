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
        <div className="h1Desktop">
          <h1> {TEXTS[language].whatIsYours}</h1>
          <h1 className="textLife"> ცხოვრების </h1>
        </div>{" "}
        <h1 className="textMtavari">
          {" "}
          მთავარი
          <span>{TEXTS[language].blueprint}? </span>
        </h1>
      </div>
      <div className="pAndBtn">
        <p>
          You plan your vision, you plan your purpose that's we call your life
          blueprint
        </p>
        <button className="homeButton"> {TEXTS[language].findOut} </button>
      </div>
    </div>
  );
};

export default Home;
