import React from "react";
import { TitlePresentation } from "../Titles";
import CardsGridsInfo from "./CardsGridsInfo";

const WhyChoose = () => {
  return (
    <div className="bg-red-200 w-full text-white">
      <TitlePresentation
        h1="¿Por qué elegirnos?"
        p="Clases online en vivo dictadas por expertos, mentorías personalizadas y acceso a una comunidad de estudiantes."
        bgColor="text-[#EE3E5F]"
      />
      {/* <CardsGridsInfo /> */}
      <div className="w-full bg-red-700 mt-8">
        <p>lorem</p>
      </div>
    </div>
  );
};

export default WhyChoose;
