import React from "react";
import CourseCards from "./CourseCards";
import * as comp from "../../components"
import { coursesPrincipalInfo } from "../../data/courseInfoPrincipal";

const Cards = () => {
  const primerosCuatroValores = coursesPrincipalInfo.slice(0, 4);

  return (
    <div className="w-full mb-48">
      <comp.TitlePresentation
        h1="Explora nuestros cursos"
        p="Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!"
        bgColor="text-[#14D990]"
      />
      <div className="carousel carousel-center max-w-sm p-4 space-x-4 rounded-box relative md:max-w-[1300px] mx-auto md:grid md:grid-cols-4 md:gap-[10px]">
        {/* First Cards */}
        {primerosCuatroValores.map((courses) => (
          <CourseCards key={courses.id} {...courses} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
