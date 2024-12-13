import React from "react";
import "./styles/commercial.css";
import ServiceView from "../Components/ServiceView";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
import CommercialBanner from "../assets/images/banners/commercial.png";
import allpurpose from "../assets/images/products/allpurposecleaner.png";
import aluminiumhandle from "../assets/images/products/aluminiumhandle.png";
import automatichand from "../assets/images/products/automatichand.png";
import handsoaplavender from "../assets/images/products/handsoaplavender.png";
import kitchentowel from "../assets/images/products/kitchentowel.png";
import microfiber from "../assets/images/products/microfiber.png";
import softbroom from "../assets/images/products/softbroom.png";
import tissuedispenser from "../assets/images/products/tissuedispenser.png";
import aerosol from "../assets/images/products/categories/aerosol.png";
import sanitizer from "../assets/images/products/categories/sanitizer.png";
import house from "../assets/images/products/categories/house.png";
import cleaning from "../assets/images/products/categories/cleaning.png";
import tick from "../assets/icons/tick-circle.png";
const CommercialCleaning = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={CommercialBanner}
        heading="Professional Commercial Cleaning Services"
        subheading="Keeping your workspace Pristine and Productive"
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
              Our commercial cleaning services ensure your office, retail space,
              or commercial facility is spotless and welcoming. We offer
              customizable cleaning schedules to meet your specific needs,
              ensuring a healthy and productive environment for your staff and
              clients.
            </p>
            <h2 id="subhead">We gaurantee</h2>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Tailored cleaning solutions</p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Latest cleaning solutions</p>
            </div>
            <div className="point-container">
              <img src={tick} alt="tick" />
              <p id="point-text">Commitment to client satisfaction</p>
            </div>
          </div>
          <div className="service-section">
            <ServiceView id="servicesection "highlightService="Commercial Cleaning" />
          </div>
        </div>
        <div className="service-overview">
          <div className="service-overview-1">
            <h1 id="subhead">Our Commercial Cleaning Services Include:</h1>
            <ul>
              <li>Office Cleaning</li>
              <li>Carpet and Upholstery Cleaning</li>
              <li>Restroom Cleaning and Sanitation</li>
              <li>Trash Removal and Recycling</li>
              <li>High-Touch Surface Disinfection</li>
              <li>Custom Cleaning Solutions</li>
            </ul>
          </div>
          <div className="service-overview-2">
            <h1 id="subhead">General Cleaners and disinfectants</h1>
            <p id="sub2">
              We are committed to keeping buildings and environment sparkling
              while exceed our clients expectation.
            </p>
            <h1 id="product-head">Products We Offer</h1>
            <div className="products-container">
              <div className="product-card">
                <img src={softbroom} alt="Soft Broom" />
                <p id="description">Soft Broom</p>
                <p id="blue">(Red, Yellow, Blue & Green) with metal handle</p>
              </div>
              <div className="product-card">
                <img src={aluminiumhandle} alt="Aluminium Handle" />
                <p id="description">Aluminium Handle</p>
                <p id="green">Made in UAE</p>
              </div>
              <div className="product-card">
                <img src={allpurpose} alt="All Purpose Cleaner" />
                <p id="description">All Purpose Cleaner</p>
                <p id="green">Made in UAE</p>
              </div>
              <div className="product-card">
                <img src={handsoaplavender} alt="Hand Soap Lavender" />
                <p id="description">Hand Soap Lavender</p>
                <p id="blue">Hygiene System</p>
                <p id="green">Made in UAE</p>
              </div>
              <div className="product-card">
                <img src={tissuedispenser} alt="Tissue Dispenser" />
                <p id="description">Tissue Dispenser</p>
                <p id="blue">Center Pull - Sleek Series</p>
                <p id="green">Multi Color Choice</p>
              </div>
              <div className="product-card">
                <img src={automatichand} alt="Automatic Hand Dispenser" />
                <p id="description">Automatic Hand Dispenser</p>
                <p id="blue">Baiyun (White)</p>
                <p id="green">Made in UAE</p>
              </div>
              <div className="product-card">
                <img src={kitchentowel} alt="Kitchen Towel" />
                <p id="description">Kitchen Towel 43 x 68</p>
                <p id="blue">(Mix Color) Hygiene System</p>
                <p id="green">Made in UAE</p>
              </div>
              <div className="product-card">
                <img src={microfiber} alt="Microfiber Cloth" />
                <p id="description">Microfiber Cloth</p>
                <p id="blue">(Mix Color) Cleaning Cloth</p>
                <p id="green">Made in UAE</p>
              </div>
            </div>
            <h1 id="subhead">General Cleaning products</h1>
            <ul>
              <li>
                We recommend solutions tailored to your needs, not sell
                unnecessary products.
              </li>
              <li>We work within your budget.</li>
              <li>Excellent service resting on core values </li>
            </ul>
            <h1 id="subhead">Product Categories</h1>
            <div className="product-ctg-container">
              <div className="product-ctg-card">
                <img src={aerosol} alt="Aerosol" />
                <p id="hblue">Dispenser and Aerosol Fragrances</p>
              </div>
              <div className="product-ctg-card">
                <img src={sanitizer} alt="Sanitizer" />
                <p id="red">
                  Hand Sanitizer <span id="grey">& Face Masks</span>
                </p>
              </div>
              <div className="product-ctg-card">
                <img src={house} alt="House Cleaning" />
                <p id="hgreen">House Hold Products</p>
              </div>
              <div className="product-ctg-card">
                <img src={cleaning} alt="Cleaning Equipment" />
                <p id="red">Cleaning Chemicals</p>
              </div>
            </div>
            <div className="customized-clening">
              <h1 id="redhead">
                Customized Cleaning for Different Environments
              </h1>
              <p id="sub2">
                We are committed to keeping buildings and environments sparkling
                while exceeding our client's expectations.
              </p>
              <ul>
                <li>
                  <span id="bold">Kitchen Hygiene:</span> Ensures food
                  preparation are clean and safe.
                </li>
                <li>
                  <span id="bold">Washroom Hygiene:</span>Tailored solutions for
                  high-traffic restrooms to maintain cleanliness and freshness.
                </li>
                <li>
                  <span id="bold">Floor Care</span>Prevents corrosion and decay
                  by using the correct cleaning chemical.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommercialCleaning;
