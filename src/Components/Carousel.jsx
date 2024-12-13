import React from "react";
import Slider from "react-slick"; // Install with `npm install react-slick slick-carousel`
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/carousel.module.css";

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
    <div className={styles.carouselContainer}>
      {isStatic ? (
        <div className={styles.staticBanner}>
          <img src={images[0]} alt="Static Banner" className={styles.responsiveImage} />
          <div className={styles.carouselText}>
            <h1>{texts[0]?.heading}</h1>
            <p>{texts[0]?.subheading}</p>
            <div className={styles.buttonGroup}>
              <button className={styles.btnPrimary}>Get a Free Quote</button>
              <button className={styles.btnSecondary}>Explore Services</button>
            </div>
          </div>
        </div>
      ) : (
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={styles.carouselSlide}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.responsiveImage} />
            </div>
          ))}
        </Slider>
      )}
      <div className={styles.carouselTextContainer}>
        <div className={styles.carouselText}>
          <h1>{texts[0]?.heading}</h1>
          <p>{texts[0]?.subheading}</p>
          <div className={styles.buttonGroup}>
            <button className={styles.btnPrimary}>Get a Free Quote</button>
            <button className={styles.btnSecondary}>Explore Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
