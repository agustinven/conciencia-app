import { useState } from "react";
import * as comp from "../../components"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const FaqSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questionsAndAnswers = [
    {
      id: 1,
      question: "¿Como es la modalidad de cursada?",
      answer:
        "Actualmente podés cursar: a) Online en vivo: vas a tener 2 clases en vivo por semana. b) Modalidad CoderFlex: vas a tener 1 clase en vivo y vas a tener disponible el contenido teórico en videos, desafíos y actividades gamificadas, para que aprendas en el momento que quieras. Por el momento, esta modalidad está disponible solo para algunos cursos. Todos nuestros cursos cuentan con profesores y tutores que te van a ayudar a resolver tus dudas teóricas o sobre los desafíos que tenés que entregar.",
    },
    {
      id: 2,
      question: "¿Cuales son los medios de pago?",
      answer:
        "Podés pagar con tarjeta de crédito o débito a través de Mercado Pago, con dinero en cuenta de Mercado Pago o hacer una transferencia bancaria.",
    },
    {
      id: 3,
      question: "¿Que validez tienen los cursos y carreras?",
      answer:
        "Los programas de cada uno de los cursos y carreras de conciencia son cocreados con empresas líderes en innovación de Latinoamérica como Bitso, Endeavor, Tiendanube, Pedidos Ya, Aerolab, R/GA, Digifianz, entre otras. Esto nos permite tener nuestros contenidos actualizados y avalados por referentes de la industria.",
    },
    {
      id: 4,
      question: "¿Quienes seran mis docentes?",
      answer:
        "Los programas de cada uno de los cursos y carreras de conciencia son cocreados con empresas líderes en innovación de Latinoamérica como Bitso, Endeavor, Tiendanube, Pedidos Ya, Aerolab, R/GA, Digifianz, entre otras. Esto nos permite tener nuestros contenidos actualizados y avalados por referentes de la industria.",
    },
  ];

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <comp.TitlePresentation h1={"Preguntas frecuentes"} bgColor="text-[#7F43FF]" />
      <div className="max-w-[800px]  rounded-3xl mb-48 p-2">
        {questionsAndAnswers.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col text-white font-normal text-3xl font-['Source_Sans_3'] p-2"
          >
            
            <button
              className={`flex justify-between items-center w-full text-left py-2 px-4`}
              onClick={() => toggleQuestion(item.id)}
            >
              {item.question}
              {activeQuestion === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>

            {activeQuestion === item.id && (
              <div className="p-4 text-[#bebebe] text-2xl">{item.answer} </div>
            )}
            {index !== questionsAndAnswers.length - 0 && (
            <div className="border-b my-2"></div>
          )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
