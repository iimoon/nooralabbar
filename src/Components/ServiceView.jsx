import React from "react";
import "./styles/serviceview.css";

const ServiceView = ({ highlightService }) => {
  const services = [
    "Commercial Cleaning",
    "Building Maintenance",
    "Demolition Service",
    "Holiday Home Service",
    "Facilities Management",
    "Industry-Specific Services",
  ];

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <h2
          key={index}
          className={service === highlightService ? "highlighted" : ""}
        >
          {service}
        </h2>
      ))}
    </div>
  );
};

export default ServiceView;
