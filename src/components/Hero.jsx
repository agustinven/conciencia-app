import React from "react";
import Typed from "react-typed";
// import "animate.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <div className=" flex flex-col justify-center max-w-[1240px] mx-auto mt-[-96px] h-screen text-center ">
        <p className="font-bold text-xl p-2 bg-gradient-to-r">
          LA MEJOR EDUCACION ONLINE A TU ALCANCE
        </p>
        <h1 className="md:text-7xl sm:text-4xl text-xl font-bold md:py-6 ">
          Todo lo que necesitás para aprobar
        </h1>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 animate__zoomInLeft">
            Encontrá
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 bg-gradient-to-r bg-clip-text  text-transparent 
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
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          Clases online en vivo dictadas por expertos de la industria, enfoque
          100% práctico, mentorías personalizadas y acceso a una comunidad de
          +180.000 estudiantes.
        </p>
        <motion.button
          className="bg-[#0467fc] w-[200px] rounded-md font-medium my-6 mx-auto py-4 "
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
