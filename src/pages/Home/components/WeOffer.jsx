import React from "react";
import { WeOfferYou } from "../../../assets";
import { TitlePresentation } from "../../../components";

const WeOffer = () => {
  return (
    <div className="w-full text-white bg-gradient-to-b from-[#091370] to-[#00CCFF]">
      <TitlePresentation
        h1="Te ofrecemos"
        p="Cursos efectivos en 21 areas de estudio mas demandadas en el mercado
        laboral."
        bgColor="from-[#0088FF] to-[#00CCFF]"
      />
      <img
        className="w-[1200px] mx-auto mt-12 rounded-t-3xl"
        src={WeOfferYou}
      ></img>
    </div>
  );
};

export default WeOffer;
