import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordian/Accordian';
import '../FAQ/Faq.css';

function FAQ() {
  return (
    <div className="faq-container">
      <Header />
      <section className="rental-products-section">
          <h1>FREQUENTLY ASKED QUESTIONS</h1>

      </section>
      <main className="faq-main">
        <Accordion />
      </main>
      <Footer />
    </div>
  );
}

export default FAQ;

