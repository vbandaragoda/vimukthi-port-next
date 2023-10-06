import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-white">
        <a href="/">vimukthi</a>
      </h1>

      <button
        onClick={toggleNav}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded={isNavOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        className={`${
          isNavOpen ? "block md:hidden" : "hidden md:block"
        } w-full md:w-auto`}
        id="navbar-default"
      >
        <ul className="flex flex-col items-start mb-6 text-sm font-medium dark:text-white md:flex-row md:mb-0">
          <li className="mb-3 md:mb-0 hover:underline md:mr-6">About</li>
          <li className="mb-3 md:mb-0 hover:underline md:mr-6">Services</li>
          <li className="mb-3 md:mb-0 hover:underline md:mr-6">Portfolio</li>
          <li className="hover:underline">Contact</li>
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
      </div>
    </nav>
  );
};

export default NavBar;
