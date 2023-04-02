import React from "react";
import { TitlePresentation } from "../Titles";
import CardsGridsInfo from "./CardsGridsInfo";

const WhyChoose = () => {
  return (
    <div className="w-full text-black my-[150px]">
      <TitlePresentation
        h1="¿Por qué elegirnos?"
        p="Clases online en vivo dictadas por expertos, mentorías personalizadas y acceso a una comunidad de estudiantes."
        bgColor="from-[#FF0066] to-[#6600FF]"
      />
      <CardsGridsInfo />
    </div>
  );
};

export default WhyChoose;
