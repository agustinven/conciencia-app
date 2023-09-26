import React from "react";
import HeroTitles from "../HeroTitles/HeroTitles";
import { useParams } from "react-router-dom";
import { getColor } from "../../../../utils/getColorFunction";
import { heroImagesCourse } from "../../../../data/heroImagesCourse";


const HeroCourse = () => {
  const { id } = useParams();

  //Asignar colores basados en el id del curso
  const color = getColor(id);

  //Alojar la imagen basado en el id del curso
  const heroImageDataId = heroImagesCourse[id];

  console.log(heroImageDataId)

  // const img = heroImagesCourse.map((image) => {
  //   return image.img
  // })

  // console.log(img)

  return (
    <div
      className={`relative flex flex-col md:flex-row justify-center md:justify-around items-center h-[500px] md:h-[800px] mb-36 md:mb-48`}
    >
      <div className="md:ml-4 flex flex-col items-center md:items-start">
        <div className="w-[300px] md:w-[500px] text-center md:text-left relative z-10">
          <HeroTitles />
          <div className="py-4 md:py-12 space-y-4 md:space-y-0 md:flex md:justify-between">
            <button className="bg-[#0065FD] p-2 md:p-4 rounded-xl w-full md:w-[220px] text-xl font-medium md:font-medium md:text-2xl text-white">
              Inscribite ahora
            </button>
            <button className="w-full md:w-[220px] text-xl font-medium md:font-medium md:text-2xl text-white">
              Ver Programa
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="bg-no-repeat bg-center bg-contain opacity-20 md:opacity-40 absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url('${heroImageDataId.img}')`, // Reemplaza 'tu-imagen.jpg' con la URL de tu imagen
            backgroundSize: "100% 100%",
          }}
        >
          {/* <img src={ProfeLaboOne} alt="ProfeLaboOne" className="w-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroCourse;
