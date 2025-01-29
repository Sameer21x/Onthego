"use client"

import React, { useState } from "react"
import RentalTerms from "../RentalTerms&Conditions/RentalTerms"
import "./tabswitch.css"

export default function SwitchTab() {
  const [activeTab, setActiveTab] = useState("important-info")

  return (
    <div className="switch-tab">
      <div className="tab-list">
        <button
          className={`tab-trigger ${activeTab === "important-info" ? "active" : ""}`}
          onClick={() => setActiveTab("important-info")}
        >
          Important Information
        </button>
        <button
          className={`tab-trigger ${activeTab === "rental-terms" ? "active" : ""}`}
          onClick={() => setActiveTab("rental-terms")}
        >
          Rental Terms & Conditions
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "important-info" && (
          <div className="important-info-content">
            <h3 className="content-title">Important Information:</h3>
            <p>Thank you for choosing to rent medical equipment with us. Please take note of the following important information and our rental terms & conditions to ensure a smooth rental process.</p>

            <h4>Rental Inquiry:</h4>
            <p>You are submitting a rental inquiry for medical equipment. Once received, our customer service team will promptly contact you to confirm availability, discuss rental details, and arrange pickup or delivery scheduling.</p>

            <h4>Payment Policy:</h4>
            <p>Please note that payment is required in-store prior to the delivery or pickup of your equipment. We accept cash, as well as all major credit and debit cards. Online payments are not accepted at this time.</p>

            <h4>Store Pickup:</h4>
            <p>If you prefer to collect your rental equipment in person, our team will have your items prepared and ready for pickup at the store. We will assist you with the collection to ensure you receive the equipment in proper condition.</p>

            <h4>Home Delivery:</h4>
            <p>For home delivery, our team will coordinate a convenient delivery schedule with you. The equipment will be delivered directly to your address with care to ensure it arrives in good working order.</p>
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
