import logo from "../Assets/logo anim.png";
import toggle from "../Assets/Icons/Toogle.png";
import menu from "../Assets/Icons/Menu.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerPage">
      <div>
        {" "}
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="icons">
        <img src={toggle} alt="toggle" className="toggle" />
        <img src={menu} alt="menu" className="menu" />
      </div>
    </div>
  );
};
export default Header;
