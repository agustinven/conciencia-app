import React from "react";
import { WeOfferYou } from "../../../assets";
import * as comp from "../../../components"

const WeOffer = () => {
  return (
    <div className="w-full text-white bg-[#13161C] mt-20 mb-48 md:mt-28">
      <comp.TitlePresentation
        h1="Te ofrecemos"
        p="Cursos efectivos en 21 areas de estudio mas demandadas en el mercado
        laboral."
        bgColor="text-[#4086FF]"
      />
      <img
        className="w-[1200px] mx-auto md:rounded-t-3xl"
        src={WeOfferYou}
      ></img>
    </div>
  );
};

export default WeOffer;
