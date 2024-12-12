// Footer.js
import React from "react";
import "./styles/footer.css"; // External CSS file
import abFLogo from "../assets/logos/alabbarfm.png";
import abLogo from "../assets/logos/ab.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={abLogo} alt="AB Logo" className="mobile"/>
            <img src={abFLogo} alt="desktop-logo" className="desktop" />
          </div>

          <div className="footer-links">
            <h4>Site Links</h4>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li>Commercial Cleaning</li>
              <li>Building Maintenance</li>
              <li>Demolition Services</li>
              <li>Holiday Home Service</li>
              <li>Facilities Management</li>
              <li>Industry-Specific Services</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>nooralabbar@email.com</p>
            <p>+123-456-7890</p>
            <p>Al Khazan Building - Nad Al Hamar Rd, Deira, Dubai, UAE</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divisions">
            <p>
              Al Abbar Cleaning | Al Abbar Building Maintenance | Noor Al Abbar
              Trading | Crystal House Building Cleaning | Al Waqar Demolition |
              DS Wrecking and Demolition Works
            </p>
          </div>
        </div>
      </footer>
      <div className="rights">
        <p>
          <span className="brand">
            <span id="first">Noor</span> Al Abbar 
          </span>
           | <span id="all-rights"> All rights reserved</span>
           &copy;
        </p>
      </div>
    </>
  );
};

export default Footer;
