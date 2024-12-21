import React, { useState } from "react";
import "./styles/contactform.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const apiKey = import.meta.env.VITE_WEB_3_API;

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    toast.info("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("Response from Web3Forms:", data);

      if (data.success) {
        toast.success("Form Submitted Successfully!");
        event.target.reset();
      } else {
        toast.error(`Error: ${data.message}`);
        console.error("Error:", data);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2 className="heading-c">Get Started with a Quotation</h2>
        <p className="text-form">We are always happy to help!</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="textarea"
            required
          />
          <button type="submit" className="button-cf">
            Submit your response
          </button>
        </form>
      </div>

      <div className="contact-info">
        <h2 className="heading2">Get in touch with us</h2>
        <p className="text">
          Use our contact form for all information requests or contact us
          directly using the contact information below.
        </p>
        <p className="text">
          Feel free to get in touch with us via email or phone.
        </p>
        <hr />
        <div className="contact-details">
          <p className="detail-heading">
            {" "}
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "red" ,marginRight:"10px" }}
            />
            Location
          </p>
          <p className="detail-text">Dubai, UAE</p>
          <p className="detail-heading">
            {" "}
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: "#8BC34A",marginRight:"4px" }}
            />
            Phone
          </p>
          <p className="detail-text">058 289 7467</p>
        </div>
      </div>

      <ToastContainer
        toastStyle={{ backgroundColor: "#0B1215", color: "#fff" }}
      />
    </div>
  );
};

export default ContactForm;
