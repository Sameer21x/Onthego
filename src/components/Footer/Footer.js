import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="On The Go Medical Supply" />
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>INFORMATION</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Brands</a></li>
              <li><a href="#">Device</a></li>
              <li><a href="#">ECG Channel</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>CONTACT</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                11938 Hesperia Rd. Ste B<br />
                Hesperia, CA 92345
              </li>
              <li>
                <i className="fas fa-phone"></i>
                +91 9876543210
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                abc@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 On the Go Medical Supply PVT. LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

