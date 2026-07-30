import React from "react";
import Footer from "../layouts/Footer";
import Hero from "../Components/home/Hero";
import Catgerios from "../Components/home/catgerios";
import SubHero from "../Components/home/SubHero";
import WhyChoose from "../Components/home/WhyChoose";
import ShoppingGuide from "../Components/home/ShoppingGuide";
import Navbar from "../layouts/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <SubHero />
      <Catgerios />
      <WhyChoose />
      <ShoppingGuide />
      
      
    </div>
  );
};

export default Home;