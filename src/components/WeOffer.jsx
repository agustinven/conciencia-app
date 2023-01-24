import React from "react";
import { useRef } from "react";
import Study1 from "../assets/images/studySvg1.jpg";
import Study2 from "../assets/images/studySvg2.jpg";
import Study3 from "../assets/images/studySvg3.jpg";
// import "animate.css";
import { motion } from "framer-motion";

const WeOffer = () => {
  const variants = {
    hidden: { opacity: 0 },
    animationCircle: {
      opacity: [1],
      scale: [0, 1.1, 1.3, 1, 1],
      rotate: [0, 0, 360, 360, 360],
      borderRadius: ["0%", "0%", "50%", "50%", "10%"],
      transition: {
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    },
  };

  return (
    <div className="w-full py-16 px-4  text-white">
      <div className="flex flex-col text-center">
        <h1
          className="md:text-6xl sm:text-3xl text-2xl font-bold bg-gradient-to-r bg-clip-text  text-transparent 
            from-fuchsia-500 via-violet-500 to-fuchsia-500 animate-text"
        >
          Te ofrecemos
        </h1>
        <p className="pt-6 text-2xl">
          Cursos efectivos en 21 areas de estudio mas demandadas en el mercado
          laboral.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <div className="flex justify-between flex-wrap content-between py-12">
          <div>
            <motion.img
              className="w-[200px] h-[200px] bg-gray-300"
              initial={variants.hidden}
              whileInView={variants.animationCircle}
              viewport={{ once: true, amount: 1 }}
              src={Study1}
              alt="/"
            />

            <p className="max-w-[200px] text-center py-4">
              Preparate con{" "}
              <span className="text-[#3F8CFF] font-bold">+15.000</span> exámenes
              reales de tu universidad
            </p>
          </div>

          <div>
            <motion.img
              className="w-[200px] h-[200px] bg-gray-300"
              initial={variants.hidden}
              whileInView={variants.animationCircle}
              viewport={{ once: true, amount: 1 }}
              src={Study2}
              alt="/"
            />
            <p className="max-w-[200px] text-center py-4">
              Preparate con{" "}
              <span className="text-[#3F8CFF] font-bold">+15.000</span> exámenes
              reales de tu universidad
            </p>
          </div>

          <div className="">
            <motion.img
              className="w-[200px] h-[200px] bg-gray-300"
              initial={variants.hidden}
              whileInView={variants.animationCircle}
              viewport={{ once: true, amount: 1 }}
              src={Study3}
              alt="/"
            />
            <p className="max-w-[200px] text-center py-4">
              Preparate con{" "}
              <span className="text-[#3F8CFF] font-bold">+15.000</span> exámenes
              reales de tu universidad
            </p>
          </div>

          <div className="">
            <motion.img
              className="w-[200px] h-[200px] bg-gray-300"
              initial={variants.hidden}
              whileInView={variants.animationCircle}
              viewport={{ once: true, amount: 1 }}
              src={Study3}
              alt="/"
            />
            <p className="max-w-[200px] text-center py-4">
              Preparate con{" "}
              <span className="text-[#3F8CFF] font-bold">+15.000</span> exámenes
              reales de tu universidad
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffer;
