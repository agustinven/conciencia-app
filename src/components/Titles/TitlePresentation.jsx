import React from "react";
import classNames from "classnames";

const TitlePresentation = ({ h1, p, bgColor }) => {
  const classStr = classNames(
    "h-20 md:text-7xl sm:text-3xl text-2xl font-bold",
    bgColor
  );

  return (
    <div className="flex   text-center max-w-[1200px] mx-auto">
      <h1 className={classStr}>{h1}</h1>
      <p className="mt-6 text-5xl max-w-[800px] leading-tight mx-auto text-white">
        {p}
      </p>
    </div>
  );
};

export default TitlePresentation;
