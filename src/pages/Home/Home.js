import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ImageCarousel from '../../components/ImageCarousel/Imagecarousel';
import Cards from '../../components/Cards/Card';
import Categories from '../../components/Categories/Categories';
import CardsCarousel from '../../components/CardsCarousel/CardCarousel';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  // Sample data for CardsCarousel (replace with your actual data)
  const brands = [
    {
      name: "Nova",
      logo: "/images/nova-logo.png"
    },
    {
      name: "Drive",
      logo: "/images/drive-logo.png"
    },
    {
      name: "Pride",
      logo: "/images/pride-logo.png"
    },
    {
      name: "Hollister",
      logo: "/images/hollister-logo.png"
    },
    {
      name: "Vive Health",
      logo: "/images/vive-health-logo.png"
    }
  ];

  return (
    <div className="home">
      <Header />
      
      <div className="announcement-strip">
        <p>
          <span className="highlight">New Location-Aug 2024</span> 11938 Hesperia Rd. Ste B Hesperia, CA 92345 next to Harbor Freight
        </p>
      </div>

      <main className="main-content">
        <section className="carousel-section">
          <ImageCarousel />
        </section>

        <section className="cards-section">
          <Cards />
        </section>

        <section className="categories-section">
          <Categories />
        </section>

        <section className="info-section">
          <h2>Medical Equipment & Supplies</h2>
          <p>
            On The Go Medical Supply is your trusted partner in healthcare equipment and supplies. 
            We offer a comprehensive range of medical equipment, supplies, and accessories to meet 
            your healthcare needs. Our commitment to quality and customer service ensures you receive 
            the best products and support for your medical requirements.
          </p>
        </section>

        <section className="brands-section">
          <CardsCarousel brands={brands} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

