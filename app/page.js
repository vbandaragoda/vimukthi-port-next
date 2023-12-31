"use client";
import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <About />
          <Services />
          <Portfolio />
          <ContactForm />

          <Footer />
        </main>
      </div>
    </>
  );
}
