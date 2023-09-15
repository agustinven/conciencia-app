import React from "react";
import CourseCards from "./CourseCards";
import * as comp from "../../components";
import { coursesPrincipalInfo } from "../../data/courseInfoPrincipal";

const Cards = () => {
  const primerosCuatroValores = coursesPrincipalInfo.slice(0, 4);

  return (
    <div className="px-6 pb-36 md:pb-48">
      <comp.TitlePresentation
        h1="Explora nuestros cursos"
        p="Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!"
        bgColor="text-[#14D990]"
      />
      <div className="flex justify-center items-center">
        <div className="max-sm:carousel max-sm:carousel-center space-x-4 max-sm:max-w-sm relative  md:space-x-0 md:w-[1300px] md:mx-auto md:grid md:grid-cols-4 md:gap-[10px]">
          {/* First Cards */}
          {primerosCuatroValores.map((courses) => (
            <CourseCards key={courses.id} {...courses} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
