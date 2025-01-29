import { useNavigate } from "react-router-dom"
import wheelchair from "../../assets/images/16wheelchair.jpeg"
import wheelchair22 from "../../assets/images/22inchwheelchair.jpeg"
import beds from "../../assets/images/beds.webp"
import trapezebar from "../../assets/images/trapeze bar.jpeg"
import scooter from "../../assets/images/kneescooter.webp"
import legrest from "../../assets/images/leg rest.webp"
import trapezebarbase from "../../assets/images/basetrapeze.webp"
import transport from "../../assets/images/transport chairs.png"
import patientlift from "../../assets/images/patientlift.jpeg"
import table from "../../assets/images/tableover.webp"
import "../productcard/ProductCard.css"

export default function ProductCards() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wheelchair 16″ Seat, 300lbs capacity",
      weeklyprice: "$40",
      monthlyprice: "$22.227",
      image: wheelchair,
      features: [
        "Height Adjustable between hemi and standard heights.",
        "Dual Handbrakes for superior control.",
        "Fixed footrests for stability.",
        "Push-to-lock braking system.",
      ],
      specifications: [
        { label: "Seat Dimensions", value: '16" W x 16" D' },
        { label: "Seat-to-Floor Height", value: '17.5" - 19.5"' },
        { label: "Back Height", value: '19"' },
        { label: "Width Between Arms", value: '16.5"' },
        { label: "Overall Width", value: '24"' },
        { label: "Weight Capacity", value: "300 lbs" },
      ],
    },
    {
      id: 2,
      name: "Wheelchair 18″ Seat, 300lbs capacity",
      weeklyprice: "$22.227",
      monthlyprice: "$22.227",
      image: wheelchair,
      features: [
        "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
        "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
        "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches.",
        "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
      ],
      specifications: [
        { label: "Seat Width", value: "18 inches" },
        { label: "Seat Depth", value: "16 inches" },
        { label: "Seat-to-Floor Height", value: "17.5-19.5 inches" },
        { label: "Back Height", value: "16 inches" },
        { label: "Overall Width (Open)", value: "26 inches" },
        { label: "Overall Width (Closed)", value: "12.5 inches" },
        { label: "Overall Height", value: "36 inches" },
        { label: "Overall Length", value: "42 inches" },
        { label: "Product Weight", value: "41 pounds" },
        { label: "Weight Capacity", value: "300 pounds" },
      ],
    },
    {
      id: 3,
      name: "Wheelchair 20″ Seat, 300lbs capacity",
      weeklyprice: "$222.27",
      monthlyprice: "$22.227",
      image: wheelchair,
      features: [
        "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
        "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
        "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches.",
        "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
      ],
      specifications: [
        { label: "Seat Width", value: "20 inches" },
        { label: "Seat Depth", value: "16 inches" },
        { label: "Seat-to-Floor Height", value: "17.5-19.5 inches" },
        { label: "Back Height", value: "16 inches" },
        { label: "Overall Width (Open)", value: "28 inches" },
        { label: "Overall Width (Closed)", value: "12.5 inches" },
        { label: "Overall Height", value: "36 inches" },
        { label: "Overall Length", value: "42 inches" },
        { label: "Product Weight", value: "42 pounds" },
        { label: "Weight Capacity", value: "300 pounds" },
      ],
    },
    {
      id: 4,
      name: "Wheelchair 22″ Seat, 450lbs capacity",
      weeklyprice: "$222.27",
      monthlyprice: "$100",
      image: wheelchair22,
      features: [
        "Heavy-Duty Frame: Constructed with reinforced steel frame featuring dual crossbars.",
        "Enhanced Comfort: Padded, detachable desk-style armrests.",
        "Secure and Safe: Equipped with push-to-lock brakes.",
        "Portable Design: Folds compactly for storage and transportation.",
      ],
      specifications: [
        { label: "Overall Width", value: "29 inches" },
        { label: "Product Weight", value: "57 lbs" },
        { label: "Seat Width", value: "22 inches" },
        { label: "Seat Depth", value: "18 inches" },
        { label: "Weight Capacity", value: "450 lbs" },
        { label: "Frame Material", value: "Steel, black finish" },
        { label: "Wheel Diameter", value: "22 inches" },
        { label: "Front Caster Diameter", value: "8 inches" },
      ],
    },
    {
      id: 5,
      name: "Elevating Leg Rest",
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: legrest,
      features: [
        "High-Quality Design: Aluminum footplates are lightweight yet sturdy.",
        "Padded Calf Pads: Soft padding provides superior support.",
        "Customizable Comfort: Adjustable design for optimal positioning.",
      ],
      specifications: [
        { label: "Material", value: "Aluminum footplates" },
        { label: "Padding", value: "Cushioned calf pads" },
        { label: "Weight", value: "Lightweight" },
        { label: "Included Items", value: "One pair of elevating leg rests" },
      ],
    },
    {
      id: 6,
      name: "Knee Walker, 8 wheels & basket",
      weeklyprice: "$100",
      monthlyprice: "$100",
      image: scooter,
      features: [
        "Height Adjustable for various users.",
        "Dual Handbrakes for safety.",
        "8-Inch Wheels for smooth movement.",
        "Foldable Handlebar.",
        "Comfortable Knee Pad.",
        "Convenient Storage Basket.",
      ],
      specifications: [
        { label: "Weight Capacity", value: "300 pounds" },
        { label: "Product Weight", value: "21 pounds" },
        { label: "Handle Height Range", value: "31 to 41 inches" },
        { label: "Knee Pad Height Range", value: "16.5 to 20.5 inches" },
      ],
    },
    {
      id: 7,
      name: "Trapeze Bar Attachment (for Home Care Beds)",
      weeklyprice: "$100",
      monthlyprice: "$100",
      image: trapezebar,
      features: [
        '34" Reach for easy repositioning.',
        "Chrome Frame for durability.",
        "Complete Bracket Set included.",
        "Heavy-Gauge Steel Construction.",
        "Nylon-Coated Hand Bar for secure grip.",
      ],
      specifications: [{ label: "Weight Capacity", value: "250 lbs" }],
    },
    {
      id: 8,
      name: "Full Electric Homecare Bed (rails & LTC mattress)",
      weeklyprice: "$100",
      monthlyprice: "$100",
      image: beds,
      features: [
        "Durable 2-piece tubular frame.",
        "Four 3-inch castors with locking mechanism.",
        "Premium LTC mattress for enhanced comfort.",
        "Mattress retainer system.",
        "Choice of full or half side rails.",
      ],
      specifications: [
        { label: "Height Range", value: "15 in – 23 in" },
        { label: "Maximum Back Angle", value: "70°" },
        { label: "Maximum Knee Angle", value: "45°" },
        { label: "Weight Capacity", value: "450 lb" },
      ],
    },
    {
      id: 9,
      name: 'Transport Chair, 19" seat, 300lbs capacity',
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: transport,
      features: [
        "Lightweight and Compact: Only 18 lbs for easy maneuverability.",
        'Comfortable Seating: 19" seat width with padded fixed armrests.',
        "Convenient Footrests: Swing-away footrests included.",
        "Easy Storage: Foldable back for compact storage.",
      ],
      specifications: [
        { label: "Seat Dimensions", value: '19" width, 16" depth' },
        { label: "Seat-to-Floor Height", value: "19″" },
        { label: "Weight Capacity", value: "300 lbs" },
        { label: "Product Weight", value: "18 lbs" },
        { label: "Overall Width", value: "23.5″" },
        { label: "Folded Width", value: "10.75″" },
      ],
    },
    {
      id: 10,
      name: "Full Electric Homecare Bed (rails & foam mattress)",
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: beds,
      features: [
        "Durable 2-piece tubular frame for reinforced strength.",
        "Four 3-inch castors with two locking and two swivel.",
        "Washable and long-lasting bed ends.",
        "Mattress retainer system included.",
        "Available with full or half side rails.",
      ],
      specifications: [
        { label: "Height Range", value: "15 in – 23 in" },
        { label: "Bed Length", value: "86 in" },
        { label: "Width", value: "36 in" },
        { label: "Weight", value: "165 lb" },
        { label: "Weight Capacity", value: "450 lb" },
      ],
    },
    {
      id: 11,
      name: "Trapeze Bar with Base (for regular beds)",
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: trapezebarbase,
      features: [
        "Wide Range of Adjustability.",
        "Heavy-Gauge Steel Construction.",
        "Nylon-Coated Hand Bar.",
        "Protective Wall Bumpers.",
      ],
      specifications: [
        { label: "Overall Height", value: "61 in" },
        { label: "Reach", value: "34 in" },
        { label: "Weight Capacity", value: "250 lbs" },
      ],
    },
    {
      id: 12,
      name: "Patient Lift, Manual (sling sold separately)",
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: patientlift,
      features: [
        "Durable Steel Construction with Silver Vein finish.",
        "6-Point Swivel Bar for 2 or 4 sling straps.",
        "Smooth Hydraulic Operation.",
        "Adjustable Base Width.",
        "Choice of 3″ or 5″ casters.",
      ],
      specifications: [
        { label: "Weight Capacity", value: "450 lbs" },
        { label: "Boom Height", value: "17.5″ – 72″" },
        { label: "Weight", value: "72 lbs" },
        { label: "Casters", value: "5″" },
      ],
    },
    {
      id: 13,
      name: "Over Bed Tables",
      weeklyprice: "$22227",
      monthlyprice: "$2.2227",
      image: table,
      features: [
        'Height adjustable from 30" – 43".',
        "Walnut wood grain laminate top.",
        "Locking swivel wheels.",
        "Heavy-gauge steel construction.",
      ],
      specifications: [
        { label: "Overall Width", value: "30 inches" },
        { label: "Dimensions High", value: "29w x 15.5d x 42.75h" },
        { label: "Dimensions Low", value: "29w x 15.5d x 29.75h" },
        { label: "Material Frame", value: "STEEL" },
      ],
    },
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(`/rental/${product.id}`, { state: { product } });
    }, 300); // Adding a slight delay to ensure smooth scrolling before navigation
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
            <div className="product-weeklyprice">
              Weekly Price: <span className="product-price">{product.weeklyprice.toLocaleString()}</span>
            </div>
            
            <div className="product-monthlyprice">
              Monthly Price: <span className="product-price">{product.monthlyprice.toLocaleString()}</span>
            </div>
            {/* <div className="product-price">${product.price.toLocaleString()}</div> */}
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product);
              }}
            >
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}