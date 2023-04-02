import React from "react";
import Typed from "react-typed";
// import "animate.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-b from-[#000428] to-[#091370]">
      <div className=" flex flex-col justify-center max-w-[1400px] mx-auto h-screen text-center ">
        <h1 className="md:text-7xl sm:text-4xl text-xl font-bold md:py-6 ">
          Todo lo que necesitás para aprobar
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-7xl sm:text-4xl text-xl font-bold animate__zoomInLeft">
            Encontrá
            <Typed
              className="md:text-7xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-gradient-to-r bg-clip-text  text-transparent 
            from-fuchsia-500 via-violet-500 to-fuchsia-500
            animate-text"
              strings={["apuntes", "exámenes", "cursos"]}
              typeSpeed={120}
              backSpeedO={140}
              loop
            />{" "}
            virtuales de tu carrera
          </p>
        </div>
        <p className="md:text-2xl py-4 text-xl font-bold text-[#A9A9A9] ">
          Clases online en vivo dictadas por expertos de la industria, enfoque
          100% práctico, mentorías personalizadas y acceso a una comunidad de
          +180.000 estudiantes.
        </p>
        <motion.button
          className="bg-gradient-to-r from-[#0F97FF] to-[#9900FF] rounded-xl w-[200px] text-lg font-bold my-6 mx-auto py-4 "
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          Ver todos los cursos
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
