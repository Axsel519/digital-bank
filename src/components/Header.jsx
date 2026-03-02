/** @format */

import "../styles/Headerstyle.css";
import logo from "../assets/images/logo-dark.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <div className="header-icon">
        <img src={logo} alt="logo" />;
      </div>

      <div className="header-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </div>

      <div className="header-btn">
        <button>Request Invite</button>
      </div>
    </header>
  );
}

export default Header;
