"use client"

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from 'lucide-react';
import "../product-details/product-details.css";

export default function ProductDetails() {
  const location = useLocation();
  
  // Ensure product is always defined with default values
  const product = {
    name: location.state?.product?.name ?? "Unknown Product",
    image: location.state?.product?.image ?? "/placeholder.svg",
    features: location.state?.product?.features ?? [
      "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
      "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
      "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches, accommodating various user needs.",
      "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
      "Swing-Away Footrests: Equipped with swing-away footrests featuring tool-free adjustable length riggings and heel loops for added safety.",
      "Smooth Mobility: Urethane tires mounted on composite wheels and 8-inch front casters, adjustable in three positions, provide a smooth ride over different surfaces.",
      "Secure Wheel Locks: Push-to-lock wheel locks ensure stability during transfers.",
      "Convenient Storage: Carry pocket on the backrest offers additional storage for personal items.",
    ],
    specifications: location.state?.product?.specifications ?? [
      { label: "Seat Width", value: "20 inches" },
      { label: "Seat Depth", value: "16 inches" },
      { label: "Seat-to-Floor Height", value: "Adjustable from 17.5 inches to 19.5 inches" },
      { label: "Back Height", value: "16 inches" },
      { label: "Overall Width (Open)", value: "28 inches" },
      { label: "Overall Width (Closed)", value: "12.5 inches" },
      { label: "Overall Height", value: "36 inches" },
      { label: "Overall Length (with Riggings)", value: "42 inches" },
      { label: "Product Weight", value: "42 pounds" },
      { label: "Weight Capacity", value: "300 pounds" },
    ],
    weeklyPrice: location.state?.product?.weeklyprice ? location.state.product.weeklyprice : "$100",
    monthlyPrice: location.state?.product?.monthlyprice ? location.state.product.monthlyprice: "$300", 
  };
  

  const [selectedImage, setSelectedImage] = useState(product.image || "/placeholder.svg");

  const productImages = Array(6).fill(product.image || "/placeholder.svg");

  return (
    <div className="product-details">
      <div className="product-content">
        <div className="product-images">
          <div className="main-image-container">
            <img
              src={selectedImage}
              alt={product.name}
              className="main-image"
            />
          </div>

          <div className="thumbnail-gallery">
            {productImages.slice(0, 4).map((img, index) => (
              <button
                key={index}
                className="thumbnail-button"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <section className="info-section">
            <h1 className="product-title">{product.name}</h1>

            {/* Display weekly and monthly price */}
            <div className="pricing-info">
              <p>Weekly Price: {product.weeklyPrice}</p>
              <p>Monthly Price: {product.monthlyPrice}</p>
            </div>

            {/* Inquiry button */}
            <button
              className="inquiry-button"
              onClick={() => {
                const inquirySection = document.getElementById("inquiry");
                if (inquirySection) {
                  inquirySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <MessageCircle style={{ height: "16px", width: "16px" }} />
              Inquire Now
            </button>

            <h3>Key Features:</h3>
            {Array.isArray(product.features) && product.features.length > 0 ? (
              <ul className="feature-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            ) : (
              <p>No features available.</p>
            )}

            <h3>Specifications:</h3>
            {Array.isArray(product.specifications) && product.specifications.length > 0 ? (
              <table className="specifications-table">
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-label">{spec.label}:</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No specifications available.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

