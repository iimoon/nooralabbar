import React from "react";
import styles from "./styles/industry.module.css";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import ServiceView from "../Components/ServiceView";
import industrybanner from "../assets/images/banners/industry.png";
import specialthang from "../assets/images/industry/image.png";
import one from "../assets/icons/industry/1.png";
import two from "../assets/icons/industry/2.png";
import three from "../assets/icons/industry/3.png";
import four from "../assets/icons/industry/4.png";
import five from "../assets/icons/industry/5.png";
import six from "../assets/icons/industry/6.png";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
const IndustrySpecific = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={industrybanner}
        heading="Industry-Specific Solutions"
        subheading="Tailored Solutions for Every Industry Need"
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
              We understand that each industry has unique requirements. Our
              specialized services are designed to meet the distinct operational
              and maintenance demands of various sectors, ensuring efficiency,
              safety, and superior standards.
            </p>
          </div>
          <div className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Industry-Specific Services"
            />
          </div>
        </div>
        <div className={styles.specialthang}>
          <img src={specialthang} alt="image01" />
        </div>
        <div className={styles.industryContainer}>
          <h1 id={styles.industryHeader}>Industries We Serve</h1>
          <div className={styles.industryCardContainer}>
            <div className={styles.card}>
              <img src={one} alt="HealthCare" />
              <p id={styles.cardTitle}>HealthCare</p>
            </div>

            <div className={styles.card}>
              <img src={two} alt="Retail & Commercial" />
              <p id={styles.cardTitle}>Retail & Commercial</p>
            </div>

            <div className={styles.card}>
              <img src={three} alt="Hospitality" />
              <p id={styles.cardTitle}>Hospitality</p>
            </div>

            <div className={styles.card}>
              <img src={four} alt="Education" />
              <p id={styles.cardTitle}>Education</p>
            </div>

            <div className={styles.card}>
              <img src={five} alt="Corporate" />
              <p id={styles.cardTitle}>Corporate</p>
            </div>

            <div className={styles.card}>
              <img src={six} alt="Residential Complexes" />
              <p id={styles.cardTitle}>Residential Complexes</p>
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
    </div>
  );
};

export default IndustrySpecific;
