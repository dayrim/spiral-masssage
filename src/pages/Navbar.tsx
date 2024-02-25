import * as React from "react";
// Import the Link component from react-scroll instead of gatsby
import { Link } from "react-scroll";
import SvgLogo from "./logo"; // Adjust the import path as needed

const Navbar: React.FC = () => (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                {/* For the home link, continue using Gatsby's Link if it leads to a different page */}
                <Link to="/" className="logo-container" smooth={true} duration={500}>
                    <SvgLogo />
                    <div className="logo-text">
                        <h1>Spiral Massages</h1>
                    </div>
                </Link>
            </div>
            <ul className="navigation">
                {/* Update these links to use react-scroll's Link for in-page navigation */}
                <li>
                    <Link to="massages" smooth={true} duration={500} offset={-70}>Massages</Link>
                </li>
                <li>
                    <Link to="about-me" smooth={true} duration={500} offset={-70}>About</Link>
                </li>
                <li>
                    <Link to="contacts" smooth={true} duration={500} offset={-70}>Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
