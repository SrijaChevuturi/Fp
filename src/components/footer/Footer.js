import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: vnrvjiet@gmail.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
