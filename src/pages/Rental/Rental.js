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
      <section className="rental-products-section">
        <h1 className="rental-title">On the go medical equipment rental services</h1>
        <h2 className="rental-subtitle">Click on an item below to submit a reservation inquiry,
          <br></br>or call us at 760-552-4075 for assistance</h2>
      </section>
      <main className="rental-content">

        
        <ProductCards />


        <section className="rental-terms-section">
          <RentalTerms />
        </section>
      </main>

      <Footer />
    </div>
  )
}

