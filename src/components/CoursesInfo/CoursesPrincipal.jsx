import React from "react";
import CourseCards from "./CourseCards";
import { Gradient } from "../../assets";
import { TitlePresentation } from "../Titles";

const Cards = () => {
  return (
    <div className="w-full text-black">
      <TitlePresentation
        h1="Explora nuestros cursos"
        p="Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!"
        bgColor="from-[#FF0066] to-[#6600FF]"
      />
      <div className="relative max-w-[1200px] mx-auto mt-[100px] grid md:grid-cols-3 gap-6">
        <img src={Gradient} className="absolute bottom-[150px] z-0" />
        <CourseCards
          discount={"15% de descuento"}
          title={"Quimica I"}
          price={"$ 10.500 ARS"}
          modality={"Modalidad 100% online"}
          color={"hsla(208, 100%, 50%, 1)"}
        />
        <CourseCards
          discount={"15% de descuento"}
          title={"Laboratorio"}
          price={"$ 7.500 ARS"}
          modality={"Modalidad 100% online"}
        />
        <CourseCards
          discount={"15% de descuento"}
          title={"Organica II"}
          price={"$ 5000 ARS"}
          modality={"Modalidad 100% online"}
        />
      </div>
    </div>
  );
};

export default Cards;
