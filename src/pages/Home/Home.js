import React from 'react';
import './Home.css';
import nova from "../../assets/images/nove-logo.png"
import mckesson from "../../assets/images/mckesson-logo.png"
import medline from "../../assets/images/medline-logo.png"
import pride from "../../assets/images/pride-logo.png"
import vive from "../../assets/images/vive-logo.png"
import drive from "../../assets/images/drive-logo.png"
import hollister from "../../assets/images/hollister-logo.png"
import Header from '../../components/Header/Header';
import ImageCarousel from '../../components/ImageCarousel/Imagecarousel';
import Cards from '../../components/Cards/Card';
import Categories from '../../components/Categories/Categories';
import CardsCarousel from '../../components/CardsCarousel/CardCarousel';
import Footer from '../../components/Footer/Footer';
import TextSlider from '../../components/TextSlider/TextSlider';
import Store from '../../components/OurStore/Store';
import { useEffect } from 'react';


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  // Sample data for CardsCarousel (replace with your actual data)
  const brands = [
    {
      name: "Nova",
      logo: nova
    },
    {
      name: "Drive",
      logo: drive
    },
    {
      name: "Pride",
      logo: pride
    },
    {
      name: "Hollister",
      logo: hollister
    },
    {
      name: "Vive Health",
      logo: vive
    },
    {
      name: "mckesson",
      logo: mckesson
    },
    {
      name: "medline",
      logo: medline
    },
  ];

  return (
    <div className="home">
      <Header />
      
      <div className="announcement-strip">
        <TextSlider />
      </div>

      <main className="main-content-home">
        <section className="carousel-section">
          <ImageCarousel />
          <Cards />

        </section>

        {/* <section className="cards-section">
          <Cards />
        </section> */}

        <section className="categories-section">
          <Categories />
        </section>

        <section className="home-info-section">
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

