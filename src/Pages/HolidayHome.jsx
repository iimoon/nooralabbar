import React from "react";
import styles from "./styles/holiday.module.css";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import ServiceView from "../Components/ServiceView";
import holidayBanner from "../assets/images/banners/holiday.png";
import hehe from "../assets/images/holiday/image.png";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";

const HolidayHome = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={holidayBanner}
        heading="Holiday Home Service"
        subheading="Elevate Your Holiday Home Experience!"
        buttons={[
          { text: "Get a Free Quote", link: "#", type: "primary" },
          { text: "Learn More", link: "#", type: "secondary" },
        ]}
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
          </div>
          <div className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Holiday Home Service"
            />
          </div>
        </div>
        <div className={styles.specialthang}>
          <img src={hehe} alt="image01" />
        </div>
        <div className={styles.break}></div>
        <div className={styles.expertiseContainer}>
          <h1 id={styles.expertiseHeader}>Our Expertise Include</h1>
          <ul>
            <li id={styles.expertiseHead}>First Cleaning & Apartment Setup</li>
            <p id={styles.expertiseBody}>
              Initial deep cleaning and setup to prepare the property for guest
              occupancy.
            </p>
            <li id={styles.expertiseHead}>
              Check-Out, Touch-Up, & Occupied Cleaning
            </li>
            <p id={styles.expertiseBody}>
              Quick turnarounds between stays to ensure the property remains
              spotless and welcoming.
            </p>
            <li id={styles.expertiseHead}>
              On-Demand Cleaning & Toiletries Supply
            </li>
            <p id={styles.expertiseBody}>
              Flexible cleaning services and delivery of essential toiletries
              upon request.
            </p>
            <li id={styles.expertiseHead}>24/7 Maintenance Services</li>
            <p id={styles.expertiseBody}>
              Around-the-clock maintenance to address any issues promptly.
            </p>
            <li id={styles.expertiseHead}>Laundry Management</li>
            <p id={styles.expertiseBody}>
              Professional laundry services for both the apartment and guests.
            </p>
            <li id={styles.expertiseHead}>
              Integrated Amenities Solutions & Supply
            </li>
            <p id={styles.expertiseBody}>
              Supply and management of amenities to enhance the guest
              experience.
            </p>
            <li id={styles.expertiseHead}>
              Steam Cleaning, Furniture Shampooing & Deep Cleaning
            </li>
            <p id={styles.expertiseBody}>
              Advanced cleaning techniques to ensure hygiene and freshness
              throughout the property.
            </p>
            <li id={styles.expertiseHead}>
              Delivery, Key Management, & Support Services
            </li>
            <p id={styles.expertiseBody}>
              Efficient key handovers, deliveries, and other concierge-style
              support services.
            </p>
            <li id={styles.expertiseHead}>
              Consultation & Hospitality Standards Advising
            </li>
            <p id={styles.expertiseBody}>
              Expert advice for setting up and maintaining properties to meet
              top hospitality standards.
            </p>
          </ul>
        </div>
        <div className={styles.CTASection}>
            <CTASection/>
        </div>
        <div className={styles.footer}>
            <Footer/>
        </div>
      </div>
    </div>
  );
};

export default HolidayHome;
