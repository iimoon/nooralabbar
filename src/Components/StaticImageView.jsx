import React, { useEffect, useState } from "react";
import "./styles/staticview.css";

const StaticImageView = ({ image, heading, subheading, targetSectionId }) => {
  const [isSectionAvailable, setIsSectionAvailable] = useState(false);

  useEffect(() => {
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      console.log("Target section found!");
      setIsSectionAvailable(true);
    } else {
      console.error("Target section not found!");
    }
  }, [targetSectionId]);

  const handleScrollClick = (e) => {
    e.preventDefault();
    if (isSectionAvailable) {
      const targetSection = document.getElementById(targetSectionId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      console.error("Section not available yet.");
    }
  };

  const handleRedirectClick = (e) => {
    e.preventDefault();
    // Navigate to the contact page
    window.location.href = "/contactus"; // Replace with the correct URL path
  };

  return (
    <div
      className="static-image-view"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="content">
        <h1 className="heading">{heading}</h1>
        <p className="subheading">{subheading}</p>
        <div className="buttons">
          <a href="/contact-us" className="button primary" onClick={handleRedirectClick}>
            Get a Free Quote
          </a>
          <a href="#" className="button secondary" onClick={handleScrollClick}>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default StaticImageView;
