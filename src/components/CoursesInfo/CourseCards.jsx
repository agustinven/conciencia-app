import React from "react";
import { Link } from "react-router-dom";

const CourseCards = ({
  discountPrice,
  features,
  financing_fees,
  id,
  modality,
  price,
  title_color,
  title,
}) => {
  return (
    <div className="bg-[#181B1E] rounded-[20px] w-full flex flex-col  text-white font-['Source_Sans_3'] border-solid border-2 border-[#545454]">
      <div className="p-6">
        {/*Title*/}
        <h1
          className="font-medium text-[44px] overflow-hidden"
          style={{ color: title_color }}
        >
          {title}
        </h1>
        <div className="mt-2 w-44 bg-[#2C323C] rounded-full p-[2px]">
          <p className="text-center">{modality}</p>
        </div>
        {/*Features section*/}
        <div className="py-10">
          <ul className="mb-10 flex flex-col gap-y-2 text-[#bebebe]">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <div className=" mr-3 h-[5px] w-[5px] rounded-full bg-[#bebebe]"></div>
                {feature}
              </li>
            ))}
          </ul>

          {/* Discount Price */}
          <div>
            <p className="text-[#7B7B7B]">
              Standard Plan{" "}
              <span className="line-through">{discountPrice}</span>
            </p>
            <div className="font-medium">
              <span>{financing_fees}</span>
            </div>
          </div>
          {/*Price*/}
          <p className="pt-2 font-normal text-5xl">{price}</p>
        </div>
        {/*Button*/}
        <button className="bg-[#FFFFFF] w-full text-[#151515] text-xl rounded-2xl py-3">
          <Link to={`/courses/${id}`}>Ver Más</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseCards;
