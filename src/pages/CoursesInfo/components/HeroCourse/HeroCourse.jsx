import React from "react";
import HeroTitles from "../HeroTitles/HeroTitles";
import { ProfeLaboOne } from "../../../../assets";
import { useParams } from "react-router-dom";
import { getColor } from "../../../../utils/getColorFunction";

const HeroCourse = () => {
  
  const { id } = useParams();

  //Asignar colores basados en el id del curso
  const color = getColor(id);

  return (
    <div className={`flex justify-between ${color} h-[800px] pb-36 md:pb-48`}>
      <div className="max-w-[1400px] ml-[200px] flex items-center">
        <div className="w-[500px]">
          <HeroTitles />
          <div className="py-12 flex justify-between">
            <button className="bg-white p-4 rounded-xl w-[220px] font-medium text-2xl">
              Inscribite ahora
            </button>
            <button className=" w-[220px] font-medium text-2xl text-white">
              Ver Programa
            </button>
          </div>
        </div>
      </div>
      <div
        className="w-[800px] flex items-center
      "
      >
        <img src={ProfeLaboOne} />
      </div>
    </div>
  );
};

export default HeroCourse;
