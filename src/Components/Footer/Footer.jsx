import React from 'react'
import './Footer.css'
import copyright from '../../assets/copyright.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={logo} alt="" /> */}
          <p>I am a passionate Web developer eager to 
            create engaging and functional web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            {/* <img src={} alt="" /> */}
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          <img src={copyright} alt="" /> 2024 Anurag Kumar.All Rights Reserved</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policiy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  
  )
}

export default Footer