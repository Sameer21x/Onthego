import { useNavigate } from "react-router-dom"
import { ShoppingCart } from 'lucide-react'
import wheelchair from "../../assets/images/16wheelchair.jpeg"
import wheelchair22 from "../../assets/images/22inchwheelchair.jpeg"
import beds from "../../assets/images/beds.webp"
import trapezebar from "../../assets/images/trapeze bar.jpeg"
import scooter from "../../assets/images/kneescooter.webp"
import legrest from "../../assets/images/leg rest.webp"
import "../productcard/ProductCard.css"

export default function ProductCards() {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Wheelchair 16″ Seat, 300lbs capacity", price: 22227, image: wheelchair, availability: "In Stock" },
    { id: 2, name: "Wheelchair 18″ Seat, 300lbs capacity", price: 22227, image: wheelchair, availability: "In Stock" },
    { id: 3, name: "Wheelchair 20″ Seat, 300lbs capacity", price: 22227, image: wheelchair, availability: "In Stock" },
    { id: 4, name: "Wheelchair 22″ Seat, 450lbs capacity", price: 22227, image: wheelchair22, availability: "In Stock" },
    { id: 5, name: "Elevating Leg Rest", price: 22227, image: legrest, availability: "In Stock" },
    { id: 6, name: "Knee Walker, 8 wheels & basket", price: 22227, image: scooter, availability: "In Stock" },
    { id: 7, name: "Trapeze Bar Attachment (for Home Care Beds)", price: 22227, image: trapezebar, availability: "In Stock" },
    { id: 8, name: "Full Electric Homecare Bed (rails & LTC mattress)", price: 22227, image: beds, availability: "In Stock" },
  ];

  const formatName = (name) => {
    const words = name.split(" ");
    return words.reduce((acc, word, idx) => {
      if ((idx + 1) % 4 === 0) {
        acc += word + "<br />";
      } else {
        acc += word + " ";
      }
      return acc;
    }, "");
  };

  const handleProductClick = (product) => {
    navigate(`/rental/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product)}
          style={{ cursor: "pointer" }}
        >
          <div className="product-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>
          <div className="product-info">
            <h4
              className="product-name"
              dangerouslySetInnerHTML={{ __html: formatName(product.name) }}
            ></h4>
            <div className="product-availability">
              Availability: <span className="in-stock">{product.availability}</span>
            </div>
            <div className="product-price">${product.price.toLocaleString()}</div>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product);
              }}
            >
              <ShoppingCart className="cart-icon" />
              Inquire Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}