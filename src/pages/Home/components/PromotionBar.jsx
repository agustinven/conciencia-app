import React from "react";
import classNames from "classnames";

const PromotionBar = (props) => {
  const classStr = classNames(
    "text-white text-sm font-bold text-center py-1",
    props.bgColor
  );

  return (
    <div className="w-full">
      <p className={classStr}>
        <span className="text-[#E2C7FF]">{props.span} </span>
        {props.p}
      </p>
    </div>
  );
};

export default PromotionBar;
