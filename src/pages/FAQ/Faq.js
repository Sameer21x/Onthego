import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordian/Accordian';
import { useEffect } from 'react';
import '../FAQ/Faq.css';

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="faq-container">
      <Header />
      <section className="rental-products-section">
          <h1 className='FAQS-title'>FREQUENTLY ASKED QUESTIONS</h1>

      </section>
      <main className="faq-main">
        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

