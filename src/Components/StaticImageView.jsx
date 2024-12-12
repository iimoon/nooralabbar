import React from "react";
import "./styles/staticview.css";

const StaticImageView = ({ image, heading, subheading, buttons }) => {
  return (
    <div className="static-image-view" style={{ backgroundImage: `url(${image})` }}>
      <div className="content">
        <h1 className="heading">{heading}</h1>
        <p className="subheading">{subheading}</p>
        <div className="buttons">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className={`button ${button.type}`}
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
