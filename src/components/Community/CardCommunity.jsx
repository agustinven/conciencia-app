import React from "react";

const CardCommunity = ({ opinion, img, name, career }) => {
  return (
    <div className="flex flex-col justify-between relative w-full h-[280px] p-8 shadow-xl rounded-3xl bg-[#2B2C32]">
      <div>
        <p className="pt-6">{opinion}</p>
      </div>
      <div className="flex justify-around w-[250px] mx-auto">
        <img src={img} className="w-[60px]" />
        <div className="flex flex-col justify-center">
          <p>{name}</p>
          <p>{career}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCommunity;
