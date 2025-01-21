import { useNavigate } from "react-router-dom"
import { ShoppingCart } from "lucide-react"

export default function ProductCards() {
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: "HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale",
      price: 22227,
      description: "Description 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
      availability: "In Stock",
    },
    {
      id: 2,
      name: "HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale",
      price: 22227,
      description: "Description 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
      availability: "In Stock",
    },
    {
      id: 3,
      name: "HF3100 - I.C.U Bed Electric, 5 Function Column Model - With Weighing Scale",
      price: 22227,
      description: "Description 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-asBGTTrHLbgQtjrk7XY9nH25rnooKK.png",
      availability: "In Stock",
    },
    // Add more products here...
  ]

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate(`/rental/${product.id}`)}
          style={{ cursor: "pointer" }}
        >
          <div className="product-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>
          <div className="product-info">
            <h3 className="product-title">{product.name}</h3>
            <div className="product-availability">
              Availability: <span className="in-stock">{product.availability}</span>
            </div>
            <div className="product-price">${product.price.toLocaleString()}</div>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation()
                // Add to cart logic here
              }}
            >
              <ShoppingCart className="cart-icon" />
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

