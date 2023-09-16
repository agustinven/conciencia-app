import React from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

export const NavBar = () => {
  return (
    <>
      <div className="p-4 text-white">
        <div className="navbar-start w-full flex justify-between lg:hidden">
          <div className="dropdown">
            <TiThMenu className="h-5 w-5 mt-1" tabIndex={0} />
            <ul
              tabIndex={0}
              className="flex flex-col items-center menu dropdown-content mt-3 z-[1] shadow w-[200px] rounded-lg text-lg font-medium bg-[#2B2C32]"
            >
              <li className="py-1 border-b border-gray-300 w-full">
                <a
                  href=""
                  className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
                >
                  Home
                </a>
              </li>
              <li className="py-1 border-b border-gray-300 w-full">
                <a
                  href=""
                  className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
                >
                  Nosotros
                </a>
              </li>
              <li className="py-1 border-b border-gray-300 w-full">
                <Link
                  to={`/courses`}
                  className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
                >
                  Cursos
                </Link>
              </li>
              <li className="py-1 w-full">
                <a
                  href=""
                  className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>
          <a className=" normal-case text-md font-medium">Conciencia Academy</a>
        </div>

        <div className="navbar-center hidden lg:flex lg:justify-around">
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
        </div>
      </div>
    </>
  );
};
