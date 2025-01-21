"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import wheelchairImage from "../../assets/images/16wheelchair.jpeg" // Import the image
import "../product-details/product-details.css" // Import the CSS file

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(wheelchairImage) // Default to the imported image

  const productImages = [
    wheelchairImage,
    wheelchairImage,
    wheelchairImage,
    wheelchairImage,
    wheelchairImage,
    wheelchairImage,
  ]

  return (
    <div className="product-details">


      <div className="product-content">
        {/* Main image and thumbnails */}
        <div className="product-images">
          <div className="main-image-container">
            <img
              src={selectedImage}
              alt="Product main view"
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
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                />
              </button>
            ))}

          </div>
          <button className="inquiry-button">
            <MessageCircle className="mr-2 h-4 w-4" />

            INQUIRY NOW
          </button>
        </div>

        {/* Product information */}
        <div className="product-info">

          <section className="info-section">
            <h1 className="product-title">
              HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale
            </h1>
            <h3>Important Information:</h3>
            <p>
              Thank you for choosing to rent medical equipment with us. Please take note of the following important
              information and our rental terms & conditions to ensure a smooth rental process.
            </p>


            <h3>Rental Inquiry:</h3>
            <p>
              You are submitting a rental inquiry for medical equipment. Once received, our customer service team will
              promptly contact you to confirm availability, discuss rental details, and arrange pickup or delivery
              scheduling.
            </p>

            <h3>Payment Policy:</h3>
            <p>
              Please note that payment is required in-store prior to the delivery or pickup of your equipment. We accept
              cash, as well as all major credit and debit cards. Online payments are not accepted at this time.
            </p>

            <h3>Store Pickup:</h3>
            <p>
              If you prefer to collect your rental equipment in person, our team will have your items prepared and ready
              for pickup at the store. We will assist you with the collection to ensure you receive the equipment in
              proper condition.
            </p>

            <h3>Home Delivery:</h3>
            <p>
              For home delivery, our team will coordinate a convenient delivery schedule with you. The equipment will be
              delivered directly to your address with care to ensure it arrives in good working order.
            </p>
          </section>


        </div>
      </div>
    </div>
  )
}
