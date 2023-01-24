import React from "react";
import People from "../assets/images/people.jpg";
import People2 from "../assets/images/people2.jpg";
import People3 from "../assets/images/people3.jpg";
import People4 from "../assets/images/people4.jpg";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="w-full  ">
      <div className="max-w-[1240px] border-t-2 border-[#2E2F36] mx-auto text-center pb-16 ">
        <h1
          className="text-2xl font-bold md:text-6xl sm:text-3xl pt-12 bg-gradient-to-r bg-clip-text  text-transparent 
            from-fuchsia-500 via-violet-500 to-fuchsia-500 animate-text"
        >
          De la comunidad de conciencia
        </h1>
        <h2 className="text-2xl font-bold md:text-3xl sm:text-3xl pt-4 pb-8 text-[#ffff]">
          Cientos de estudiantes ya aprenden en conciencia
        </h2>
        <div className="max-w-[1240px] mx-auto flex items gap-8 text-white">
          {/* First Card */}
          <motion.div className="w-full p-8 shadow-xl my-4 rounded-lg bg-[#2B2C32]">
            <div>
              <img
                src={People}
                className="rounded-full w-[110px] h-[110px] mx-auto"
              />
              <p className="pt-4">Fabian Mendez</p>
              <p className="pb-4">Bioquimico UNC</p>
              <div className="border border-[#3F8CFF] w-[100px] mx-auto"></div>
              <p className="pt-6">
                'No solo mi currículum luce impresionante, repleto de nombres y
                logotipos de instituciones de nivel mundial, sino que estos
                certificados también me acercan a mis objetivos profesionales al
                validar las habilidades que he aprendido'.
              </p>
            </div>
          </motion.div>

          {/* Second Card */}
          <div className="w-full p-8 shadow-xl my-4 rounded-lg bg-[#222429]">
            <img
              src={People3}
              className="rounded-full w-[110px] h-[110px] mx-auto"
            />
            <p className="pt-4">Florencia Vega</p>
            <p className="pb-2">Farmaceutica UNC</p>
            <div className="border border-[#3F8CFF] w-[100px] mx-auto"></div>
            <p className="pt-4">
              'Ingresar en el mundo de la TI siempre fue inalcanzable, porque o
              tenía el tiempo pero no el dinero, o tenía el dinero pero no el
              tiempo. Cuando descubrí el Certificado profesional en Soporte de
              TI de Google, supe que esta era mi puerta de entrada. Este es mi
              camino. Así es como puedo llegar a la TI'.
            </p>
          </div>

          {/* Third Card */}
          <div className="w-full p-8 shadow-xl my-4 rounded-lg bg-[#222429]">
            <img
              src={People2}
              className="rounded-full w-[110px] h-[110px] mx-auto"
            />
            <p className="pt-4">Fabian Mendez</p>
            <p className="pb-2">Lic.Quimica UCC</p>
            <div className="border border-[#3F8CFF] w-[100px] mx-auto"></div>
            <p className="pt-4">
              'Conciencia me permitió ingresar en el mundo de la inteligencia
              artificial y ahora ya no puedo alejarme de él. Estudio Medicina y
              me dedico a analizar cómo se puede utilizar la inteligencia
              artificial para solucionar problemas de salud en África
              Occidental. Hasta el momento, he realizado 5 cursos relacionados
              con la IA y un curso de escritura'.
            </p>
          </div>

          {/* <div className="w-full p-8 shadow-xl flex flex-col my-4 rounded-lg bg-[#222429] text-[#9C9D9E]">
            <img
              src={People4}
              className="rounded-full w-[140px] h-[140px] mx-auto"
            />
            <p className="pt-4">Fabian Mendez</p>
            <p className="pb-2">Lic.Quimica UCC</p>
            <div className="border border-[#3F8CFF] w-[100px] mx-auto"></div>
            <p className="pt-4">
              'Conciencia me permitió ingresar en el mundo de la inteligencia
              artificial y ahora ya no puedo alejarme de él. Estudio Medicina y
              me dedico a analizar cómo se puede utilizar la inteligencia
              artificial para solucionar problemas de salud en África
              Occidental. Hasta el momento, he realizado 5 cursos relacionados
              con la IA y un curso de escritura'.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Community;
