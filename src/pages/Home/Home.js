import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ImageCarousel from '../../components/ImageCarousel/Imagecarousel';
import Cards from '../../components/Cards/Card';
import Categories from '../../components/Categories/Categories';
import CardsCarousel from '../../components/CardsCarousel/CardCarousel';
import Footer from '../../components/Footer/Footer';
import TextSlider from '../../components/TextSlider/TextSlider';
import Store from '../../components/OurStore/Store';

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
    },
    {
      name: "Vive Health",
      logo: "/images/vive-health-logo.png"
    },
    {
      name: "Vive Health",
      logo: "/images/vive-health-logo.png"
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
        <TextSlider />
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
          <Store />
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

