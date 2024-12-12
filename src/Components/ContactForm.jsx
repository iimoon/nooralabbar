import React from 'react';
import './styles/contactform.css';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="form-section">
        <h2 className="heading">Get Started with a Quotation</h2>
        <p className='text-form'>We are always happy to help!</p>
        <form className="form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            className="textarea"
          />
          <button type="submit" className="button">Submit your response</button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className="heading2">Get in touch with us</h2>
        <p className="text">
          Use our contact form for all information requests or contact us directly
          using the contact information below.
        </p>
        <p className="text">
          Feel free to get in touch with us via email or phone.
        </p>
        <hr/>
        <div className="contact-details">
          <p className="detail-heading">📍Our Office Location</p>
          <p className="detail-text">Al Khazan Building - Nad Al Hamar Rd</p>
          <p className="detail-text">Deira, Dubai, UAE</p>
          <p className="detail-heading">📞Phone (Landline)</p>
          <p className="detail-text">+123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
