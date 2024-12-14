import React, { useEffect, useState } from "react";
import styles from "./styles/demolition.module.css";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import ServiceView from "../Components/ServiceView";
import demolitionBanner from "../assets/images/banners/demolition.png";
import one from "../assets/images/demolition/1.png";
import two from "../assets/images/demolition/2.png";
import three from "../assets/images/demolition/3.png";
import four from "../assets/images/demolition/4.png";
import five from "../assets/images/demolition/5.png";
import six from "../assets/images/demolition/6.png";
import seven from "../assets/images/demolition/7.png";
import eight from "../assets/images/demolition/8.png";
import pic1 from "../assets/images/demolition/gallery/desktop/1.png";
import pic2 from "../assets/images/demolition/gallery/desktop/2.png";
import pic3 from "../assets/images/demolition/gallery/desktop/3.png";
import mob1 from "../assets/images/demolition/gallery/mobile/1.png";
import mob2 from "../assets/images/demolition/gallery/mobile/2.png";
import mob3 from "../assets/images/demolition/gallery/mobile/3.png";
import mob4 from "../assets/images/demolition/gallery/mobile/4.png";
import mob5 from "../assets/images/demolition/gallery/mobile/5.png";
import tick from "../assets/icons/tick-circle.png";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";

const Demolition = () => {
  const images = [mob1,mob2,mob3,mob4,mob5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <StaticImageView
        image={demolitionBanner}
        heading="Demolition Services"
        subheading="Expert Solutions for Controlled Demolition Projects of Any Scale"
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
              Our Demolition Services are designed to meet the highest standards
              of safety, efficiency, and environmental responsibility. With over
              <span id="green"> 20 years</span> of experience, our expert team
              provides a comprehensive range of demolition solutions, from
              high-rise buildings to interior spaces. Whether it's a complete
              structural demolition or an interior strip-out, we ensure that the
              project is executed with precision, while keeping safety and
              environmental compliance at the forefront.
            </p>
            <h2 id="subhead">We gaurantee</h2>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Controlled & Safe demolition techniques</p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">
                Adherence to regulatory compliance and standards
              </p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Transparent and professional service</p>
            </div>
          </div>
          <div className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Demolition Service"
            />
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <h1 id={styles.serviceHeader}>Our Expertise Include</h1>
          <div className={styles.serviceCardContainer}>
            <div className={styles.card}>
              <img src={one} alt="High rise demolition" />
              <p id={styles.cardHead}>High Rise Demolition</p>
              <p id={styles.cardBody}>
                Specialized in safely dismantling tall structures.
              </p>
            </div>
            <div className={styles.card}>
              <img src={two} alt="Interior demolition" />
              <p id={styles.cardHead}>Interior Demolition</p>
              <p id={styles.cardBody}>
                Precision removal of walls, ceilings, and interiors for
                renovations.
              </p>
            </div>
            <div className={styles.card}>
              <img src={three} alt="Structure demolition" />
              <p id={styles.cardHead}>Structure Demolition</p>
              <p id={styles.cardBody}>
                Complete deconstruction of buildings or specific structural
                elements.
              </p>
            </div>
            <div className={styles.card}>
              <img src={four} alt="Site planning and evaluation" />
              <p id={styles.cardHead}>Site Planning & Evaluation</p>
              <p id={styles.cardBody}>
                Thorough planning to ensure smooth and efficient execution.
              </p>
            </div>
            <div className={styles.card}>
              <img src={five} alt="Environmental compliance" />
              <p id={styles.cardHead}>Environmental Compliance</p>
              <p id={styles.cardBody}>
                Adherence to environmental standards and regulations for
                sustainable practices.
              </p>
            </div>
            <div className={styles.card}>
              <img src={six} alt="Debris removal" />
              <p id={styles.cardHead}>Debris Removal</p>
              <p id={styles.cardBody}>
                Handling and disposal of old timber, iron, and steel scrap.
              </p>
            </div>
            <div className={styles.card}>
              <img src={seven} alt="Government approval" />
              <p id={styles.cardHead}>Government Approval</p>
              <p id={styles.cardBody}>
                Experts in obtaining required permits for hassle-free project
                execution.
              </p>
            </div>
            <div className={styles.card}>
              <img src={eight} alt="Corporate tie-up" />
              <p id={styles.cardHead}>Corporate Tie-Up</p>
              <p id={styles.cardBody}>
                Trusted by corporate clients for large-scale demolition
                projects.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.galleryPc}>
          <h1 id={styles.galleryHeader}>Snapshots From Our Work Sites</h1>
          <div className={styles.galleryPcContainer}>
            <img src={pic1} alt="picture1" />
            <img src={pic2} alt="picturetuah" />
            <img src={pic3} alt="picture3" />
          </div>
        </div>
        <div className={styles.galleryMobileContainer}>
          <div className={styles.sliderContainer}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div className={styles.slide} key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className={styles.dotsContainer}>
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={
                    index === currentSlide
                      ? styles.activeDot
                      : styles.inactiveDot
                  }
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.CTASection}>
          <CTASection />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Demolition;
