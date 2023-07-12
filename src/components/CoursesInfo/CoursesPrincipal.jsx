import React from "react";
import CourseCards from "./CourseCards";
import { TitlePresentation } from "../Titles";
import { coursesPrincipalInfo } from "../../data/courseInfoPrincipal";

const Cards = () => {
  return (
    <div className="w-full mt-36">
      <TitlePresentation
        h1="Explora nuestros cursos"
        p="Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!"
        bgColor="text-[#14D990]"
      />
      <div className="relative max-w-[1500px] mx-auto mt-[100px] grid md:grid-cols-4 gap-6">
        {/* First Cards */}

        {coursesPrincipalInfo.map((courses) => (
          <CourseCards key={courses.id} {...courses} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
