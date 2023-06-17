import React from 'react'
import "./footer.css"
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Terms & Conditions</h4>
          <p>Privacy Policy</p>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Crechterwoord K12 182 DK Alknjkcb</h4>
          <p>085-132567</p>
          <p>info@paymee.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2023 arulgoyaldesigns. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
