import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.png";

//Renders the top navigation bar

export const Navbar = () => {
  const [menuOpen] = useState(false);

  return (
    <nav>
        <div className="navbar">
            <div className="navbarWrapper">
                <Link to="/">
                    <img src={logo} className="icon"/> 
                </Link>
                <ul className={menuOpen ? "open" : ""}>
                    <li> <NavLink to="/planner">Planner</NavLink> </li>
                    <li> <NavLink to="/browse">Browse</NavLink> </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;