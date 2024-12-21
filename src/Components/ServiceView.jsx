import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/serviceview.css";

const ServiceView = ({ highlightService }) => {
  const services = [
    "Commercial Cleaning",
    "Building Maintenance",
    "Demolition Service",
    "Holiday Home Service",
    "Facilities Management",
    "Trading Products",
    "Industry-Specific Services",
  ];

  const navigate = useNavigate();

  // Map services to their respective paths
  const serviceRoutes = {
    "Commercial Cleaning": "/commercialcleaning",
    "Building Maintenance": "/buildingmaintenance",
    "Demolition Service": "/demolition",
    "Holiday Home Service": "/holidayhome",
    "Facilities Management": "/facilitiesmanagement",
    "Trading Products":"/tradingproducts",
    "Industry-Specific Services": "/industryspecific",
  };

  const handleServiceClick = (service) => {
    const route = serviceRoutes[service];
    if (route) {
      navigate(route); // Navigate to the corresponding route
    }
  };

  return (
    <div className="service-container">
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <h2
          key={index}
          className={service === highlightService ? "highlighted" : ""}
          onClick={() => handleServiceClick(service)} // Click handler
          style={{ cursor: "pointer" }} // Pointer cursor for better UX
        >
          {service}
        </h2>
      ))}
    </div>
  );
};

export default ServiceView;
