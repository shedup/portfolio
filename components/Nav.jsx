import React from "react";

const Nav = () => {
  return (
    <div className="pt-12 font-bold">
      <nav className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl container mx-auto justify-between">
        <a className="pl-9 text-sm sm:text-lg md:text-2xl" href="/">
          Shedup
        </a>
        <div className="space-x-4 pr-12 text-sm sm:space-x-36 sm:text-lg md:text-2xl ">
          <a className="hover:underline" href="/">
            Home
          </a>
          <a className="hover:underline" href="#about-section">
            About
          </a>
          <a className="hover:underline" href="#projects-section">
            Projects
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
