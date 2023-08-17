import React from "react";
import CardCommunity from "./CardCommunity";
import { CommunityOne } from "../../assets";
import { CommunityTwo } from "../../assets";
import { CommunityThree } from "../../assets";
import TitlePresentation from "../Titles/TitlePresentation";

const Community = () => {
  return (
    <div className="w-full mb-48">
      <div className="max-w-[1300px] mx-auto text-center">
        <TitlePresentation
          h1={"De la comunidad"}
          p={"Cientos de estudiantes ya aprenden en conciencia"}
          bgColor="text-[#7F43FF]"
        />
        <div className="mx-auto flex items-center gap-8">
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
              "Sin duda fue una gran experiencia que me permitió adquirir nuevos conocimientos y seguir capacitándome. No quiero dejar de agradecer..."
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
