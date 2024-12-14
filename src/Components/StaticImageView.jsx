import React, { useEffect, useState } from "react";
import "./styles/staticview.css";

const StaticImageView = ({ image, heading, subheading, buttons, targetSectionId }) => {
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

  const handleButtonClick = (e) => {
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

  return (
    <div
      className="static-image-view"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="content">
        <h1 className="heading">{heading}</h1>
        <p className="subheading">{subheading}</p>
        <div className="buttons">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={`button ${button.type}`}
              onClick={handleButtonClick}
            >
              {button.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticImageView;
