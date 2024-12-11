import React from "react";
import "./styles/home.css";
import Carousel from "../Components/Carousel";
import img1 from "../assets/images/homepage/img1.jpg";
import img2 from "../assets/images/homepage/img2.jpg";
import img3 from "../assets/images/homepage/img3.jpg";
import commercial from "../assets/images/homepage/services/commercial.png";
import demolition from "../assets/images/homepage/services/demolition.png";
import facilities from "../assets/images/homepage/services/facilities.png";
import holiday from "../assets/images/homepage/services/holiday.png";
import industry from "../assets/images/homepage/services/industry.png";
import about from "../assets/images/homepage/about.png"
import maintenance from "../assets/images/homepage/services/maintenance.png";
import CTASection from "../Components/CTASection";

const DummyPage = () => {
  const homeImages = [img1, img2, img3];
  const homeText = [
    {
      heading: "Transforming spaces, Enhancing Lives",
      subheading: `  16+ Years of Expertise in Cleaning, Maintenance and Demolition`,
    },
  ];

  return (
    <>
      <Carousel images={homeImages} texts={homeText} />
      <div className="body-container">
        <div className="services-container">
          <div className="divider"></div>
          <div className="services-text">
            <h1 id="service-main">Our Expertise</h1>
            <p id="service-sub">
              Delivering Specialized Solutions for Every Space and Structure
            </p>
          </div>
          <div className="services-card-container">
            <div className="service-card">
              <img src={commercial} alt="Commercial Cleaning" />
              <p className="card-header">Commercial Cleaning</p>
              <p className="card-sub">
                Tailored cleaning solutions for offices, clinics, and schools to
                maintain a healthy workspace.
              </p>
              <button className="card-button">View Details</button>
            </div>
            <div className="service-card">
              <img src={maintenance} alt="Building Maintenance" />
              <p className="card-header">Building Maintenance</p>
              <p className="card-sub">
                Comprehensive maintenance services, including repairs, painting,
                and minor civil works.
              </p>
              <button className="card-button">View Details</button>
            </div>
            <div className="service-card">
              <img src={demolition} alt="Demolition Services" />
              <p className="card-header">Demolition Services</p>
              <p className="card-sub">
                Efficient demolition of high-rise structures, with emphasis on
                safety and environmental compliance.
              </p>
              <button className="card-button">View Details</button>
            </div>
            <div className="service-card">
              <img src={holiday} alt="Holiday Home Services" />
              <p className="card-header">Holiday Home Services</p>
              <p className="card-sub">
                Cleaning, maintenance, and guest management services for
                short-term rental properties.
              </p>
              <button className="card-button">View Details</button>
            </div>
            <div className="service-card">
              <img src={facilities} alt="Facilities Management" />
              <p className="card-header">Facilities Management</p>
              <p className="card-sub">
                End-to-end property management solutions to enhance the value of
                buildings.
              </p>
              <button className="card-button">View Details</button>
            </div>
            <div className="service-card">
              <img src={industry} alt="Industry-Specific Services" />
              <p className="card-header">Industry-Specific Services</p>
              <p className="card-sub">
                Customized cleaning and maintenance solutions tailored to
                specific industries.
              </p>
              <button className="card-button">View Details</button>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <CTASection/>
        </div>
        <div className="about-section">
        
        </div>
      </div>
    </>
  );
};

export default DummyPage;
