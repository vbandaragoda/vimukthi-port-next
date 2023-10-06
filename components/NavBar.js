import React, { useState } from "react";
import "./navbar.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar({ darkMode, toggleDarkMode }) {
  // const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={`py-10 mb-1 flex justify-between ${darkMode ? 'dark' : ''}`}>
      <h1 className="text-xl font-burtons dark:text-white">
        <a href="/">vimukthi</a>
      </h1>

      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        
      </ul>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={toggleDarkMode}
            className={`cursor-pointer text-2xl ${darkMode ? 'dark:text-white' : 'text-black'}`}
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
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
