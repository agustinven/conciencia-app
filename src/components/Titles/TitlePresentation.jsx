import React from "react";
import classNames from "classnames";

const TitlePresentation = ({ h1, p, bgColor }) => {
  const classStr = classNames(
    "h-28 text-8xl font-bold mb-4",
    bgColor
  );

  return (
    <div className="mb-24 flex flex-col text-center max-w-[1200px] mx-auto ">
      <h1 className={classStr}>{h1}</h1>
      <p className="text-3xl font-regular max-w-[800px] mx-auto text-white">
        {p}
      </p>
    </div>
  );
};

export default TitlePresentation;
