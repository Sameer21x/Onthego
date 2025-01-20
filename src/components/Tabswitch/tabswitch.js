"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RentalTerms from "./rental-terms"

export default function SwitchTab() {
  const productDescription = {
    features: [
      "Sturdy Frame: Powder-coated silver vein steel frame ensures long-lasting durability.",
      "Easy-to-Clean Upholstery: Embossed vinyl upholstery is lightweight, attractive, and simple to maintain.",
      "Adjustable Seat Height: Dual axle allows seat-to-floor height adjustment from 17.5 inches to 19.5 inches, accommodating various user needs.",
      "Removable Armrests: Available with detachable desk-length armrests for personalized comfort.",
      "Swing-Away Footrests: Equipped with swing-away footrests featuring tool-free adjustable length riggings and heel loops for added safety.",
      "Smooth Mobility: Urethane tires mounted on composite wheels and 8-inch front casters, adjustable in three positions, provide a smooth ride over different surfaces.",
      "Secure Wheel Locks: Push-to-lock wheel locks ensure stability during transfers.",
      "Convenient Storage: Carry pocket on the backrest offers additional storage for personal items.",
    ],
    specifications: [
      { label: "Seat Width", value: "20 inches" },
      { label: "Seat Depth", value: "16 inches" },
      { label: "Seat-to-Floor Height", value: "Adjustable from 17.5 inches to 19.5 inches" },
      { label: "Back Height", value: "16 inches" },
      { label: "Overall Width (Open)", value: "28 inches" },
      { label: "Overall Width (Closed)", value: "12.5 inches" },
      { label: "Overall Height", value: "36 inches" },
      { label: "Overall Length (with Riggings)", value: "42 inches" },
      { label: "Product Weight", value: "42 pounds" },
      { label: "Weight Capacity", value: "300 pounds" },
    ],
  }

  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="rental-terms">Rental Terms & Conditions</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <div className="space-y-6">
          <section>
            <h3 className="font-semibold text-lg mb-3">Features:</h3>
            <ul className="space-y-2">
              {productDescription.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Specifications:</h3>
            <div className="grid gap-2">
              {productDescription.specifications.map((spec, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <span className="text-gray-600">{spec.label}:</span>
                  <span className="text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>

          <p className="text-gray-700 mt-4">
            This wheelchair is an excellent choice for individuals seeking a reliable and comfortable mobility solution.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="rental-terms" className="mt-6">
        <RentalTerms />
      </TabsContent>
    </Tabs>
  )
}

