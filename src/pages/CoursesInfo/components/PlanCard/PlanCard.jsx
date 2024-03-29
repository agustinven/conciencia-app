import React from "react";
import { CheckGreen, CloseRed } from "../../../../assets";

export const PlanCard = ({
  title,
  price,
  financed_price,
  features,
  isGold,
}) => {
  return (
    <div
      className={`bg-[#2B2C32] text-white rounded-[20px] mx-auto w-full md:w-[500px] p-6 md:p-8 ${
        isGold ? "border-[#2273FF] border" : ""
      }`}
    >
      <h2 className="text-xl md:text-3xl font-semibold">{title}</h2>
      <div className="py-6 text-md md:text-xl text-white">
        <p className="mb-1">hasta 3 cuotas sin interes de </p>
        <p className="text-5xl md:text-6xl font-semibold">{financed_price}</p>
        <p className="mt-3">{`Precio final ${price}`}</p>
      </div>

      <div className="">
  <ul className="md:mt-2 list-disc list-inside text-md md:text-xl">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start py-2 md:py-4 gap-4">
        {feature.available ? (
          <img
            src={CheckGreen}
            alt="check green icon"
            className="w-[25px] md:w-[34px]"
          />
        ) : (
          <img
            src={CloseRed}
            alt="close red icon"
            className="w-[25px] md:w-[34px]"
          />
        )}
        {feature.name}
      </li>
    ))}
  </ul>
</div>
      <div className="pt-6 md:pt-14">
        <button className="block mx-auto p-2 bg-[#007FFF] rounded-full text-2xl font-medium w-full md:w-[300px]">
          Ver más
        </button>
      </div>
    </div>
  );
};
