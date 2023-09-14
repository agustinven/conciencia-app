import React from "react";
import CoursePrincipal from "../../components/CoursesInfo/CoursesPrincipal";
import { Hero, PromotionBar, WeOffer } from "./components";
import { Community, NavBar, Footer, Answers } from "../../components";
import WhyChoose from "../../components/Infocards/WhyChoose";

const Home = () => {
  return (
    <>
      <PromotionBar
        bgColor="bg-gradient-to-r from-[#6709DA] to-[#0F97FF]"
        span="#INSCRIBITE"
        p=" A NUESTRO CURSO DE MICROSCOPIA!!"
      />
      {/* <NavBar /> */}
      <Hero />
      <WeOffer />
      <WhyChoose />
      <CoursePrincipal />
      <Community />
      <Answers />
      <Footer />
    </>
  );
};

export default Home;
