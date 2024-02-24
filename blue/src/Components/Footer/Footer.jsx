import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerPage">
      <div className="footerText">
        <h1>
          WE ALWAYS SEEK FOR NEW ADVENTURES. LET’S DO <span>BUSINESS</span>
        </h1>

        <button>CONTACT US</button>
      </div>
      <div className="footerSerAndSoc">
        <div className="footerMenu"></div>
        <div className="footerSocList">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
      <div>
        <h2>BUSINESS</h2>
        <div className="mailPhone">
          <a href="mailto:Hello@blueprint.ge">Hello@blueprint.ge</a>
          <a href="tel:+995577406409">+995 577 406 409</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
