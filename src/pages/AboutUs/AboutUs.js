import React from 'react';
import Header from '../../components/Header/Header';    
import Footer from '../../components/Footer/Footer';
import AboutHero from '../../components/AboutHero/AboutHero';   
import Showroom from '../../components/Showroom/Showroom';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import '../AboutUs/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <Header />
      <main className="about-main">
        <h1>ABOUT US</h1>
        <AboutHero />
        <Showroom />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;