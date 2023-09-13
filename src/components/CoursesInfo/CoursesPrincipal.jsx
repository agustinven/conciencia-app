import React from "react";
import CourseCards from "./CourseCards";
import * as comp from "../../components";
import { coursesPrincipalInfo } from "../../data/courseInfoPrincipal";
import { Carousel, IconButton } from "@material-tailwind/react";

const Cards = () => {
  const primerosCuatroValores = coursesPrincipalInfo.slice(0, 4);

  return (
    <div className="w-full mb-48">
      <comp.TitlePresentation
        h1="Explora nuestros cursos"
        p="Aprende y desarrolla las habilidades que necesitas para potenciar tu profesión, ¡toma las primeras clases del curso que tú elijas sin costo!"
        bgColor="text-[#14D990]"
      />
      <div className="relative mx-6 max-w-[1300px] grid gap-[10px] md:grid-cols-4">
        <Carousel
          className="rounded-xl"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {/* First Cards */}
          {primerosCuatroValores.map((courses) => (
            <CourseCards key={courses.id} {...courses} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Cards;
