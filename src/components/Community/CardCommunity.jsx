import React from "react";

const CardCommunity = ({ opinion, img, name, career }) => {
  return (
    <div className="flex flex-col justify-between relative p-4 shadow-xl rounded-3xl bg-[#2B2C32] text-white font-['Source_Sans_3']  md:p-8 ">
      <div className="max-w-[300px]">
        <p className="mb-10">{opinion}</p>
      </div>
      <div className="flex justify-around w-[250px] mx-auto">
        <img src={img} className="w-[50px] md:w-[60px]" />
        <div className="flex flex-col justify-center text-left">
          <p>{name}</p>
          <p>{career}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCommunity;
