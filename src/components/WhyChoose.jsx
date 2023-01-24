import React from "react";
import Guys1 from "../assets/images/guys1.jpg";
import Guys2 from "../assets/images/guys2.jpg";
import Guys3 from "../assets/images/guys3.jpg";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: -300 },
  hiddenText: { x: 300 },
  cardsAnimationOne: {
    x: 0,
    transition: { ease: "easeOut", duration: 1 },
  },
  cardsAnimationTwo: {
    x: 0,
    transition: { ease: "easeOut", duration: 1 },
  },
  cardsAnimationThree: {
    x: 0,
    transition: { ease: "easeOut", duration: 1 },
  },
  textAnimation: {
    x: 0,
    transition: { ease: "easeOut", duration: 2 },
  },
};

const WhyChoose = () => {
  return (
    <div className="w-full text-white py-16">
      <div className="flex justify-between max-w-[1240px] mx-auto">
        <div className="flex flex-col justify-center w-[500px]">
          {/* flex flex-row items-start */}
          <motion.img
            className="relative top-8 w-[300px] h-[280px] rounded-2xl shadow-[0_40px_40px_-20px_rgba(0,0,0,0.4)] bg-gray-200"
            initial={variants.hidden}
            whileInView={variants.cardsAnimationOne}
            viewport={{ once: true, amount: 1 }}
            // src={Guys2}
            alt="/"
          />
          <motion.img
            className="relative left-16 z-10 w-[300px] h-[280px] rounded-2xl shadow-[0_40px_40px_-20px_rgba(0,0,0,0.4)] bg-gray-200"
            initial={variants.hidden}
            whileInView={variants.cardsAnimationTwo}
            viewport={{ once: true, amount: 0.7 }}
            // src={Guys1}
            alt="/"
          />
          <motion.img
            className="relative bottom-8 z-0 w-[300px] h-[280px] rounded-2xl  shadow-[0_40px_40px_-20px_rgba(0,0,0,0.4)] bg-gray-200"
            initial={variants.hidden}
            whileInView={variants.cardsAnimationThree}
            viewport={{ once: true, amount: 0.3 }}
            // src={Guys3}
            alt="/"
          />
        </div>
        <motion.div
          initial={variants.hiddenText}
          whileInView={variants.textAnimation}
          viewport={{ once: true, amount: 0.6 }}
          className="max-w-[500px] py-36"
        >
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            ¿Por qué elegir a conciencia?
          </h1>
          <p className="text-[#3F8CFF] font-bold text-2xl pt-6">
            Screening tecnico
          </p>
          <p className="pt-1 text-lg">
            Evalua tus habilidades como desarrollador/a de software y descubre
            tu nivel tecnico. Skill upAcelera tus habilidades a traves de
            nuestros laboratorios de practica o cursos (100% remoto).
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold pt-6">
            Conciencia para empresas
          </h1>
          <p className="text-[#3F8CFF] font-bold text-2xl pt-6">
            Acceso a talento
          </p>
          <p className="pt-1 text-lg">
            Accede a los más de 1000 talentos listos para trabajar.
          </p>
          <p className="text-[#3F8CFF] font-bold text-2xl pt-6">
            Screening para seleccionar a los mejores
          </p>
          <p className="pt-1 text-lg">
            Utiliza el screening técnico de Alkemy para evaluar habilidades
            técnicas y diferenciar a tus aplicantes.
          </p>
          <p className="text-[#3F8CFF] font-bold text-2xl pt-6">Onboarding</p>
          <p className="pt-1 text-lg">
            Diseña junto al equipo de Alkemy la mejor experiencia de
            incorporación de talento.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;
