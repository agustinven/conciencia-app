import React from "react";
// import Logo from "../../assets";

const NavBar = () => {
  return (
    <div className="bg-black">
      <div className="text-white font-bold text-md flex justify-between items-center max-w-[1400px] mx-auto h-20">
        {/* <img className="w-12" src={Logo} /> */}
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
            <a
              href=""
              className="border-b-2 border-double border-transparent hover:border-current hover:border-fuchsia-500"
            >
              Cursos
            </a>
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
        <div>
          <button className="w-[150px] h-10 bg-gradient-to-r from-[#0F97FF] to-[#9900FF] rounded-xl">
            Inicia Sesion
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
