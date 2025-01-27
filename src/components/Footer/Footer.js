import React from 'react';
import paymentmethods from "../../assets/images/payment-methods-logos.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3289.593196927661!2d-117.30147638479827!3d34.42641498050664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c36d7c1602f6cf%3A0x7c0c3f0c3c3c3c3c!2s11938%20Hesperia%20Rd%2C%20Hesperia%2C%20CA%2092345!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
            width="120%"
            height="80%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-info">
          <h2>ON THE GO MEDICAL SUPPLY</h2>
          <p className="address">11938 Hesperia Rd. Ste B<br />Hesperia, CA 92345</p>
          <p className="contact">
            Tel. <a href="tel:7605524075">760 552 4075</a><br />
            <a href="mailto:sales@onthegomedicalsupply.com">sales@onthegomedicalsupply.com</a>
          </p>
          <p className="location-note">Next to Sherwin-Williams and Harbor Freight</p>
          
          <div className="business-hours">
            <h3>Business Hours</h3>
            <p>Mon - Fri 9:00 am to 5:00 pm</p>
            <p>Sat 10:00 am to 2:00 pm</p>
            <p>Sun Closed.</p>
          </div>

          <p className="payment-note">Accept Cash and All Major Credit & Debit Cards<br />*Now accepting Care Credit!</p>
          
          <div className="payment-methods">
            <img src={paymentmethods} alt="Visa" />
          
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2018 ON THE GO MEDICAL SUPPLY | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;