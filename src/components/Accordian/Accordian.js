import React, { useState } from 'react';
import '../Accordian/Accordian.css';

const faqData = [
  {
    question: "Where are you located?",
    answer: "We are located in Hesperia, California. Our address is 11938 Hesperia Road, Ste B Hesperia, CA 92345. This is next to Sherwin-Williams and Harbor Freight."
  },
  {
    question: "Are you open to the public?",
    answer: "Yes, we are open to the public during our regular business hours."
  },
  {
    question: "Do you accept my insurance?",
    answer: "We work with most major insurance providers. Please contact us with your specific insurance information for verification."
  },
  {
    question: "Do I need a prescription from my Doctor to purchase Medical Equipment or Supplies?",
    answer: "Yes, most medical equipment and supplies require a prescription from your healthcare provider."
  },
  {
    question: "Do you rent medical equipment?",
    answer: "Yes, we offer rental services for various medical equipment. Contact us for specific availability."
  },
  {
    question: "Do you buy or will need equipment?",
    answer: "Please contact us to discuss your specific equipment needs or selling options."
  },
  {
    question: "Can I drop off/donate unused medical equipment or supplies to you?",
    answer: "Please contact us regarding donations of medical equipment or supplies."
  },
  {
    question: "Do you offer discounts?",
    answer: "We offer various discount programs. Please inquire about current offers and eligibility."
  },
  {
    question: "What methods of payment do you accept?",
    answer: "We accept most major credit cards, cash, and insurance payments."
  },
  {
    question: "Can I pay for my purchase with an FSA/HSA Card?",
    answer: "Yes, we accept FSA and HSA cards for eligible purchases."
  },
  {
    question: "I am interested in a Scooter or Lift Chair, do you offer financing or lay away?",
    answer: "Yes, we offer financing options for qualifying purchases. Please ask about our current financing programs."
  },
  {
    question: "Do you deliver?",
    answer: "Yes, we offer delivery services within our service area. Contact us for details."
  },
  {
    question: "Can I place a special order?",
    answer: "Yes, we can place special orders for specific items. Please inquire about availability."
  },
  {
    question: "What is your return policy?",
    answer: "Our return policy varies by product. Please contact us for specific return policy information."
  },
  {
    question: "Does your staff speak Spanish?",
    answer: "Please contact us regarding language assistance availability."
  }
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
              {item.question}
            </button>
            <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

