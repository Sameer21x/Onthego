import "../../components/productcard/ProductCard.css"
import { ShoppingCart } from "lucide-react"

export default function ProductCards() {
  const products = [
    {
      id: 1,
      name: "HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale",
      price: 22227,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
      availability: "In Stock",
    },
    {
      id: 2,
      name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
      price: 17383,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
      availability: "In Stock",
    },
    {
        id: 3,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },
      {
        id: 4,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },
      {
        id: 5,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },
      {
        id: 6,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },
      {
        id: 7,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },
      {
        id: 8,
        name: "Anesthesia Medical Equipment Bed Electric, 5 Function Column Model - With Weighing Scale",
        price: 17383,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
        availability: "In Stock",
      },

    // Add more products as needed
  ]

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <div className="product-availability">
              Availability: <span className="in-stock">{product.availability}</span>
            </div>
            <div className="product-price">${product.price.toLocaleString()}</div>
            <button className="add-to-cart">
              <ShoppingCart className="cart-icon" />
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

