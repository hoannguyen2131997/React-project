import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div class="gpt3__footer">
      <h1>Do you want to step in to the future before others</h1>
      <button><span>Request Early Access</span></button>
      <div className="gpt3__footer-content">

        <div className="gpt3__footer-content__band">
          <img src={logo} alt="logo" />
          <span>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
        </div>

        <div className="gpt3__footer-content__list">
          <div>
            <h3>Links</h3>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div>
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div>
            <h3>Get in touch</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      
      <div className="gpt3__footer-info">
        <span>© 2021 GPT-3. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer