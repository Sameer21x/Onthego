import React from 'react';
import { useEffect } from 'react';
import Header from '../../components/Header/Header';    
import Footer from '../../components/Footer/Footer';
import AboutHero from '../../components/AboutHero/AboutHero';   
import Showroom from '../../components/Showroom/Showroom';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import '../AboutUs/AboutUs.css';

function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="about-container">
      <Header />
      <section className="rental-products-section">
          <h1 className='aboutus-title'>ABOUT US</h1>

      </section>
      <main className="about-main">
        <AboutHero />
        <Showroom />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;