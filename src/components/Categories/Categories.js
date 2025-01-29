import React from "react";
import image1 from "../../assets/images/mobilityscooters.jpg"
import image2 from "../../assets/images/electricwheelchair.jpg"
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
import image19 from "../../assets/images/patient room.jpg"
import image20 from "../../assets/images/wound care.webp"
import image21 from "../../assets/images/Compression Socks.jpg"





import "./Categories.css";

const Categories = () => {
  const categories = [
    { img: image1, title: "Mobility Scooters" }, // Replace with actual image paths
    { img: image2, title: "Electric Wheelchairs" },
    { img: image12, title: "Walkers & Rollators" },
    { img: image4, title: "Knee Walkers" },
    { img: image5, title: "Lift Chairs" },
    { img: image6, title: "Transport Chairs" },
    { img: image7, title: "Mobility Accessories" },
    { img: image8, title: "Bathroom Safety" },
    { img: image9, title: "Daily Living Aids" },
    { img: image11, title: "Walking Aids" },
    { img: image19, title: "Patient Room" },
    { img: image13, title: "Orthopedic Braces" },
    { img: image20, title: "Wound Care" },
    { img: image14, title: "Covid Essentials" },
    { img: image15, title: "Incotinence" },
    { img: image21, title: "Compression Socks" },
    { img: image16, title: "Ostomy Care" },
    { img: image17, title: "Diagnostics" },
    { img: image18, title: "Respiratory" },

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
