import React from "react";
import "./styles/home.css";
import Carousel from "../Components/Carousel";
import img1 from "../assets/images/homepage/img1.jpg";
import img2 from "../assets/images/homepage/img2.jpg";
import img3 from "../assets/images/homepage/img3.jpg";
import commercial from "../assets/images/homepage/services/commercial.png";
import demolition from "../assets/images/homepage/services/demolition.png";
import facilities from "../assets/images/homepage/services/facilities.png";
import trading from "../assets/images/banners/trading.png";
import holiday from "../assets/images/homepage/services/holiday.png";
import industry from "../assets/images/homepage/services/industry.png";
import about from "../assets/images/homepage/about.png";
import maintenance from "../assets/images/homepage/services/maintenance.png";
import cred from "../assets/logos/clients/cred.png";
import credance from "../assets/logos/clients/credance.png";
import dps from "../assets/logos/clients/dps.png";
import international from "../assets/logos/clients/international.jpg";
import mapie from "../assets/logos/clients/mapie.jpg";
import qcon from "../assets/logos/clients/qcon.jpg";
import YASRG from "../assets/logos/clients/YASRG.jpg";
import CTASection from "../Components/CTASection";
import Navbar from "../Components/Navbar";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/${path}`);
  };
  const homeImages = [img1, img2, img3];
  const homeText = [
    {
      heading: "Transforming spaces, Enhancing Lives",
      subheading: `  Over 16 Years of Expertise in Cleaning, Maintenance and Demolition`,
    },
  ];

  return (
    <>
      <Navbar />
      <Carousel
        images={homeImages}
        texts={homeText}
        targetSectionId="service-main"
      />
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
              <p className="card-header">Commercial & Residential Cleaning</p>
              <p className="card-sub">
                Tailored cleaning solutions for offices, clinics, and schools to
                maintain a healthy workspace.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("commercialcleaning")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={maintenance} alt="Building Maintenance" />
              <p className="card-header">Building Maintenance</p>
              <p className="card-sub">
                Comprehensive maintenance services, including repairs, painting,
                and minor civil works.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("buildingmaintenance")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={demolition} alt="Demolition Services" />
              <p className="card-header">Demolition Services</p>
              <p className="card-sub">
                Efficient demolition of high-rise structures, with emphasis on
                safety and environmental compliance.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("demolition")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={holiday} alt="Holiday Home Services" />
              <p className="card-header">Holiday Home Services</p>
              <p className="card-sub">
                Cleaning, maintenance, and guest management services for
                short-term rental properties.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("holidayhome")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={facilities} alt="Facilities Management" />
              <p className="card-header">Facilities Management</p>
              <p className="card-sub">
                End-to-end property management solutions to enhance the value of
                buildings.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("facilitiesmanagement")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={trading} alt="Trading Products" />
              <p className="card-header">Trading Products</p>
              <p className="card-sub">
                Essential products designed to support seamless cleaning and
                maintenance solutions.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("tradingproducts")}
              >
                View Details
              </button>
            </div>
            <div className="service-card">
              <img src={industry} alt="Industry-Specific Services" />
              <p className="card-header">Industry-Specific Services</p>
              <p className="card-sub">
                Customized cleaning and maintenance solutions tailored to
                specific industries.
              </p>
              <button
                className="card-button"
                onClick={() => handleClick("industryspecific")}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <CTASection />
        </div>
        <div className="about-section">
          <div className="about-image">
            <img src={about} alt="about-image" />
          </div>
          <div className="about-text-section">
            <div className="text-left">
              <p>
                At Al Abbar Group, we are dedicated to delivering comprehensive
                solutions across various industries, including cleaning
                services, holiday home maintenance, facilities management,
                building renovation, and demolition. With a strong presence in
                Dubai and multiple branches under our umbrella, we provide
                reliable and tailored services that exceed client expectations.
              </p>
              <p>
                We provide exceptional, personalized solutions crafted to
                address unique client needs, ensuring outstanding results and
                satisfaction every time.
              </p>
            </div>
            <div className="about-divider" />
            <div className="text-right">
              <h1 id="about-head">Our Divisions</h1>
              <p>
                Our diverse range of services is managed by specialized
                divisions to ensure expertise and attention to detail in every
                project:
                <ul>
                  <li>Al Abbar Cleaning Services LLC</li>
                  <li>Al Abbar Building Maintenance LLC</li>
                  <li>Noor Al Abbar Trading LLC</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="why-choose-us-section">
          <h1>Why Choose Us?</h1>
          <div className="why-choose-us-cards">
            <div className="card">
              <h1>1</h1>
              <div className="text-choose">
                <h2>Expertise Sector</h2>
                <p>
                  From commercial offices to educational institutions and
                  residential properties, we provide industry-specific
                  solutions.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>2</h1>
              <div className="text-choose">
                <h2>Tailor-Made Service</h2>
                <p>
                  Our solutions are designed to meet the unique needs of each
                  client, ensuring maximum efficiency and satisfaction.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>3</h1>
              <div className="text-choose">
                <h2>Commitment to Excel</h2>
                <p>
                  Our team of highly trained professionals is dedicated to
                  maintaining the highest standards of quality, safety, and
                  customer service.
                </p>
              </div>
            </div>
            <div className="card">
              <h1>4</h1>
              <div className="text-choose">
                <h2>24/7 Support</h2>
                <p>
                  With multiple branches and a large team, we ensure
                  round-the-clock service and support to all our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="clients-section">
          <h1>OUR MAJOR CLIENTS AND SUPPLIES</h1>
          <div className="clients-container">
            <div className="clients-wrapper">
              <img src={cred} alt="Cred" />
              <img src={credance} alt="Credance" />
              <img src={dps} alt="DPS" />
              <img src={international} alt="International" />
              <img src={mapie} alt="Mapie" />
              <img src={qcon} alt="Qcon" />
              <img src={YASRG} alt="YASRG" />
              <img src={cred} alt="Cred" />
              <img src={credance} alt="Credance" />
              <img src={dps} alt="DPS" />
              <img src={international} alt="International" />
              <img src={mapie} alt="Mapie" />
              <img src={qcon} alt="Qcon" />
              <img src={YASRG} alt="YASRG" />
            </div>
          </div>
          <div className="contact-section">
            <ContactForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
