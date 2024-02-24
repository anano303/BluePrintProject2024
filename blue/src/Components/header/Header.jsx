import logo from "../Icons/logo anim.png";
import toggle from "../Icons/Toogle.png";
import menu from "../Icons/Menu.png";
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
