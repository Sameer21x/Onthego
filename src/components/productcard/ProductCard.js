import { useNavigate } from "react-router-dom"
import wheelchair from "../../assets/images/16wheelchair.jpeg"
import wheelchair22 from "../../assets/images/22inchwheelchair.jpeg"
// import beds from "../../assets/images/beds.webp"
import LTCmattress from "../../assets/images/LTC mattress.png"
import Foammattress from "../../assets/images/Foam mattres.png"
import trapezebar from "../../assets/images/trapeze bar.jpeg"
import scooter from "../../assets/images/kneescooter.webp"
import legrest from "../../assets/images/leg rest.webp"
import trapezebarbase from "../../assets/images/basetrapeze.webp"
import transport from "../../assets/images/transportchair-300x300.jpg"
import patientlift from "../../assets/images/patientlift.jpeg"
import table from "../../assets/images/tableover.webp"
import "../productcard/ProductCard.css"

export default function ProductCards() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wheelchair 16″ Seat, 300lbs capacity",
      weeklyprice: "$50.00",
      monthlyprice: "$100.00",
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
        { label: "Folded Width", value: '12"' },
        { label: "Weight Capacity", value: "300 lbs" },
        { label: "Product Weight", value: "40 lbs" },
        { label: "Tire Material", value: "Urethane" },
        { label: "Footrest Style", value: "Fixed footrests" },
        { label: "Braking System", value: "Push-to-lock" },
      ],
    },
    {
      id: 2,
      name: "Wheelchair 18″ Seat, 300lbs capacity",
      weeklyprice: "$50.00",
      monthlyprice: "$100.00",
      image: wheelchair,
      features: [
        "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
        "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
        "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches.",
        "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
        "Swing-Away Footrests: Equipped with swing-away footrests featuring tool-free adjustable length riggings and heel loops for added safety.",
        "Smooth Mobility: Urethane tires mounted on composite wheels and 8-inch front casters, adjustable in three positions, provide a smooth ride over different surfaces.",
        "Secure Wheel Locks: Push-to-lock wheel locks ensure stability during transfers.",
        "Convenient Storage: Carry pocket on the backrest offers additional storage for personal items.",
        "This wheelchair is an excellent choice for individuals seeking a reliable and comfortable mobility solution."
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
      weeklyprice: "$50.00",
      monthlyprice: "$100.00",
      image: wheelchair,
      features: [
        "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
        "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
        "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches.",
        "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
        "Swing-Away Footrests: Equipped with swing-away footrests featuring tool-free adjustable length riggings and heel loops for added safety.",
        "Smooth Mobility: Urethane tires mounted on composite wheels and 8-inch front casters, adjustable in three positions, provide a smooth ride over different surfaces.",
        "Secure Wheel Locks: Push-to-lock wheel locks ensure stability during transfers.",
        "Convenient Storage: Carry pocket on the backrest offers additional storage for personal items."
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
      weeklyprice: "$75.00",
      monthlyprice: "$150.00",
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
        { label: "Foldable", value: "Yes, for portability." },
        { label: "Armrest Style", value: "Removable desk armrests, padded for comfort." },
        { label: "Wheel Locks", value: "Push-to-lock for added safety." },
        { label: "Upholstery", value: "Black vinyl, easy to clean and maintain." },


      ],
    },
    {
      id: 5,
      name: "Elevating Leg Rest",
      weeklyprice: "$20.00",
      monthlyprice: "$40.00",
      image: legrest,
      features: [
        "These elevating leg rests are designed to provide enhanced comfort and support, making them a valuable addition to wheelchairs. They are ideal for users who need to maintain an elevated leg position to reduce swelling, improve circulation, or accommodate injuries. Constructed with durable materials, they ensure reliability for long-term use.",
        "Leg rests are an essential accessory for wheelchair users, offering ergonomic support and the flexibility to adjust as needed.",

        "High-Quality Design: The aluminum footplates are lightweight yet sturdy, ensuring durability without adding extra weight.",
        "Padded Calf Pads: The soft padding provides superior support and reduces pressure on the legs, offering a more comfortable experience.",
        "Customizable Comfort: The adjustable design allows users to position their legs at the desired angle for optimal comfort and support.",
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
      weeklyprice: "$40.00",
      monthlyprice: "$80.00",
      image: scooter,
      features: [
        "Height Adjustable: Accommodates users of varying heights, ensuring optimal comfort and support.",
        "Dual Handbrakes: Equipped with dual handbrakes for superior stopping control, enhancing user safety.",
        "Sleek Frame Design: The modern frame design not only offers aesthetic appeal but also contributes to the walker’s durability.",
        "8-Inch Wheels: Large wheels provide smooth maneuverability across different surfaces, both indoors and outdoors.",
        "Foldable Handlebar: The handlebar folds down easily, allowing for convenient transport and storage.",
        "Comfortable Knee Pad: Features a cushioned knee platform that can be used with either the left or right leg, providing flexibility during recovery.",
        "Convenient Storage Basket: Includes a detachable basket for carrying personal items, adding convenience for the user."
      ],
      specifications: [
        { label: "Weight Capacity", value: "300 pounds" },
        { label: "Product Weight", value: "21 pounds" },
        { label: "Handle Height Range", value: "31 to 41 inches" },
        { label: "Knee Pad Height Range", value: "16.5 to 20.5 inches" },
        { label: "Knee Pad Dimensions", value: "14 inches (length) x 7 inches (width)" },
        { label: "Overall Width", value: "17 inches" },
        { label: "Wheel Size", value: "8 inches" },
        { label: "Frame Material", value: "Aluminum" },
        { label: "Color", value: "Black" },
        { label: "Latex-Free", value: "Yes" },
        { label: "Assembly Required", value: "Yes" },

      ],
    },
    {
      id: 7,
      name: "Trapeze Bar Attachment (for Home Care Beds)",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$45.00",
      image: trapezebar,
      features: [
        "The Trapeze Bar Attachment is a high-quality, essential mobility aid for patients requiring assistance with repositioning in bed. Designed to provide added support and independence, it allows individuals to reposition themselves with minimal effort. The attachment features a heavy-duty chrome frame, ensuring long-lasting durability, while the nylon-coated hand bar offers a secure and comfortable grip. The set includes both upper and lower brackets for easy installation, making it compatible with most hospital beds.",
        '34” Reach: The trapeze bar provides ample reach, allowing patients to reposition themselves with ease.',
        "Chrome Frame: Made from sturdy chrome, the frame ensures durability and reliability in everyday use.",
        "Complete Bracket Set: Includes both upper and lower brackets for easy, secure attachment to the bed.",
        "Heavy-Gauge Steel Construction: Built with heavy-duty steel, this attachment is designed to withstand daily use and provide long-term reliability.",
        "Nylon-Coated Hand Bar: The hand bar is coated with nylon, offering a non-slip, secure grip, reducing the risk of hand fatigue.",
        "Protective Bumpers and Padded Mounting Brackets: All bumpers and padded brackets ensure that both the bed ends and surrounding walls are protected from damage during use."
      ],
      specifications: [{ label: "Weight Capacity", value: "250 lbs" }],
    },
    {
      id: 8,
      name: "Full Electric Homecare Bed (rails & LTC mattress)",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$300.00",
      image: LTCmattress,
      features: [
        "The Full Electric Homecare Bed offers a lightweight and simple installation process while prioritizing comfort and safety. This electric bed features 3 adjustable functions via a hand pendant, allowing you to adjust the head, foot, and overall height with ease. The elegant walnut-finished bed ends add a touch of style. Available with either full or half side rails, this bed is designed to provide maximum safety and comfort, with a foam mattress that supports restful sleep or recovery.* 4 inch Length extender available upon request.",
        "Durable 2-piece tubular frame for reinforced strength.",
        "Four 3-inch castors, with two locking and two swivel for mobility.",
        "Washable and long-lasting bed ends.",
        "Mattress retainer system to keep the foam mattress in place.",
        "Available with full or half side rails for extra safety.",
        "The foam mattress offers a comfortable yet supportive surface for relaxation.",
        "Bed Dimensions: 86” L x 36” W x 15” – 23” H."
      ],
      specifications: [
        { label: "Height Range", value: "15 in – 23 in" },
        { label: "Contains Forever Chemicals", value: "No" },
        { label: "Color", value: "Brown" },
        { label: "Mattress Retainers", value: "End Retainers" },
        { label: "Maximum Back Angle", value: "70°" },
        { label: "Bed Length", value: "86 in" },
        { label: "Maximum Knee Angle", value: "45°" },
        { label: "Width", value: "36 in" },
        { label: "Weight", value: "165 lb" },
        { label: "Weight Capacity", value: "450 lb" },
        { label: "Auto Contour", value: "No" },
        { label: "Backup Battery", value: "Yes" },
        { label: "Bed Size", value: "Twin" },
        { label: "Length Expansion System", value: "Available" },
        { label: "Locking Casters", value: "Yes" },
        { label: "Material", value: "Steel" },
        { label: "End Panels Included", value: "Yes" },
        { label: "Assists", value: "Assist Rail" },
        { label: "Plug Type", value: "3-Prong" },
        { label: "Length", value: "86 in" },
        { label: "Lock Type", value: "Locking Casters" },
        { label: "Height Adjustable", value: "Yes" },
        { label: "Width Expansion System", value: "No" },
      ],
    },
    {
      id: 9,
      name: 'Transport Chair, 19" seat, 300lbs capacity',
      weeklyprice: "$45.00",
      monthlyprice: "$95.00",
      image: transport,
      features: [
        "This transport chair is designed to offer easy and efficient mobility for individuals who require assistance. It features a sturdy frame and convenient foldable design for effortless storage and transport. Perfect for users seeking a reliable and comfortable solution, this chair provides essential features for daily use.",
        "Lightweight and Compact: Weighs only 18 lbs, making it easy to maneuver and transport.",
        'Comfortable Seating: 19" seat width with padded fixed armrests for extended comfort.',
        "Convenient Footrests: Swing-away footrests provide easy access and enhanced support.",
        "Durability: Attractive nylon upholstery is durable, easy to clean, and stylish.",
        "Easy Storage: Foldable back allows for compact storage and portability.",
        "Reliable Safety: Equipped with rear wheel locks for added security when stationary.",
      ],
      specifications: [
        { label: "Seat Dimensions", value: '19" width, 16" depth' },
        { label: "Seat-to-Floor Height", value: "19″" },
        { label: "Weight Capacity", value: "300 lbs" },
        { label: "Frame Material", value: "Durability and strength" },
        { label: "Upholstery", value: "Durable black nylon material" },
        { label: "Caster Diameter", value: '8" front and rear casters for smooth movement' },
        { label: "Footrests", value: "Swing-away, included for ease of use" },
        { label: "Back Height", value: "18″" },
        { label: "Overall Product Height", value: "39″" },
        { label: "Overall Length", value: "33″" },
        { label: "Overall Width", value: "23.5″" },
        { label: "Folded Width", value: "10.75″" },
        { label: "Product Weight", value: "18 lbs" },
        { label: "Wheel Locks", value: "Rear push-to-lock for safety" },
        { label: "Back Angle", value: "Non-adjustable" },
      ],
    },
    {
      id: 10,
      name: "Full Electric Homecare Bed (rails & foam mattress)",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$275.00",
      image: Foammattress,
      features: [
        "The Full Electric Homecare Bed offers a lightweight and simple installation process while prioritizing comfort and safety. This electric bed features 3 adjustable functions via a hand pendant, allowing you to adjust the head, foot, and overall height with ease. The elegant walnut-finished bed ends add a touch of style. Available with either full or half side rails, this bed is designed to provide maximum safety and comfort, with a foam mattress that supports restful sleep or recovery.",
        "4-inch Length extender available upon request.",
        "Durable 2-piece tubular frame for reinforced strength.",
        "Four 3-inch castors, with two locking and two swivel for mobility.",
        "Washable and long-lasting bed ends.",
        "Mattress retainer system to keep the foam mattress in place.",
        "Available with full or half side rails for extra safety.",
        "The foam mattress offers a comfortable yet supportive surface for relaxation.",
        "Bed Dimensions: 86” L x 36” W x 15” – 23” H.",
      ],
      specifications: [
        { label: "Height Range", value: "15 in – 23 in" },
        { label: "Contains Forever Chemicals", value: "No" },
        { label: "Color", value: "Brown" },
        { label: "Mattress Retainers", value: "End Retainers" },
        { label: "Maximum Back Angle", value: "70°" },
        { label: "Bed Length", value: "86 in" },
        { label: "Maximum Knee Angle", value: "45°" },
        { label: "Width", value: "36 in" },
        { label: "Weight", value: "165 lb" },
        { label: "Weight Capacity", value: "450 lb" },
        { label: "Auto Contour", value: "No" },
        { label: "Backup Battery", value: "Yes" },
        { label: "Bed Size", value: "Twin" },
        { label: "Length Expansion System", value: "Available" },
        { label: "Locking Casters", value: "Yes" },
        { label: "Material", value: "Steel" },
        { label: "End Panels Included", value: "Yes" },
        { label: "Assists", value: "Assist Rail" },
        { label: "Plug Type", value: "3-Prong" },
        { label: "Length", value: "86 in" },
        { label: "Lock Type", value: "Locking Casters" },
        { label: "Height Adjustable", value: "Yes" },
        { label: "Width Expansion System", value: "No" },
      ],
    },
    {
      id: 11,
      name: "Trapeze Bar with Base (for regular beds)",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$95.00",
      image: trapezebarbase,
      features: [
        "The Trapeze Bar with Base is an essential tool for patient mobility, providing crucial support for patients who need assistance in changing positions while in bed or transferring between the bed and a chair.",
        "This versatile device offers a wide range of height and hand bar adjustments to maximize patient comfort and accessibility, allowing for more independence with minimal assistance from caregivers.",
        "Its robust construction ensures long-lasting durability, while the simple, tool-free assembly makes it easy to set up.",
        "Wide Range of Adjustability: The trapeze bar offers various height and hand bar position adjustments, enhancing patient accessibility and ease of use.",
        "Heavy-Gauge Steel Construction: Built from durable octagon-steel, the trapeze bar withstands frequent use and provides reliable support for patients.",
        "Nylon-Coated Hand Bar: The hand bar is coated with nylon, offering a secure and comfortable grip, reducing the risk of hand slippage during use.",
        "Protective Wall Bumpers and Padded Mounting Brackets: The included bumpers and padded brackets protect the bed ends and wall surfaces from damage, ensuring the surrounding area remains unscathed.",
      ],
      specifications: [
        { label: "Overall Height", value: "61 in" },
        { label: "Reach", value: "34 in" },
        { label: "Weight Capacity", value: "250 lbs" },
        { label: "Optimal Height", value: "Provides easy access, making it suitable for most bed heights." },
        { label: "Ample Reach", value: "Ensures sufficient space for patients to grab the hand bar, providing leverage for repositioning." },
      ],
    },
    {
      id: 12,
      name: "Patient Lift, Manual (sling sold separately)",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$150.00",
      image: patientlift,
      features: [
        "The Manual Patient Lift is designed to assist in transferring individuals from one position to another with minimal effort, ensuring safety and comfort.",
        "Built with a strong Silver Vein steel frame, this lift provides durability and long-term reliability in healthcare settings.",
        "The lift is equipped with a 6-point swivel bar, allowing it to accommodate both 2 or 4 sling straps, offering compatibility with a wide range of slings to suit different needs (slings sold separately).",
        "High-performance hydraulics allow for gradual and smooth lifting and lowering of individuals, providing controlled support throughout the process.",
        "The adjustable-width base enhances maneuverability, allowing the lift to be easily adapted to fit various spaces.",
        "Durable Steel Construction: The Silver Vein steel frame ensures long-lasting strength and stability, even under heavy use.",
        "6-Point Swivel Bar: Compatible with both 2 or 4 sling straps, the swivel bar ensures secure, balanced lifting, and accommodates a variety of patient lifting slings (sold separately).",
        "Smooth Hydraulic Operation: High-performance hydraulics offer controlled, gradual lifting and lowering, ensuring the safety and comfort of the patient during transfers.",
        "Adjustable Base Width: The adjustable base width provides enhanced versatility, allowing the lift to fit into various spaces, whether in home care, nursing homes, or hospitals.",
        "Caster Options: Choose between 3″ or 5″ casters for easy maneuverability, depending on the surface type and space available.",
      ],
      specifications: [
        { label: "Weight Capacity", value: "450 lbs" },
        { label: "Boom Height", value: "17.5″ – 72″" },
        { label: "Carton Shipping Weight", value: "84 lbs" },
        { label: "Casters", value: "5″ (13023SV)" },
        { label: "Weight", value: "72 lbs" },
        { label: "Supports Patients", value: "Up to 450 lbs, making it suitable for a wide range of individuals." },
        { label: "Adjustable Boom Height", value: "Accommodates various lifting needs, providing flexibility in patient transfers." },
        { label: "Caster Stability", value: "Provides stability and mobility, ensuring smooth transport across most flooring types." },
      ],
    },
    {
      id: 13,
      name: "Over Bed Tables",
      weeklyprice: "Not Available for weekly rental",
      monthlyprice: "$40.00",
      image: table,
      features: [
        "The Overbed Table has a non-tilt silver vein base and can be raised or lowered to varying positions from 28.25 – 44.75 inches.",
        "The walnut wood grained laminate top locks into place when the adjustment handle is released.",
        "The overbed table has 2-inch locking swivel casters for secure positioning and easy maneuverability.",
        "EASILY ADJUST THE TABLE HEIGHT from 30” – 43” with the release and lock adjustment lever.",
        "BEAUTIFUL, DURABLE AND EASY TO CLEAN walnut wood grain top laminate table holds meals, laptops, books, and personal items.",
        "The base construction is heavy-gauge steel with an attractive hammer tone finish.",
        "LOCKING SWIVEL WHEELS make rolling and maneuvering the bedside table – and locking it in place – easy and effortless.",
      ],
      specifications: [
        { label: "Color", value: "Brown" },
        { label: "Overall Width", value: "30 inches" },
        { label: "Overall Dimensions High", value: "29w x 15.5d x 42.75h" },
        { label: "Overall Dimensions Low", value: "29w x 15.5d x 29.75h" },
        { label: "Material Frame", value: "STEEL" },
        { label: "Material Front Wheel", value: "PP" },
        { label: "Latex Free", value: "YES" },
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