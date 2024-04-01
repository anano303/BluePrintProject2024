import React from "react";
import "./Services.css";
import blackArrowBUtton from "../Assets/black_arrow_button.png";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { useContext } from "react";

const Services = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="servicesPage " id="services">
      <h1>
        {TEXTS[language].studio} <br />
        <span>{TEXTS[language].services}</span>
      </h1>
      <div className="gridItems">
        <div className="grid-item">
          <div className="cut_left_corner project01 img">
            <h1 className="transparentText ForProject">01</h1>
            <div className="projectOnHover">
              <div className="fullYellow"></div>
              <button type="button">
                <img id="black_arrow" src={blackArrowBUtton} alt="arrow" />
              </button>
            </div>{" "}
          </div>
          <div className="aboutProject">
            <h3 className="projectCapture">{TEXTS[language].gift}</h3>
            <p className="projectParagraph">
              {" "}
              Unleash creativity with our curated gift ideas collection.
            </p>
            <p className="grayText">
              Unique and personalized gift recommendations.
            </p>
            <ul className="projectDotText">
              <a href="mailto:Hello@blueprintstudio.ge">
                <li> {TEXTS[language].order}</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="grid-item">
          <div className="cut_left_corner project02 img">
            <h1 className="transparentText ForProject">02</h1>
            <div className="projectOnHover">
              <div className="fullYellow"></div>
              <button type="button">
                <img id="black_arrow" src={blackArrowBUtton} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="aboutProject">
            <h3 className="projectCapture">{TEXTS[language].production}</h3>
            <p className="projectParagraph">
              Bringing visions to life through production expertise.
            </p>
            <p className="grayText">Creative production solutions.</p>
            <ul className="projectDotText">
              <a href="mailto:Hello@blueprintstudio.ge">
                <li> {TEXTS[language].order}</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="grid-item">
          <div className="cut_left_corner project03 img">
            <h1 className="transparentText ForProject">03</h1>
            <div className="projectOnHover">
              <div className="fullYellow"></div>
              <button type="button">
                <img id="black_arrow" src={blackArrowBUtton} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="aboutProject">
            <h3 className="projectCapture">{TEXTS[language].socNet}</h3>
            <p className="projectParagraph">
              Navigating the digital landscape with effective social media
              management.
            </p>
            <p className="grayText">Social media strategy and management.</p>
            <ul className="projectDotText">
              <a href="mailto:Hello@blueprintstudio.ge">
                <li> {TEXTS[language].order}</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="grid-item">
          <div className="cut_left_corner project04 img">
            <h1 className="transparentText ForProject">04</h1>
            <div className="projectOnHover">
              <div className="fullYellow"></div>
              <button type="button">
                <img id="black_arrow" src={blackArrowBUtton} alt="arrow" />
              </button>
            </div>{" "}
          </div>

          <div className="aboutProject">
            <div>
              <h3 className="projectCapture">{TEXTS[language].polygraph}</h3>
              <p className="projectParagraph">
                Crafting brand identities that speak volumes.
              </p>
              <p className="grayText">
                Unique and impactful brand identity designs.
              </p>
              <ul className="projectDotText">
                <a href="mailto:Hello@blueprintstudio.ge">
                  <li> {TEXTS[language].order}</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
