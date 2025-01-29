import React, { useState } from 'react';
import '../Accordian/Accordian.css';

const faqData = [
  {
    question: "Where are you located?",
    answer: "We are located in Hesperia, California. Our address is 11938 Hesperia Road, Ste B Hesperia, CA 92345. This is next to Sherwin-Williams and Harbor Freight."
  },
  {
    question: "Are you open to the public?",
    answer: "Yes! We are a retail store with a showroom. Most of our products are for home/personal use. We are happy to demonstrate and educate customers on our products."
  },
  {
    question: "Do you accept my insurance?",
    answer: "We do not have contracts with insurance companies. Because of this, we offer very competitive pricing. We accept cash, credit & debit. Now accepting Care Credit!"
  },
  {
    question: "Do I need a prescription from my Doctor to purchase Medical Equipment or Supplies?",
    answer: "The majority of our items do not require a prescription, this includes wheelchairs, scooters, walkers, etc. The only items in our store that require prescriptions are Nebulizers & Supplies, Oxygen Supplies and some TENS Units."
  },
  {
    question: "Do you rent medical equipment?",
    answer: "Yes, Please contact us for medical equipments Inquiry."
  },
  {
    question: "Do you buy or will need equipment?",
    answer: "No, all of our products are new."
  },
  {
    question: "Can I drop off/donate unused medical equipment or supplies to you?",
    answer: "We cannot accept donated supplies or equipment of any kind. You may want to consider local church groups, senior centers, Veteran’s Homes, or thrift stores."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes! We offer 10%* discounts to Veterans and active military members and Students currently enrolled in Medical Studies for classroom supplies. ID is required.  *does not apply to items that are already discounted due to sale or promotion. Does not apply to hospital bed packages or Pride Products other exclusions may apply."
  },
  {
    question: "What methods of payment do you accept?",
    answer: "We accept Cash, Debit, Credit, including Visa, Mastercard, Discover, American Express Apple & Samsung Pay and CareCredit. We do not accept checks. Digital/Virtual Credit Card orders not accepted. "
  },
  {
    question: "Can I pay for my purchase with an FSA/HSA Card?",
    answer: "Yes, our credit card terminal will accept payment however keep in mind, the IRS determines which items are FSA-eligible and employers can set their own eligibility rules as long as they’re sticking to the IRS guidelines. In other words, it’s important to check in with your FSA administrator and confirm that the item you wish to purchase is FSA-eligible and what documentation is required. We are not responsible for denials of reimbursement."
  },
  {
    question: "I am interested in a Scooter or Lift Chair, do you offer financing or lay away?",
    answer: "We partner with CareCredit.  CareCredit is a medical credit card that can be used for a variety of medical needs. You can apply online at carecredit.com or by calling Care Credit directly at 800-677-0718. With Care Credit, you can choose from several promotions such as no interest for 12 months or monthlty payment plans. Contact us for current promotions!"
  },
  {
    question: "Do you deliver?",
    answer: "Yes, Contact store for current delivery prices and order minimums."
  },
  {
    question: "Do you drop ship?",
    answer: "Yes! For a nominal fee, drop shipping is available on many of our products, nationwide! Contact us for more details."
  },
  {
    question: "Can I place a special order?",
    answer: "Yes, we place special orders and delivery usually within 48-72 hours! Prepayment may be required and a restocking fee may apply on returns."
  },
  {
    question: "What is your return policy?",
    answer: "Items may be returned within 7 days of purchase, with receipt and in new/unused condition for full refund. REFUNDS ISSUED IN ORIGINAL FORM OF PAYMENT.  Due to hygiene reasons, we cannot accept returns on items that have been worn, Bath/Toileting Products, Compression Stockings, Braces, Cushions/Pillows, Mattresses and First Aid Products.  Contact us for policy on Power Mobility Equipment and Power Lift Chirs."
  },
  {
    question: "Does your staff speak Spanish?",
    answer: "Hablamos español"
  }
];

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
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

