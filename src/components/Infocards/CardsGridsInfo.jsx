import React from "react";
import { Estudiante, Micro, User1, User2, Profe } from "../../assets";
import CardGridText from "./CardGridText";
import { ImgReusable } from "../Image";

const CardsGridsInfo = () => {
  return (
    // Flex Container
    <div className="relative flex flex-col items-center w-[100%] mt-[100px] ">
      {/* Grid Container */}
      <div className="grid flex-none justify-center gap-[20px] max-w-[1200px] w-[100%] grid-cols-8	grid-rows-1">
        {/* First Container */}
        <div className="flex flex-col h-[500px] w-[100%] col-[auto_/_span_5] rounded-[20px] bg-gradient-to-br from-[#F20575] to-[#6F00F8]">
          <CardGridText
            title="Profesores expertos"
            content="Aprendé interactuando con líderes de gran trayectoria en las empresas
            de tecnología más innovadoras."
            textColorOne="text-[#fff]"
            textColorTwo="text-[#fff]"
            textOpacity="opacity-70"
          />
          <ImgReusable
            img={Profe}
            widthImg="w-[550px]"
            heightImgContainer="min-h-[300px]"
            alignImgContainer="items-center"
          />
        </div>
        {/* Second Container */}
        <div className="flex flex-col h-[500px] w-[100%] bg-red-400 col-[auto_/_span_3] rounded-[20px] bg-gradient-to-br from-[#07DEFF] to-[#0088FF]">
          <CardGridText
            title="Tasa de aprobados"
            content="Contamos con una tasa de aprobacion  del 90%."
            textColorOne="text-[#fff]"
            textColorTwo="text-[#555555]"
          />
          <ImgReusable
            img={Profe}
            widthImg="w-[550px]"
            heightImgContainer="h-[336px]"
            alignImgContainer="items-center"
          />
        </div>
        {/* Third Container */}
        <div className="flex flex-col h-[500px] w-[100%] bg-red-400 col-[auto_/_span_3] rounded-[20px] bg-gradient-to-br from-[#0FBDDB] to-[#4AF3C3]">
          <CardGridText
            title="Cursos especializados"
            content="Sumate a nuestros master cursos."
            textColorOne="text-[#fff]"
            textColorTwo="text-[#555555]"
          />
          <ImgReusable
            img={Micro}
            widthImg="w-[300px]"
            heightImg="h-[300px]"
            alignImgContainer="items-center"
          />
        </div>
        {/* Fourth Container */}
        <div className="flex flex-col justify-between h-[500px] w-[100%] col-[auto_/_span_5] rounded-[20px] bg-gradient-to-br from-[#0099FF] to-[#FF00FF]">
          <CardGridText
            title="La mejor educacion online a tu alcance"
            content="Inscribite a clases prácticas con mentorías personalizadas dictadas por quienes más saben."
            textColorOne="text-[#fff]"
            textColorTwo="text-[#fff]"
            textOpacity="opacity-70"
          />
          <div className="w-full flex flex-row justify-between">
            <div>
              <ImgReusable
                img={Estudiante}
                widthImg="w-[350px]"
                heightImg="min-h-[250px]"
                alignImgContainer="items-start"
              />
            </div>
            <div className="flex flex-col justify-center mr-6">
              <div className="flex flex-row items-center gap-3">
                <img
                  src={User1}
                  className="rounded-full border-[4px] border-orange-400"
                />
                <div className="bg-gray-200 w-[200px] h-[50px] rounded-xl"></div>
              </div>
              <div className="flex flex-row justify-between items-center gap-3">
                <div className="bg-gray-200 w-[200px] h-[50px] rounded-xl"></div>
                <img
                  src={User2}
                  className="rounded-full border-[4px] border-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGridsInfo;
