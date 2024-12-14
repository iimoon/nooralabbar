import React from "react";
import styles from "./styles/building.module.css";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
import building from "../assets/images/banners/buildingmaintenance.png";
import ServiceView from "../Components/ServiceView";
import one from "../assets/images/maintenance/1.png";
import three from "../assets/images/maintenance/2.png";
import two from "../assets/images/maintenance/3.png";
import tick from "../assets/icons/tick-circle.png";

const BuildingMaintenance = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={building}
        heading="Reliable Maintenance Services"
        subheading="Ensuring a Safe, Clean, and Well-Maintained Environment for Your Property"
        buttons={[
          { text: "Get a Free Quote", link: "#", type: "primary" },
          { text: "Learn More", link: "#", type: "secondary" },
        ]}
        targetSectionId="buidlingmaintenance-service"
      />
      <div className="main-container">
        <div className="text-service-container">
          <div className="text-section">
            <span id="line" />
            <h1 id="mainheader">What we offer</h1>
            <p id="mainsub">
              We offer reliable building maintenance services that ensure your
              property stays in top condition. Whether it's routine upkeep or
              necessary repairs, we provide reliable solutions with a focus on
              quality and timeliness
            </p>
            <h2 id="subhead">We gaurantee</h2>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Timely and reliable maintenance</p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Expertise in repair and preventive care</p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Transparent and professional service</p>
            </div>
          </div>
          <div id="buidlingmaintenance-service" className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Building Maintenance"
            />
          </div>
        </div>
        <div className={styles.maintenanceContainer}>
          <h2 id="subhead">Our Building Maintenance Services: </h2>
          <div className={styles.maintenanceCardContainer}>
            <div className={styles.card}>
              <img src={one} alt="image1" />
              <div className={styles.cardText}>
                <h1 id={styles.cardHead}>
                  Building Maintenance & Renovations:
                </h1>
                <p id={styles.cardBody}>
                  We handle day-to-day maintenance as well as renovations to
                  improve your property's function and appearance.
                </p>
              </div>
              <div id={styles.divider} />
            </div>
            <div className={styles.card2}>
              <div className={styles.cardText}>
                <h1 id={styles.cardHead}>Wall Dampness Rectification:</h1>
                <p id={styles.cardBody}>
                  We handle day-to-day maintenance as well as renovations to
                  improve your property's function and appearance.
                </p>
              </div>
              <img src={two} alt="image2" />
            </div>
            <div className={styles.card}>
              <img src={three} alt="image3" />
              <div className={styles.cardText}>
                <h1 id={styles.cardHead}>Interior & Exterior Painting: </h1>
                <p id={styles.cardBody}>
                  Revitalize the look of your property with professional
                  painting services, ensuring both aesthetics and protection for
                  your building’s surfaces.
                </p>
              </div>
              <div id={styles.divider} />
            </div>
          </div>
        </div>
        <div className={styles.CTASection}>
            <CTASection/>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
    
  );
};

export default BuildingMaintenance;
