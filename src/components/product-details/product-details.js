"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qhF7DGvLhuNCLMYFg7W7AZ0oORDli9.png",
  )

  const productImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qhF7DGvLhuNCLMYFg7W7AZ0oORDli9.png",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  return (
    <div className="product-details">
      <h1 className="product-title">HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale</h1>

      <div className="product-content">
        <div className="product-images">
          <div className="main-image-container">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Product main view"
              width={600}
              height={600}
              className="main-image"
            />
          </div>

          <div className="thumbnail-gallery">
            {productImages.slice(0, 3).map((img, index) => (
              <button key={index} className="thumbnail-button" onClick={() => setSelectedImage(img)}>
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Product view ${index + 1}`}
                  width={100}
                  height={100}
                  className="thumbnail-image"
                />
              </button>
            ))}

            <Dialog>
              <DialogTrigger asChild>
                <button className="more-images-button">
                  MORE
                  <br />5 IMAGES
                </button>
              </DialogTrigger>
              <DialogContent className="gallery-dialog">
                <div className="gallery-grid">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      className="gallery-item"
                      onClick={() => {
                        setSelectedImage(img)
                      }}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Product view ${index + 1}`}
                        width={150}
                        height={150}
                        className="gallery-image"
                      />
                    </button>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="product-info">
          <section className="info-section">
            <h2>Important Information:</h2>
            <p>
              Thank you for choosing to rent medical equipment with us. Please take note of the following important
              information and our rental terms & conditions to ensure a smooth rental process
            </p>
          </section>

          <section className="info-section">
            <h3>Rental Inquiry:</h3>
            <p>
              You are submitting a rental inquiry for medical equipment. Once received, our customer service team will
              promptly contact you to confirm availability, discuss rental details, and arrange pickup or delivery
              scheduling.
            </p>
          </section>

          <section className="info-section">
            <h3>Payment Policy:</h3>
            <p>
              Please note that payment is required in-store prior to the delivery or pickup of your equipment. We accept
              cash, as well as all major credit and debit cards. Online payments are not accepted at this time.
            </p>
          </section>

          <section className="info-section">
            <h3>Store Pickup:</h3>
            <p>
              If you prefer to collect your rental equipment in person, our team will have your items prepared and ready
              for pickup at the store. We will assist you with the collection to ensure you receive the equipment in
              proper condition.
            </p>
          </section>

          <section className="info-section">
            <h3>Home Delivery:</h3>
            <p>
              For home delivery, our team will coordinate a convenient delivery schedule with you. The equipment will be
              delivered directly to your address with care to ensure it arrives in good working order.
            </p>
          </section>

          <Button className="inquiry-button">
            <MessageCircle className="mr-2 h-4 w-4" />
            INQUIRY NOW
          </Button>
        </div>
      </div>
    </div>
  )
}

