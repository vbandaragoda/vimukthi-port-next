import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-white">
        <a href="/">vimukthi</a>
      </h1>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium dark:text-white">
        <li className="hover:underline md:mr-6">About</li>
        <li className="hover:underline md:mr-6">Services</li>
        <li className="hover:underline md:mr-6">Portfolio</li>
        <li className="hover:underline md:mr-6">Contact</li>
      </ul>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl dark:text-white"
          />
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1mYu3gi8OIWL9xb2_UMhZNHTu1b-0hjyh/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
