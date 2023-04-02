import React from "react";
import classNames from "classnames";

const ImgReusable = (props) => {
  const classImgContainer = classNames(
    "w-[100%] flex flex-col justify-end flex-1 align-end px-6",
    props.widthImgContainer,
    props.alignImgContainer
    // props.heightImgContainer,
  );

  const classImg = classNames(
    "rounded-t-[20px]",
    props.widthImg,
    props.heightImg
  );

  return (
    <div className={classImgContainer}>
      <img src={props.img} className={classImg} />
    </div>
  );
};

export default ImgReusable;
