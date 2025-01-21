import Header from "../../components/Header/Header"
import ProductDetails from "../../components/product-details/product-details"    
import SwitchTab from "../../components/Tabswitch/tabswitch"
import ProductInquiry from "../../components/Forms/InquiryForm/productinquiry"
import Footer from "../../components/Footer/Footer"
import "../RentalProductDetails/RentalProductsDetail.css"

export default function RentalProductsDetail() {
  return (
    <div className="rental-products-page">
      <Header />

      <main className="main-content">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/rental">Rental</a>
              </li>
              <li>
                <span aria-current="page">HF3100 - I.C.U Bed Electric</span>
              </li>
            </ol>
          </nav>

          <ProductDetails />

          <section className="product-tabs-section">
            <SwitchTab />
          </section>

          <section className="product-inquiry-section" id="inquiry">
            <ProductInquiry />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

