import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "project" },

    { id: 5, link: "contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div>
        <h1 className="text-3xl font-signature ml-2">Ketki Shinde</h1>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-[#00E8F8] hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className="hidden md:flex bg-[#00E8F8] text-black px-4 py-2 rounded-lg hover:bg-[#00cccc] transition-colors duration-300 text-sm font-medium">
        Download CV
      </button>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-300">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <li className="py-6">
            <button className="bg-[#00E8F8] text-black px-4 py-2 rounded-lg hover:bg-[#00cccc] transition-colors duration-300 text-sm font-medium">
              Download CV
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
