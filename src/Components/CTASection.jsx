import React from 'react'
import "./styles/CTASection.css"

const CTASection = () => {
  return (
    <div className='CTA-container'>
        <div className="text-container">
            <h1>Contact Us Today To Get Scheduled!</h1>
        </div>
        <div className="button-container">
            <button id='number'>CALL +123-456-789</button>
            <button id='request'>Request An Estimate</button>
        </div>
    </div>
  )
}

export default CTASection