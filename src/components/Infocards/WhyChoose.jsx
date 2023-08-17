import React from "react";
import { TitlePresentation } from "../Titles";
import CardsGridsInfo from "./CardsGridsInfo";

const WhyChoose = () => {
  return (
    <div className="w-full text-white mb-48">
      <TitlePresentation
        h1="¿Por qué elegirnos?"
        p="Clases online en vivo dictadas por expertos, mentorías personalizadas y acceso a una comunidad de estudiantes."
        bgColor="text-[#EE3E5F]"
      />
      <CardsGridsInfo />
    </div>
  );
};

export default WhyChoose;
