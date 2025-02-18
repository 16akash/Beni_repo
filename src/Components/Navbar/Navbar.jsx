import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    openMenu(!menu);
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-between px-10 py-6 mb-4">
      {/* Logo with GIF */}
      <img
        src="/assets/logo.gif" // Path to your GIF file
        alt="Logo"
        className="h-12 w-12 rounded-md"
      />

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 mt-4 font-semibold text-white bg-opacity-60 md:mt-0 md:bg-transparent md:flex gap-8 transition-all duration-300 ease-in-out`}
      >
        <li className="text-lg hover:text-gray-200 transition-all duration-300">
          <a href="#About">About</a>
        </li>
        <li className="text-lg hover:text-gray-200 transition-all duration-300">
          <a href="#Experience">Experience</a>
        </li>
        <li className="text-lg hover:text-gray-200 transition-all duration-300">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-lg hover:text-gray-200 transition-all duration-300">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="text-white md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="text-white md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
