import React from "react";
import "./Card.css";

const Cards = () => {
  const cardData = [
    {
      icon: "🏠", 
      title: "Open to the Public",
      description:
        "Do you prefer to try before you buy or apprehensive about purchasing medical equipment online? Come into our fully stocked showroom for a demo! Plus, we sell most of our products already assembled for your convenience!",
    },
    {
      icon: "💵",
      title: "No insurance coverage?",
      description:
        "No insurance, no problem. The majority of our products don't require a doctor's prescription to purchase. You choose the best option for your budget!",
    },
    {
      icon: "🤝",
      title: "Why choose us?",
      description:
        "Our shelves are stocked with a variety of wound care and assistive medical devices. Our staff will take the time to explain and demo our products to you, no pushy sales pitch! We also offer great after-sales service.",
    },
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <span className="card-icon">{card.icon}</span>
            <h3 className="card-title">{card.title}</h3>
          </div>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
