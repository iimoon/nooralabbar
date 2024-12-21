// Footer.js
import React from "react";
import "./styles/footer.css"; 
import abFLogo from "../assets/logos/alabbarfm.png";
import abLogo from "../assets/logos/ab.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/${path}`);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={abLogo} alt="AB Logo" className="mobile" />
            <img src={abFLogo} alt="desktop-logo" className="desktop" />
          </div>

          <div className="footer-links">
            <h4>Site Links</h4>
            <ul>
              <li onClick={() => handleClick("")}>Home</li>{" "}
            
              <li onClick={() => handleClick("services")}>Services</li>
              <li onClick={() => handleClick("about")}>About Us</li>
              <li onClick={() => handleClick("contactus")}>Contact</li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li onClick={() => handleClick("commercialcleaning")}>
                Commercial Cleaning
              </li>
              <li onClick={() => handleClick("buildingmaintenance")}>
                Building Maintenance
              </li>
              <li onClick={() => handleClick("demolition")}>
                Demolition Services
              </li>
              <li onClick={() => handleClick("holidayhome")}>
                Holiday Home Service
              </li>
              <li onClick={() => handleClick("facilitiesmanagement")}>
                Facilities Management
              </li>
              <li onClick={() => handleClick("industryspecific")}>
                Industry-Specific Services
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="link-section">
              <div className="link-section-ctn">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1.2rem" }}
                />
                <a href="mailto:alabbar04@gmail.com">alabbar04@gmail.com</a>
              </div>
              <br />
              <div className="link-section-ctn">
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "#8BC34A", fontSize: "1.2rem" }}
                />
                <a href="tel:0582897476">058-289-7476</a>
              </div>
              <br />
              <div className="link-section-ctn">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "red", fontSize: "1.2rem" }}
                />
                <p>Dubai, UAE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divisions">
            <p>
              Al Abbar Cleaning LLC | Al Abbar Building Maintenance LLC | Noor Al Abbar LLC
              Trading | Al Waqar Building Demolition 
            </p>
          </div>
        </div>
      </footer>
      <div className="rights">
        <p>
          <span className="brand">
            <span id="first">Noor</span> Al Abbar 
          </span>
          |<span id="all-rights"> 2024</span>
        
        </p>
      </div>
    </>
  );
};

export default Footer;
