"use client"

import Header from "../../components/Header/Header"
import ProductCards from "../../components/productcard/ProductCard"
import RentalTerms from "../../components/RentalTerms&Conditions/RentalTerms"
import Footer from "../../components/Footer/Footer"
import "../Rental/Rental.css"

export default function RentalPage() {
  return (
    <div className="rental-page">
      <Header />

      <main className="rental-content">
        <section className="rental-products-section">
          <h1 className="rental-title">HOSPITAL EQUIPMENT</h1>
          <h2 className="rental-subtitle">USA BEST ONLINE MEDICAL SUPPLY STORE FOR HOSPITAL EQUIPMENT</h2>
          <div className="breadcrumb">
            <span>Accessories</span>
            <span className="separator">{">"}</span>
            <span>ECG Monitor Cable</span>
          </div>
          <ProductCards />
        </section>

        <section className="rental-terms-section">
          <RentalTerms />
        </section>
      </main>

      <Footer />
    </div>
  )
}

