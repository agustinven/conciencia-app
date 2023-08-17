import classNames from "classnames";
import React from "react";

const CardGridText = ({ title, content }) => {
  return (
    <div className="max-h-[40%] p-6 flex flex-col gap-2 font-['Source_Sans_3']">
      <div className="font-medium text-3xl text-[#13161C]">
        <h3>{title}</h3>
      </div>
      <div className="max-w-[500px] font-normal text-xl text-[#1C2028]">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardGridText;
