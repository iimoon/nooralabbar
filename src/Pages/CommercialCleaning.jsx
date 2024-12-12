import React from "react";
import "./styles/commercial.css";
import ServiceView from "../Components/ServiceView";
import Navbar from "../Components/Navbar";
import StaticImageView from "../Components/StaticImageView";
import CommercialBanner from "../assets/images/banners/commercial.png"

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
            <ul>
              <li>Tailored Cleaning Solutions</li>
              <li>Lastest Cleaning solutions</li>
              <li>Commitment to Client Satisfaction</li>
            </ul>
          </div>
          <div className="service-section"></div>
          <ServiceView />
        </div>
      </div>
    </div>
  );
};

export default CommercialCleaning;
