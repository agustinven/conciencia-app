import React from "react";
import classNames from "classnames";

const TitlePresentation = (props) => {
  const classStr = classNames(
    "h-20 md:text-7xl sm:text-3xl text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent animate-text",
    props.bgColor
  );

  return (
    <div className="flex flex-col text-center max-w-[1400px] mx-auto">
      <h1 className={classStr}>{props.h1}</h1>
      <p className="mt-6 text-5xl max-w-[800px] leading-tight mx-auto">
        {props.p}
      </p>
    </div>
  );
};

export default TitlePresentation;
