import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {ContactForm} from '../../components/Contact-form/ContactForm';
import { Phone, Mail, MapPin } from "lucide-react"

import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <Header />
      <section className="rental-products-section">
        <h1 className="rental-title">On the go medical equipment rental services</h1>
        <h1 className="page-title">Get In Touch</h1>

      </section>
      

      <div className="contact-info">
        <div className="info-item">
          <div className="icon-wrapper">
            <Phone className="contact-icon" />
          </div>
          <p className="phone-number">760-552-4075</p>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <Mail className="contact-icon" />
          </div>
          <p className="email-address">Sales@onthegomedicalsupply.com</p>
        </div>

        <div className="info-item">
          <div className="icon-wrapper">
            <MapPin className="contact-icon" />
          </div>
          <div className="address">
            <p>11938 Hesperia Rd. Ste B</p>
            <p>Hesperia, CA 92345</p>
          </div>
        </div>
        <ContactForm />

      </div>


      <Footer />
    </div>
  );
}

export default ContactUs;

