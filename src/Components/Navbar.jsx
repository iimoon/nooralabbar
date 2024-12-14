import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "./styles/Navbar.css";
import alabbarFMlogo from "../assets/logos/alabbarfm.png";
import alabbarPhoneLogo from "../assets/logos/ab.png";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={alabbarFMlogo}
          alt="AL ABBAR Logo"
          className="logo desktop-logo"
        />
        <img
          src={alabbarPhoneLogo}
          alt="AL ABBAR Logo"
          className="logo mobile-logo"
        />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <Link to="/">HOME</Link>  
          </li>
          <li>
            <Link to="/industryspecific" onClick={toggleSidebar}>SERVICES</Link>  
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>ABOUT</Link>  
          </li>
          <li>
            <Link to="/contactus" onClick={toggleSidebar}>CONTACT</Link>  
          </li>
        </ul>
      </nav>

      <div className="call-button">
        <a href="tel:123456789">CALL (058) - 289 - 7467</a>
      </div>

      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>HOME</Link> 
          </li>
          <li>
            <Link to="/services" onClick={toggleSidebar}>SERVICES</Link>  
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>ABOUT</Link> 
          </li>
          <li>
            <Link to="/contactus" onClick={toggleSidebar}>CONTACT</Link>  
          </li>
        </ul>
        <div className="call-button">
          <a href="tel:0582897476" onClick={toggleSidebar}>
            CALL (058) - 289 - 7476
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
