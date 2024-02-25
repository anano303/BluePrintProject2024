// import { Link } from "react-router-dom";

// const Navbar = () => {

//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to={"/"}>Home</Link>
//         </li>
//         <li>
//           <Link to={"/contact"}>Contact</Link>
//         </li>
//         <li>
//           <Link to={"/about"}>About</Link>
//         </li>
//         <li>
//           <Link to={"/services"}>Services</Link>
//         </li>
//         <li>
//           <Link to={"/portfolio"}>Portfolio</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css'

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);

//   const toggleLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <div className="navbar">
//       <div className="toggle-button" onClick={toggleLinks}>
//         {showLinks ? 'X' : '='}
//       </div>
//       {showLinks && (
//         <ul className="links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/services">Services</Link>
//           </li>
//           <li>
//             <Link to="/portfolio">Portfolio</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;
// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import closeImage from '../Icons/X.png';
import toggleImage from '../Icons/Menu.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>

    <div className={`navbar ${showLinks ? '' : 'hidden'}`}>
      
      {showLinks && (
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      )}
 </div>
 
<div className="toggle-button" onClick={toggleLinks}>
  <img src={showLinks ? closeImage : toggleImage} alt="Toggle" /> {/* Use appropriate images */}
</div>
   
    </div>
  );
};

export default Navbar;
