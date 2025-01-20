import React from "react";
import "./Categories.css";

const Categories = () => {
  const categories = [
    { img: "image1.jpg", title: "Wheelchairs" }, // Replace with actual image paths
    { img: "image2.jpg", title: "Patient Lifts" },
    { img: "image3.jpg", title: "Hospital Beds" },
    { img: "image4.jpg", title: "Walkers" },
    { img: "image5.jpg", title: "Overbed Tables" },
    { img: "image6.jpg", title: "Trapeze Bars" },
    { img: "image7.jpg", title: "Ventilators" },
    { img: "image8.jpg", title: "Knee Walkers" },
    { img: "image9.jpg", title: "Transport Chairs" },
    { img: "image10.jpg", title: "Bathroom Safety" },
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
