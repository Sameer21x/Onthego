import "../../components/RentalTerms&Conditions/RentalTerms.css"


export default function RentalTerms() {
    return (
      <div className="rental-terms-container">
        <h1 className="rental-terms-title">Rental Terms & Conditions</h1>
  
        <div className="rental-terms-content">
          <p className="terms-intro">
            By renting any medical equipment from us, you agree to the following terms and conditions:
          </p>
  
          <section className="terms-section">
            <h2>1. Delivery Information</h2>
            <p>Two-Way Delivery is required for all hospital bed rentals. The delivery fee is charged upfront.</p>
            <p>A) Wheelchairs, Transport Chairs, Knee Walkers: Starting at $65.00 for two-way delivery.</p>
            <p>B) Wheelchairs, Transport Chairs, Knee Walkers: Starting at $45.00 for one-way delivery.</p>
            <p>C) Hospital Beds: Starting at $125.00 for two-way delivery.</p>
          </section>
  
          <section className="terms-section">
            <h2>2. Deposits</h2>
            <p>For Non-Residential Addresses (e.g., Hotels, Motels), a deposit is required:</p>
            <ul className="deposit-list">
              <li>Wheelchairs & Transport Chairs: $100.00 deposit</li>
              <li>Heavy Duty Wheelchairs: $250.00 deposit</li>
              <li>Knee Walkers: $100.00 deposit</li>
              <li>Hospital Bed Packages: $500.00 deposit</li>
            </ul>
            <p>
              Refunds: Deposits for non-residential addresses are refundable upon the return of equipment in good
              condition.
            </p>
            <p>Required: A valid credit card and government-issued ID must be provided at the time of rental.</p>
          </section>
  
          <section className="terms-section">
            <h2>3. Rental Fees</h2>
            <p>First Month's Rent & Delivery Fees are charged upfront at the time of rental.</p>
            <p>
              No Refunds for Early Returns: Rental fees will not be refunded if the equipment is returned before the end
              of the agreed rental period.
            </p>
          </section>
  
          <section className="terms-section">
            <h2>4. Hospital Bed Deliveries</h2>
            <p>
              No Upstairs Deliveries of Hospital Beds: Hospital bed rentals will not be delivered to upper floors without
              an elevator.
            </p>
          </section>
  
          <section className="terms-section">
            <h2>5. General Conditions</h2>
            <p>Cancellation Policy: Cancellations must be made at least 24 hours in advance to avoid additional fees.</p>
            <p>
              Equipment Return: All rented equipment must be returned on the agreed-upon date in good condition, or
              additional charges may apply.
            </p>
            <p>
              Responsibility: The renter is responsible for ensuring the safe use, maintenance, and return of the rented
              equipment. Any damage or loss will result in additional charges.
            </p><br></br>
            <p className="terms-agreement">
              By renting medical equipment, you acknowledge that you have read, understood, and agree to these terms and
              conditions.
            </p>
          </section>
        </div>
      </div>
    )
  }
  
  