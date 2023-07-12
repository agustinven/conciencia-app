import React from "react";
import Typed from "react-typed";
import { RectangleOne } from "../../../assets/";
import { RectangleTwo } from "../../../assets/";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-white bg-[#070707]">
      <div className=" flex flex-col justify-center max-w-[1400px] mx-auto h-screen text-center ">
        <h1 className="md:text-6xl sm:text-4xl text-xl font-[Inter] font-bold md:py-6 ">
          Todo lo que necesitás para aprobar
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-6xl sm:text-4xl text-xl font-[Inter] font-bold animate__zoomInLeft">
            Encontrá
            <Typed
              className="md:text-6xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-[#DC62FB] bg-clip-text  text-transparent animate-text"
              strings={["cursos", "apuntes", "examenes"]}
              typeSpeed={120}
              backSpeedO={140}
              loop
            />
            {""}
            virtuales de tu carrera
          </p>
        </div>
        <p className="md:text-2xl py-8 text-xl font-bold text-white">
          Clases online en vivo dictadas por expertos de la industria, enfoque
          100% práctico, mentorías personalizadas y acceso a una comunidad de
          +180.000 estudiantes.
        </p>
        <motion.button
          className="bg-[#176CFF] rounded-xl w-[200px] text-lg font-bold my-6 mx-auto py-4 "
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Link to={`courses`}>Ver todos los cursos</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
