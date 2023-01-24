import React from "react";
import { FaCheck } from "react-icons/fa";
import Profe from "../assets/images/profe.jpg";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <div className="w-full py-[6rem] px-4 text-white ">
      <div className="flex flex-col max-w-[1240px] items-center mx-auto border-t-2 border-[#2E2F36] pt-24">
        <p className="font-bold pb-4 text-2xl">
          +50 CURSOS ESPECIALIZADOS CADA MES
        </p>
        <h1
          className=" text-4xl font-bold md:text-6xl sm:text-3xl pb-8 bg-gradient-to-r bg-clip-text  text-transparent 
            from-fuchsia-500 via-violet-500 to-fuchsia-500 animate-text "
        >
          Explorá nuestros cursos
        </h1>
        <p className="pb-8 text-lg font-medium ">
          Aprende y desarrolla las habilidades que necesitas para potenciar tu
          profesión, ¡toma las primeras clases del curso que tú elijas sin
          costo!
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-4">
        {/* First Card */}
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg bg-[#2B2C32] text-[#9C9D9E]">
          <div>
            <img
              src={Profe}
              className="w-full h-[200px] font-medium text-white rounded-t-lg"
            />
          </div>
          <div className="font-medium p-4">
            <p className="font-bold text-white mt-4">Inicio en agosto 2022</p>
            <p className="font-medium">Examen anticipado diciembre</p>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4 ">Correccion de proyectos practicos</p>
            </div>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className=" py-2 ml-4">Tutoria personalizada</p>
            </div>
            <div className="flex items-center py-2">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4">¡Aprovecha 2 clases de prueba!</p>
            </div>
            <p className="mt-8 py-1 bg-[#393B43] rounded-full w-[200px] text-center">
              Modalidad 100% Online
            </p>
            <motion.button
              className="bg-[#0467fc] w-full text-white rounded-md font-medium my-6 px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Ver Curso
            </motion.button>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg bg-[#2B2C32] text-[#9C9D9E]">
          <div>
            <img
              src={Profe}
              className="w-full h-[200px] font-medium text-white rounded-t-lg"
            />
          </div>
          <div className="font-medium p-4">
            <p className="font-bold text-white mt-4">Inicio en agosto 2022</p>
            <p className="font-medium">Examen anticipado diciembre</p>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4 ">Correccion de proyectos practicos</p>
            </div>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className=" py-2 ml-4">Tutoria personalizada</p>
            </div>
            <div className="flex items-center py-2">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4">¡Aprovecha 2 clases de prueba!</p>
            </div>
            <p className="mt-8 py-1 bg-[#393B43] rounded-full w-[200px] text-center">
              Modalidad 100% Online
            </p>
            <motion.button
              className="bg-[#0467fc] w-full text-white rounded-md font-medium my-6 px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Ver Curso
            </motion.button>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg bg-[#2B2C32] text-[#9C9D9E]">
          <div>
            <img
              src={Profe}
              className="w-full h-[200px] font-medium text-white rounded-t-lg"
            />
          </div>
          <div className="font-medium p-4">
            <p className="font-bold text-white mt-4">Inicio en agosto 2022</p>
            <p className="font-medium">Examen anticipado diciembre</p>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4 ">Correccion de proyectos practicos</p>
            </div>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className=" py-2 ml-4">Tutoria personalizada</p>
            </div>
            <div className="flex items-center py-2">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4">¡Aprovecha 2 clases de prueba!</p>
            </div>
            <p className="mt-8 py-1 bg-[#393B43] rounded-full w-[200px] text-center">
              Modalidad 100% Online
            </p>
            <motion.button
              className="bg-[#0467fc] w-full text-white rounded-md font-medium my-6 px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Ver Curso
            </motion.button>
          </div>
        </div>

        <div className="w-full shadow-xl flex flex-col my-4 rounded-lg bg-[#2B2C32] text-[#9C9D9E]">
          <div>
            <img
              src={Profe}
              className="w-full h-[200px] font-medium text-white rounded-t-lg"
            />
          </div>
          <div className="font-medium p-4">
            <p className="font-bold text-white mt-4">Inicio en agosto 2022</p>
            <p className="font-medium">Examen anticipado diciembre</p>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4 ">Correccion de proyectos practicos</p>
            </div>
            <div className="flex items-center">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className=" py-2 ml-4">Tutoria personalizada</p>
            </div>
            <div className="flex items-center py-2">
              <FaCheck size={15} className=" text-[#3C82E9]" />
              <p className="py-2 ml-4">¡Aprovecha 2 clases de prueba!</p>
            </div>
            <p className="mt-8 py-1 bg-[#393B43] rounded-full w-[200px] text-center">
              Modalidad 100% Online
            </p>
            <motion.button
              className="bg-[#0467fc] w-full text-white rounded-md font-medium my-6 px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              Ver Curso
            </motion.button>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1240px] mx-auto pt-2">
        <motion.button
          className=" bg-[#0467fc] w-[266px] mx-auto text-white rounded-md font-medium my-6 px-6 py-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          Ver mas Cursos
        </motion.button>
      </div>
    </div>
  );
};

export default Cards;
