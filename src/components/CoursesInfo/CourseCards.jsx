import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseCards = ({ discount, title, price, modality, color }) => {
  return (
    <div className="bg-white border-[2px] rounded-[20px] w-full relative z-10 flex flex-col my-4 text-black font-bold">
      {/*Discount*/}
      <div
        className="w-[200px] rounded-r-xl mt-4 py-[4px] px-4 text-white font-bold"
        style={{ background: color }}
      >
        {discount}
      </div>
      <div className="m-4">
        {/*Title*/}
        <h1 className="bg-gradient-to-r bg-clip-text text-transparent from-[#0088FF] to-[#00CCFF] font-bold text-6xl">
          {title}
        </h1>
        <p className="text-[#7B7B7B] py-2">/ por seis meses</p>
        <div className="w-[350px] border border-[#7B7B7B] mx-auto"></div>
        {/* benefits section */}
        <div className="py-8">
          <div className="flex items-center">
            <FaCheck size={15} className=" text-[#544F52]" />
            <p className="py-2 pl-4 ">Correccion de proyectos practicos</p>
          </div>
          <div className="flex items-center">
            <FaCheck size={15} className=" text-[#544F52]" />
            <p className=" py-2 pl-4">Tutoria personalizada</p>
          </div>
          <div className="flex items-center">
            <FaCheck size={15} className=" text-[#544F52]" />
            <p className="py-2 pl-4">¡Aprovecha 2 clases de prueba!</p>
          </div>
          {/*Price*/}
          <p className="pt-6 bg-gradient-to-r bg-clip-text text-transparent from-[#0088FF] to-[#00CCFF] font-bold text-5xl">
            {price}
          </p>
          <p className="py-1 mt-8 bg-[#F2EFEF] rounded-full w-[200px] text-center text-[#7B7B7B]">
            {modality}
          </p>
        </div>
        {/*Button*/}
        <motion.button className="bg-gradient-to-br from-[#0088FF] to-[#00CCFF] w-full text-white text-xl rounded-xl py-2">
          Ver más
        </motion.button>
      </div>
    </div>
  );
};

export default CourseCards;
