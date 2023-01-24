import React from "react";
import Cards from "../../components/Cards";
import Community from "../../components/Community";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar";
import WeOffer from "../../components/WeOffer";
import WhyChoose from "../../components/WhyChoose";
import Footer from "../../components/Footer";
import Answers from "../../components/Answers";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <WeOffer />
      <WhyChoose />
      <Cards />
      <Community />
      <Answers />
      <Footer />
    </>
  );
};

export default Home;
