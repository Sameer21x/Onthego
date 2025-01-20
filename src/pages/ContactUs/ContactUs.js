import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ContactForm from '../../components/Contact-form/ContactForm';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <Header />
      
      <main className="contact-us-main">
        <h1>CONTACT US</h1>

        <div className="contact-content">
          <div className="contact-info">
            <p className="welcome-text">
              We love our customers, so feel free to visit during normal business hours.
            </p>

            <div className="info-sections">
              <div className="info-section">
                <h2>OUR LOCATION</h2>
                <div className="info-item">
                  <i className="icon-location"></i>
                  <div>
                    11938 Hesperia Rd. Ste B<br />
                    Hesperia, CA 92345
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h2>PHONE</h2>
                <div className="info-item">
                  <i className="icon-phone"></i>
                  <a href="tel:+919876543210">+91 9876543210</a>
                </div>
              </div>

              <div className="info-section">
                <h2>EMAIL</h2>
                <div className="info-item">
                  <i className="icon-mail"></i>
                  <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203640535!2d-117.3019444!3d34.426667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c36d6e1ac129c3%3A0x8b6e4c0c0e0e0e0e!2s11938%20Hesperia%20Rd%2C%20Hesperia%2C%20CA%2092345!5e0!3m2!1sen!2sus!4v1629788000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="location-map"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactUs;

