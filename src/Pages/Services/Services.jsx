import React from "react";
import "./Services.css";
import blackArrowBUtton from "../Assets/black_arrow_button.png";
import { TEXTS } from "../../Languages.js";
import { LanguageContext } from "../../LanguageContext.js";
import { useContext } from "react";

const Services = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="servicesPage">
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
            <h3 className="projectCapture">სასაჩუქრე იდეები</h3>
            <p className="projectParagraph">
              {" "}
              Our collaborations with latest outdoors gear for their website.
            </p>
            <p className="grayText">WEB DESIGN / WEB DEVELOPMENT</p>
            <ul className="projectDotText">
              <li>SIGN UP</li>
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
            <h3 className="projectCapture">პროდაქშენი</h3>
            <p className="projectParagraph">
              Our collaborations with latest outdoors gear for their website.
            </p>
            <p className="grayText">WEB DESIGN / WEB DEVELOPMENT</p>
            <ul className="projectDotText">
              <li>WEATHER</li>
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
            <h3 className="projectCapture">სოციალური ქსელების მართვა</h3>
            <p className="projectParagraph">
              Our collaborations with latest outdoors gear for their website.
            </p>
            <p className="grayText">WEB DESIGN / WEB DEVELOPMENT</p>
            <ul className="projectDotText">
              <li>HIKING GEARS</li>
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
            <h3 className="projectCapture">პოლიგრაფია</h3>
            <p className="projectParagraph">
              Our collaborations with latest outdoors gear for their website.
            </p>
            <p className="grayText">BRAND IDENTITY</p>
            <ul className="projectDotText">
              <li>OUTDOOR</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
