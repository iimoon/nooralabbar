import React from 'react'
import "./styles/CTASection.css"
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };
  return (
    <div className='CTA-container'>
        <div className="text-container">
            <h1>Contact Us Today To Get Scheduled!</h1>
        </div>
        <div className="button-container">
            <a id='number' href="tel:0582897467">CALL 058-289-7467</a>
            <button id='request' onClick={handleClick}>Request An Estimate</button>
        </div>
    </div>
  )
}

export default CTASection