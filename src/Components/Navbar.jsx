import React, { useState } from "react";
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
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>

      
      <div className="call-button">
        <a href="tel:123456789">CALL (123) - 456 -789</a>
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
            <a href="#home" onClick={toggleSidebar}>
              HOME
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleSidebar}>
              SERVICES
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleSidebar}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleSidebar}>
              CONTACT
            </a>
          </li>
        </ul>
        <div className="call-button">
          <a href="tel:123456789" onClick={toggleSidebar}>
            CALL (123) - 456 -789
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
