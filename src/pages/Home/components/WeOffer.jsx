import React from "react";
import { WeOfferYou } from "../../../assets";
import { TitlePresentation } from "../../../components";

const WeOffer = () => {
  return (
    <div className="w-full text-white bg-[#13161C] mt-28 mb-48">
      <TitlePresentation
        h1="Te ofrecemos"
        p="Cursos efectivos en 21 areas de estudio mas demandadas en el mercado
        laboral."
        bgColor="text-[#4086FF]"
      />
      <img
        className="w-[1200px] mx-auto rounded-t-3xl"
        src={WeOfferYou}
      ></img>
    </div>
  );
};

export default WeOffer;
