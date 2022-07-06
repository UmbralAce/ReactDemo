import React from 'react'
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='react_footer section_padding'>
      <div className='react_footer-cta-container'>
        <h1 className='gradient_text'>Do you want to step into the <br/> future before others</h1>
        <p>Request Early Access</p>
      </div>    
      <div className='react_footer-menu'>
        <div className='react_footer-menu-company'>
          <img src= {logo} alt = 'logo'/>
          <p>Crechterwood K12 182 DK <br/> Alknjkob, All Rights Reserved</p>
        </div>
        <div className='react_footer-menu-links'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='react_footer-menu-links'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='react_footer-menu-links'>
          <h4>Get in touch</h4>
          <p>Crechterwood K12 182 DK <br/> Alknjkob, All Rights Reserved</p>
          <p>085-1324875</p>
          <p>info@sth.com</p>
        </div>
      </div>
      <div className='copyright'>
        <h5>© 2021 GPT-3. All Rights Reserved</h5>
      </div>   
    </div>
  )
}

export default Footer
