import classNames from "classnames";
import React from "react";

const CardGridText = ({ title, content, textColorOne }) => {
  const classTitle = classNames(" font-bold text-3xl", textColorOne);

  const classContent = classNames("max-w-[500px] font-bold text-xl text-white");

  return (
    <div className="max-h-[40%] p-6 flex flex-col gap-2">
      <div className={classTitle}>
        <h3>{title}</h3>
      </div>
      <div className={classContent}>
        <h3>{content}</h3>
      </div>
    </div>
  );
};

export default CardGridText;
