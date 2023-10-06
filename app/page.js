"use client";
import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TestNav from "@/components/TestNav";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
          <TestNav />
          {/* <NavBar /> */}
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
