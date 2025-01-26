import React from "react";
import image1 from "../../assets/images/mobilityscooters.jpg"
import image2 from "../../assets/images/electricwheelchair.jpg"
import image3 from "../../assets/images/kneescooter.webp"
import image4 from "../../assets/images/kneewalker.jpg"
import image5 from "../../assets/images/liftchairs.jpg"
import image6 from "../../assets/images/transport chairs.png"
import image7 from "../../assets/images/mobilityaccesories.webp"
import image8 from "../../assets/images/bathroom safety.jpg"
import image9 from "../../assets/images/daily living aids.webp"
import image11 from "../../assets/images/walking aids.webp"
import image12 from "../../assets/images/walkers&rollatrs.jpg"
import image13 from "../../assets/images/orthopaedic braces.webp"
import image14 from "../../assets/images/covid essentials.jpeg"
import image15 from "../../assets/images/Incontinence.jpg"
import image16 from "../../assets/images/Ostomy Care.jpg"
import image17 from "../../assets/images/Diagnostics.webp"
import image18 from "../../assets/images/Respiratory.jpg"

import "./Categories.css";

const Categories = () => {
  const categories = [
    { img: image1, title: "Wheelchairs" }, // Replace with actual image paths
    { img: image2, title: "Patient Lifts" },
    { img: image3, title: "Hospital Beds" },
    { img: image4, title: "Walkers" },
    { img: image5, title: "Overbed Tables" },
    { img: image6, title: "Trapeze Bars" },
    { img: image7, title: "Ventilators" },
    { img: image8, title: "Knee Walkers" },
    { img: image9, title: "Transport Chairs" },
    { img: image11, title: "Bathroom Safety" },
    { img: image12, title: "Bathroom Safety" },
    { img: image13, title: "Bathroom Safety" },
    { img: image14, title: "Bathroom Safety" },
    { img: image15, title: "Bathroom Safety" },
    { img: image16, title: "Bathroom Safety" },
    { img: image17, title: "Bathroom Safety" },
    { img: image18, title: "Bathroom Safety" },

  ];

  return (
    <div className="categories-container">
      <h2 className="categories-heading">Wide Selection of Medical Supplies</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img
              src={category.img}
              alt={category.title}
              className="category-image"
            />
            <p className="category-title">{category.title}</p>
          </div>
        ))}
      </div>
      <div className="categories-divider"></div>
    </div>
  );
};

export default Categories;
