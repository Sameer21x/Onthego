"use client"

import React, { useState } from "react"
import RentalTerms from "../RentalTerms&Conditions/RentalTerms"
import "./tabswitch.css"

export default function SwitchTab() {
  const [activeTab, setActiveTab] = useState("description")

  const productDescription = {
    features: [
      "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
      "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
      "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches, accommodating various user needs.",
      "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
      "Swing-Away Footrests: Equipped with swing-away footrests featuring tool-free adjustable length riggings and heel loops for added safety.",
      "Smooth Mobility: Urethane tires mounted on composite wheels and 8-inch front casters, adjustable in three positions, provide a smooth ride over different surfaces.",
      "Secure Wheel Locks: Push-to-lock wheel locks ensure stability during transfers.",
      "Convenient Storage: Carry pocket on the backrest offers additional storage for personal items.",
    ],
    specifications: [
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
  }

  return (
    <div className="switch-tab">
      <div className="tab-list">
        <button
          className={`tab-trigger ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`tab-trigger ${activeTab === "rental-terms" ? "active" : ""}`}
          onClick={() => setActiveTab("rental-terms")}
        >
          Rental Terms & Conditions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "description" && (
          <div className="description-content">
            <section>
              <h3 className="content-title">Features:</h3>
              <ul className="feature-list">
                {productDescription.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="content-title">Specifications:</h3>
              <div className="specifications-grid">
                {productDescription.specifications.map((spec, index) => (
                  <div key={index} className="specification-item">
                    <span className="specification-label">{spec.label}:</span>
                    <span className="specification-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <p className="product-summary">
              This wheelchair is an excellent choice for individuals seeking a reliable and comfortable mobility
              solution.
            </p>
          </div>
        )}

        {activeTab === "rental-terms" && (
          <div className="rental-terms-content">
            <RentalTerms />
          </div>
        )}
      </div>
    </div>
  )
}

