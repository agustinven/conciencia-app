import React from "react";
import classNames from "classnames";

export const TitlePresentation = ({ h1, p, bgColor }) => {
  const classStr = classNames(
    "text-5xl font-bold md:text-8xl",
    bgColor
  );

  return (
    <div className="flex flex-col text-center max-w-[1100px] mx-auto mb-16 md:mb-24">
      <h1 className={classStr}>{h1}</h1>
      <p className="text-xl font-regular mt-4 max-w-[300px] mx-auto text-white  md:max-w-[800px] md:text-3xl md:font-semibold">
        {p}
      </p>
    </div>
  );
};

