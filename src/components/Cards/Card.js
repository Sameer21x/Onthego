import React from "react";
import { Home, Banknote, Handshake } from "lucide-react";  // Import the icons
import "./Card.css";

const Cards = () => {
  const cardData = [
    {
      icon: <Home color="#1099df" size={25} />,  // Use the Home icon
      title: "Experience It Firsthand",
      description:
        "Discover our comprehensive showroom, where you can explore, test, and experience our pre-assembled medical equipment and devices. Our live demonstrations empower you to make confident decisions in person.",
    },
    {
      icon: <Banknote color="#1099df" size={25} />,  // Use the DollarSign icon
      title: "Budget-Friendly Options",
      description:
        "Concerned about insurance? Many of our products are available without a doctor's prescription, ensuring you have access to quality solutions that fit your budget.",
    },
    {
      icon: <Handshake color="#1099df" size={25} />,  // Use the Handshake icon
      title: "Excellence in Every Detail",
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
