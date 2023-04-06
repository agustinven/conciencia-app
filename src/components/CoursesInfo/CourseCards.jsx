import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import Discount from "./DiscountCourse";

const CourseCards = ({
  discount,
  title,
  features,
  price,
  modality,
  color,
  gradient,
  clipText,
}) => {
  return (
    <div className="bg-white border-[2px] rounded-[20px] w-full relative z-10 flex flex-col my-4 text-black font-bold">
      {/*Discount*/}
      <div
        className="w-[200px] rounded-r-xl mt-4 py-[4px] px-4 text-white font-bold"
        style={{ background: color, background: gradient }}
      >
        {discount}
      </div>
      <div className="m-4">
        {/*Title*/}
        <h1
          className="h-16 bg-gradient-to-r bg-clip-text text-transparent font-bold text-6xl"
          style={{ background: gradient }}
        >
          {title}
        </h1>
        <p className="text-[#7B7B7B] py-2">/ por seis meses</p>
        <div className="w-[350px] border border-[#7B7B7B] mx-auto"></div>
        {/*Features section*/}
        <div className="py-8">
          <ul className="mb-10 flex flex-col gap-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <FaCheck size={15} className=" text-[#544F52] mr-3 h-4 w-4" />
                {feature}
              </li>
            ))}
          </ul>
          {/*Price*/}
          <p className="pt-6 bg-gradient-to-r bg-clip-text text-transparent from-[#0088FF] to-[#00CCFF] font-bold text-5xl">
            {price}
          </p>
          <p className="py-1 mt-8 bg-[#F2EFEF] rounded-full w-[200px] text-center text-[#7B7B7B]">
            {modality}
          </p>
        </div>
        {/*Button*/}
        <motion.button
          className="bg-gradient-to-br from-[#0088FF] to-[#00CCFF] w-full text-white text-xl rounded-xl py-2"
          style={{ background: color, background: gradient }}
        >
          Ver más
        </motion.button>
      </div>
    </div>
  );
};

export default CourseCards;
