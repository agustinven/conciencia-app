import React from "react";
import Logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className=" text-white flex justify-between items-center max-w-[100%] h-24 mx-auto px-16 ">
      <img className="w-20" src={Logo} />
      <ul className="flex mr-[55%]">
        <li className="p-4">
          <a
            href=""
            className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
          >
            Home
          </a>
        </li>
        <li className="p-4">
          <a
            href=""
            className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
          >
            Nosotros
          </a>
        </li>
        <li className="p-4">
          <a
            href=""
            className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
          >
            Cursos
          </a>
        </li>
        <li className="p-4">
          <a
            href=""
            className="border-b-2 border-double border-transparent hover:border-current hover:border-violet-500"
          >
            Services
          </a>
        </li>
      </ul>
      <div className="flex w-[300px]">
        <button className="w-[200px] mr-4 h-12  bg-fuchsia-500 rounded-md">
          Inicia Sesion
        </button>
        <button className="w-[200px] h-12 bg-violet-500 rounded-md">
          Registrate
        </button>
      </div>
    </div>
  );
};

export default NavBar;
