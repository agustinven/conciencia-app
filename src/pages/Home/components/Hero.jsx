import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white bg-[#13161C] font-['Inter'] pb-28">
      <div className="flex flex-col break-words justify-center max-w-[300px] mx-auto md:max-w-[1400px] h-screen md:text-center">
        <h1 className="md:text-6xl py-6 text-5xl font-[Inter] font-bold">
          Todo lo que necesitás para aprobar
        </h1>
        <div className="md:child:inline text-5xl font-[Inter] font-bold animate__zoomInLeft md:text-6xl">
          <p>Encontrá</p>
          <Typed
            className="text-5xl font-bold md:pl-4 bg-[#DC62FB] bg-clip-text  text-transparent animate-text md:text-6xl"
            strings={["cursos", "apuntes", "examenes"]}
            typeSpeed={120}
            backSpeedO={140}
            loop
          />
          {""}
          <p className="">virtuales</p>
          <p>de tu carrera</p>
        </div>
        <div className="mx-auto">
          <p className="max-w-[900px] py-8 text-xl font-regular text-white md:text-center md:text-2xl">
            Clases online en vivo dictadas por expertos de la industria, enfoque
            100% práctico, mentorías personalizadas y acceso a una comunidad de
            +180.000 estudiantes.
          </p>
        </div>
        <motion.button
          className="bg-[#1087FF] rounded-xl w-full text-lg font-bold mx-auto py-4 md:w-[200px] md:mt-6"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link to={`courses`}>Ver cursos</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
