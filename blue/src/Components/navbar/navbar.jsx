

import { Link } from "react-router-dom";

const NavBar = () => {
    const navStyle = {
        position: 'fixed', // Set the position to fixed
        top: 0, // Stick it to the top of the viewport
        width: '100%', // Make it span the full width
        padding: '50px 550px', // Example padding
        // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Example shadow
        zIndex: 1000, // Set a high z-index to ensure it's above other content
    };

    const ulStyle = {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    };
    const liStyle = {
        marginLeft: '10px', // Adjust spacing between navbar items
    };

    return(
        <div style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to={"/"}>Home</Link></li>
                <li style={liStyle}><Link to={"/contact"}>Contact</Link></li>
                <li style={liStyle}><Link to={"/about"}>About</Link></li>
                <li style={liStyle}><Link to={"/services"}>Services</Link></li>
                <li style={liStyle}><Link to={"/portfolio"}>Portfolio</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
