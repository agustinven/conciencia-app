import classNames from "classnames";
import React from "react";

const CardGridText = (props) => {
  const classTitle = classNames(" font-bold text-3xl", props.textColorOne);

  const classContent = classNames(
    "max-w-[500px] font-bold text-3xl",
    props.textColorTwo,
    props.textOpacity
  );

  return (
    <div className="max-h-[40%] p-6 flex flex-col gap-2">
      <div className={classTitle}>
        <h3>{props.title}</h3>
      </div>
      <div className={classContent}>
        <h3>{props.content}</h3>
      </div>
    </div>
  );
};

export default CardGridText;
