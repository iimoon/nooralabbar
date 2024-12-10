import React from "react";
import Slider from "react-slick"; // Install with `npm install react-slick slick-carousel`
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./styles/carousel.css";

const Carousel = ({ images, texts, isStatic = false }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="carousel-container">
      {isStatic ? (
        <div className="static-banner">
          <img src={images[0]} alt="Static Banner" className="responsive-image" />
          <div className="carousel-text">
            <h1>{texts[0]?.heading}</h1>
            <p>{texts[0]?.subheading}</p>
            <div className="button-group">
              <button className="btn-primary">Get a Free Quote</button>
              <button className="btn-secondary">Explore Services</button>
            </div>
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} className="responsive-image" />
            </div>
          ))}
        </Slider>
      )}
      <div className="carousel-text-container">
        <div className="carousel-text">
          <h1>{texts[0]?.heading}</h1>
          <p>{texts[0]?.subheading}</p>
          <div className="button-group">
            <button className="btn-primary">Get a Free Quote</button>
            <button className="btn-secondary">Explore Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
