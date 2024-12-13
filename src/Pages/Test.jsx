import React from 'react'
import img1 from "../assets/images/homepage/img1.jpg";
import img2 from "../assets/images/homepage/img2.jpg";
import img3 from "../assets/images/homepage/img3.jpg";
import Carousel from "../Components/Carousel";
const Test = () => {
      const homeImages = [img1, img2, img3];
      const homeText = [
        {
          heading: "Transforming spaces, Enhancing Lives",
          subheading: `16+ Years of Expertise in Cleaning, Maintenance and Demolition`,
        },
      ];
  return (
    <div>
        <Carousel images={homeImages} texts={homeText} />
    </div>
  )
}

export default Test