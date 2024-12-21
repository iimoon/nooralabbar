import React from "react";
import Navbar from "../Components/Navbar";
import "./styles/trading.css";
import StaticImageView from "../Components/StaticImageView";
import tradingproducts from "../assets/images/banners/tradingproducts.png";
import aerosol from "../assets/images/products/categories/aerosol.png";
import sanitizer from "../assets/images/products/categories/sanitizer.png";
import house from "../assets/images/products/categories/house.png";
import cleaning from "../assets/images/products/categories/cleaning.png";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";
import ServiceView from "../Components/ServiceView";
const TradingProducts = () => {
  return (
    <div>
      <Navbar />
      <StaticImageView
        image={tradingproducts}
        heading="Industry-Specific Solutions"
        subheading="Tailored Solutions for Every Industry Need"
        buttons={[
          { text: "Get a Free Quote", link: "#", type: "primary" },
          { text: "Learn More", link: "#", type: "secondary" },
        ]}
        targetSectionId="line"
      />
      <div className="trading-main">
        <div className="trading-container">
          <div className="general-cleaning">
            <h1 id="subhead">General Cleaning products</h1>
            <p id="mainsub">
              Keeping your space clean and hygienic is essential for a healthy
              and welcoming environment. Our range of general cleaning products
              is designed to meet all your cleaning needs, whether for homes,
              offices, or commercial spaces. These high-quality products are
              formulated to deliver exceptional cleaning results while being
              safe and eco-friendly.
            </p>
            <ul>
              <li>
                We recommend solutions tailored to your needs, not sell
                unnecessary products.
              </li>
              <li>We work within your budget.</li>
              <li>Excellent service resting on core values </li>
            </ul>
          </div>
          <div className="service-section">
            <ServiceView
              id="servicesection "
              highlightService="Trading Products"
            />
          </div>
        </div>
        <div className="products-section">
          <h1 id="subhead">Product Categories</h1>
          <span id="line" />
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
            <h1 id="redhead">Customized Cleaning for Different Environments</h1>
            <p id="sub2">
              We are committed to keeping buildings and environments sparkling
              while exceeding our client's expectations.
            </p>
            <ul>
              <li>
                <span id="bold">Kitchen Hygiene:</span> Ensures food preparation
                are clean and safe.
              </li>
              <li>
                <span id="bold">Washroom Hygiene:</span>Tailored solutions for
                high-traffic restrooms to maintain cleanliness and freshness.
              </li>
              <li>
                <span id="bold">Floor Care:</span>Prevents corrosion and decay
                by using the correct cleaning chemical.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="CTASection">
        <CTASection />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default TradingProducts;
