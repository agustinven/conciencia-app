import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCards = ({
  id,
  discount,
  title,
  features,
  discountPrice,
  price,
  modality,
  discountBarColor,
}) => {
  return (
    <div className="bg-[#2B2C32] rounded-[20px] w-full relative z-10 flex flex-col my-4 text-white font-bold font-['Source_Sans_3']">
      {/*Discount*/}
      <div
        className="w-full text-center rounded-t-xl py-[4px] px-4 text-white font-bold "
        style={{ backgroundColor: discountBarColor }}
      >
        {discount}
      </div>
      <div className="m-4">
        {/*Title*/}
        <h1 className="h-16 font-bold font-['Inter'] text-5xl overflow-hidden	">
          {title}
        </h1>
        <p className="py-2">/ por seis meses</p>
        <div className="border border-[#7B7B7B] "></div>
        {/*Features section*/}
        <div className="py-10">
          <ul className="mb-10 flex flex-col gap-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <FaCheck size={15} className=" text-[#544F52] mr-3 h-4 w-4" />
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
          </div>
          {/*Price*/}
          <p className="pt-2 font-bold text-5xl">{price}</p>
          <p className="py-1 mt-8 w-[200px] text-center">{modality}</p>
        </div>
        {/*Button*/}
        <button className="bg-[#393B43] w-full text-[#14D990] text-xl rounded-2xl py-3">
          <Link to={`/courses/${id}`}>Ver Más</Link>
        </button>
      </div>
    </div>
  );
};

export default CourseCards;
