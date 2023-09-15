import React from "react";
import CardCommunity from "./CardCommunity";
import { CommunityOne } from "../../assets";
import { CommunityTwo } from "../../assets";
import { CommunityThree } from "../../assets";
import * as comp  from "../Titles/TitlePresentation";

const Community = () => {
  return (
    <div className="pb-36 md:pb-48">
      <div className="md:max-w-[1200px] mx-auto text-center">
        <comp.TitlePresentation
          h1={"De la comunidad"}
          p={"Cientos de estudiantes ya aprenden en conciencia"}
          bgColor="text-[#7F43FF]"
        />
        <div className="max-sm:carousel max-sm:carousel-center space-x-4 max-sm:max-w-full md:mx-auto flex justify-between px-6 md:px-0">
          <CardCommunity
            opinion={
              "Las clases superaron mis expectativas ampliamente, la buena onda y las explicaciones fueron nada que ver a lo que yo pensaba..."
            }
            img={CommunityOne}
            name={"Agustin Avendaño"}
            career={"Software Developer"}
          />

          <CardCommunity
            opinion={
              "¡Desafío superado! 🎊 Contento de haber adquirido estos conocimientos del software After Effects en una institución como Coderhouse..."
            }
            img={CommunityTwo}
            name={"Sabrina Dhooge"}
            career={"Product Designer"}
          />

          <CardCommunity
            opinion={
              "Sin duda adquirir nuevos conocimientos y seguir capacitándome. No quiero dejar de agradecer..."
            }
            img={CommunityThree}
            name={"Teo Patroclo"}
            career={"Creative Director"}
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
