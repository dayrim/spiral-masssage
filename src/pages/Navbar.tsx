import * as React from "react";
import { Link } from "gatsby";
import SvgLogo from "./logo"; // Adjust the import path as needed

const Navbar: React.FC = () => (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <Link to="/">
                    <div className="logo-container">
                        <SvgLogo />
                        <div className="logo-text">
                            <h1>SPIRAL SANCTUARY</h1>
                            <p>MASSAGES</p>
                        </div>
                    </div>
                </Link>
            </div>
            <ul className="navigation">
                <li><Link to="/massages">Massages</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
