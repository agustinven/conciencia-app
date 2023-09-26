import * as comp from "../../../../components";
import { Book, Date, Pc } from "../../../../assets";
import { useParams } from "react-router-dom";
import { studyPlanInfo } from "../../../../data/studyPlanInfo";
import { getColor } from "../../../../utils/getColorFunction";
import { getTitleColor } from "../../../../utils/getTitleColor";

const StudyPlan = () => {
  const { id } = useParams();

  const studyPlanInfoData = studyPlanInfo[id];

  const color = getColor(id);
  const titleColor = getTitleColor(id);

  return (
    <div className="max-w-[1200px] mx-auto pb-36 md:pb-48">
      <comp.TitlePresentation
        h1="Conoce nuestro plan de estudio"
        p="Una ruta de aprendizaje ideal para ti, te ayudamos a definirla según tus objetivos."
        bgColor={`${titleColor}`}
      />
      <div className="">
        <div className="text-white mx-8 md:mx-0 text-2xl md:text-5xl font-semibold">
          <p>Contenido:</p>
        </div>
        <div className="text-white flex flex-col md:flex-row items-center gap-6 md:items-stretch mx-6 md:justify-between py-8">
          <div className="w-full md:w-[600px] bg-[#23282E] rounded-xl relative">
            <div
              className={`absolute top-[10px] left-[10px] w-full h-full ${color} -z-10 rounded-xl`}
            ></div>
            <div className="p-3 bg-[#23282E] rounded-xl py-8 px-6">
              <div>
                <ol className="text-xl md:text-3xl tracking-wider space-y-8">
                  {studyPlanInfoData.topics.map((topic, index) => (
                    <li
                      key={index}
                      className={`border-b ${
                        index === studyPlanInfoData.topics.length - 1
                          ? "border-none"
                          : "border-[#0C0B0B] pb-2"
                      }`}
                    >
                      {`Tema ${index + 1}: ${topic}`}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 px-6 justify-center gap-10 w-full md:w-[450px] bg-[#23282E] rounded-xl relative">
            <div
              className={`absolute top-[10px] right-[10px] w-full h-full ${color} -z-10 rounded-xl`}
            ></div>
            <div className="bg-[#474C54] mx-auto w-full rounded-full p-2 md:p-3 text-lg md:text-xl text-center font-medium">
              <p>Modalidad 100% online</p>
            </div>
            <div className="mx-auto">
              <div className="flex  flex-col gap-8">
                <div className="flex items-center gap-14">
                  <img src={Date} alt="Date icon" className="w-12 h-11" />

                  <div className="flex flex-col">
                    <p className="text-lg font-bold">Duracion</p>
                    <p className="text-lg">{studyPlanInfoData.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-14">
                  <img src={Pc} alt="Pc icon" className="w-12 h-11" />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">Dedicacion</p>
                    <p className="text-lg">{studyPlanInfoData.dedication}</p>
                  </div>
                </div>
                <div className="flex items-center gap-14">
                  <img src={Book} alt="Book icon" className="w-12 h-11" />
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">Modalidad</p>
                    <p className="text-lg">{studyPlanInfoData.modality}</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`${color} p-2 md:p-3 mx-auto block rounded-full w-full font-medium text-xl md:text-2xl`}
            >
              Descargar programa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
