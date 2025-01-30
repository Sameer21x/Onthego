"use client"

import React, { useState } from "react"
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
            <h3 className="content-title">Rental Terms & Conditions</h3>
            <p>By renting any medical equipment from us, you agree to the following terms and conditions:</p>

            <h4>1. Delivery Information</h4>
            <p>Two-Way Delivery is required for all hospital bed rentals. The delivery fee is charged upfront.</p>
            <ul>
              <li>Wheelchairs, Transport Chairs, Knee Walkers: Starting at $65.00 for two-way delivery.</li>
              <li>Wheelchairs, Transport Chairs, Knee Walkers: Starting at $45.00 for one-way delivery.</li>
              <li>Hospital Beds: Starting at $125.00 for two-way delivery.</li>
            </ul>

            <h4>2. Deposits</h4>
            <p>For Non-Residential Addresses (e.g., Hotels, Motels), a deposit is required:</p>
            <ul>
              <li>Wheelchairs & Transport Chairs: $100.00 deposit</li>
              <li>Heavy Duty Wheelchairs: $250.00 deposit</li>
              <li>Knee Walkers: $100.00 deposit</li>
              <li>Hospital Bed Packages: $500.00 deposit</li>
            </ul>
            <p>Refunds: Deposits for non-residential addresses are refundable upon the return of equipment in good condition.</p>
            <p>Required: A valid credit card and government-issued ID must be provided at the time of rental.</p>

            <h4>3. Rental Fees</h4>
            <p>First Month's Rent & Delivery Fees are charged upfront at the time of rental.</p>
            <p>No Refunds for Early Returns: Rental fees will not be refunded if the equipment is returned before the end of the agreed rental period.</p>

            <h4>4. Hospital Bed Deliveries</h4>
            <p>No Upstairs Deliveries of Hospital Beds: Hospital bed rentals will not be delivered to upper floors without an elevator.</p>

            <h4>5. General Conditions</h4>
            <ul>
              <li><strong>Cancellation Policy:</strong> Cancellations must be made at least 24 hours in advance to avoid additional fees.</li>
              <li><strong>Equipment Return:</strong> All rented equipment must be returned on the agreed-upon date in good condition, or additional charges may apply.</li>
              <li><strong>Responsibility:</strong> The renter is responsible for ensuring the safe use, maintenance, and return of the rented equipment. Any damage or loss will result in additional charges.</li>
            </ul>

            <p>By renting medical equipment, you acknowledge that you have read, understood, and agree to these terms and conditions.</p>
          </div>
        )}
      </div>
    </div>
  )
}
