import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div className="text-white font-['Source Sans 3'] font-medium text-md flex justify-between items-center px-20 h-14">
        <div className="font-bold">
          <p>Conciencia Academy</p>
        </div>
        <ul className="flex">
          <li className="">
            <a
              href=""
              className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
            >
              Home
            </a>
          </li>
          <li className="ml-12">
            <a
              href=""
              className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
            >
              Nosotros
            </a>
          </li>
          <li className="ml-12">
            <Link
              to={`/courses`}
              className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
            >
              Cursos
            </Link>
          </li>
          <li className="ml-12">
            <a
              href=""
              className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
            >
              Services
            </a>
          </li>
        </ul>
        {/* <div>
          <button className="w-[150px] h-10 bg-gradient-to-r from-[#0F97FF] to-[#9900FF] rounded-xl">
            Inicia Sesion
          </button>
        </div> */}
      </div>
    </>
  );
};
