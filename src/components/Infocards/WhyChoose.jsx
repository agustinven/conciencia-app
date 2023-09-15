import React from "react";
import * as comp from "../../components"
import CardsGridsInfo from "./CardsGridsInfo";

const WhyChoose = () => {
  return (
    <div className="text-white pb-36 md:pb-48">
      <comp.TitlePresentation
        h1="¿Por qué elegirnos?"
        p="Clases online en vivo dictadas por expertos, mentorías personalizadas y acceso a una comunidad de estudiantes."
        bgColor="text-[#EE3E5F]"
      />
      <CardsGridsInfo />
    </div>
  );
};

export default WhyChoose;
