import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordian/Accordian';
import '../FAQ/Faq.css';

function FAQ() {
  return (
    <div className="faq-container">
      <Header />
      <main className="faq-main">
        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

