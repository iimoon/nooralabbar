import React from "react";
import styles from "./styles/facilities.module.css";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import facilitiesbanner from "../assets/images/banners/facilities.png";
import ServiceView from "../Components/ServiceView";
import tick from "../assets/icons/tick-circle.png";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
const FacilitiesManagement = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={facilitiesbanner}
        heading="Facilities Management Service"
        subheading="Seamless Solutions for Smarter Spaces"
        buttons={[
          { text: "Get a Free Quote", link: "#", type: "primary" },
          { text: "Learn More", link: "#", type: "secondary" },
        ]}
        targetSectionId="line"
      />
      <div className="main-container">
        <div className="text-service-container">
          <div className="text-section">
            <span id="line" />
            <h1 id="mainheader">What we offer</h1>
            <p id="mainsub">
              We provide tailored solutions for maintaining holiday homes,
              ensuring a seamless and luxurious guest experience. Our services
              are designed to uphold the highest hospitality standards, maintain
              5-star reviews, and maximize the value of your property
              investment.
            </p>
            <h2 id="subhead">Why Choose Us?</h2>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">
                Proven expertise in facilities management across various
                sectors.
              </p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">
                Dedicated teams equipped with the latest technology and tools.{" "}
              </p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">
                Tailored solutions to meet the unique needs of your property.
              </p>
            </div>
          </div>
          <div className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Facilities Management"
            />
          </div>
        </div>
      </div>
      <div className={styles.serviceContainer}>
        <h1 id={styles.serviceHeader}>Our Services</h1>
        <div className={styles.servicesContainer}>
          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>Property Maintenance</h1>
            <p id={styles.serviceCardBody}>
              Comprehensive maintenance solutions to keep your property in
              top-notch condition.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>
              Mechanical, Electrical & Plumbing (MEP) Services
            </h1>
            <p id={styles.serviceCardBody}>
              Expert MEP maintenance to ensure seamless building functionality.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>Cleaning & Hygiene Services</h1>
            <p id={styles.serviceCardBody}>
              Professional cleaning and hygiene management for a healthy
              environment.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>24/7 Maintenance Support</h1>
            <p id={styles.serviceCardBody}>
              Round-the-clock assistance to address emergency repairs and
              maintenance.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>
              Energy Management & Sustainability
            </h1>
            <p id={styles.serviceCardBody}>
              Customized energy solutions to improve efficiency and reduce
              operational costs.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <h1 id={styles.serviceCardHeader}>Security Services</h1>
            <p id={styles.serviceCardBody}>
              Advanced security solutions for property and personnel safety.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.CTASection}>
        <CTASection/>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default FacilitiesManagement;
