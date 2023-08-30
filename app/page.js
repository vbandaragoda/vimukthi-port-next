"use client";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image1 from "../public/Image1.jpg";
import Image2 from "../public/Image2.jpg";
import Image3 from "../public/Image3.jpg";
import Image4 from "../public/Image4.jpg";
import Image5 from "../public/Image5.jpg";
import Image6 from "../public/Image6.jpg";
import Logo from "../public/logo.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
          <section id="about" className="min-h-screen">
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
            <div className="text-center p-1">
              <div className="mx-auto rounded-full w-80 h-80 mt-10 mb-10 bg-center sm:bg-center md:h-50 md:w-50 bg-[url('/pic.jpg')] bg-cover"></div>
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Vimukthi Bandaragoda
              </h2>

              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                <span className="hidden md:inline">
                  Designer - Developer - Photographer
                </span>
                <span className="md:hidden">
                  Designer
                  <br />
                  Developer
                  <br />
                  Photographer
                </span>
              </h3>

              <p className="text-m py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
                Im a Freelancer providing services for developing and design
                content needs. Join me down below and lets get cracking!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <a href="#">
                  <AiFillLinkedin />
                </a>
                <a href="#">
                  <AiFillTwitterCircle />
                </a>
                <a href="#">
                  <AiFillBehanceCircle />
                </a>
              </div>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="mt-14">
            <div>
              <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
                Im a UI/UX designer, photographer, and WordPress developer with
                2 years of experience. I possess a keen eye for detail and a
                deep understanding of user-centric design principles. I excel at
                crafting intuitive interfaces, capturing captivating moments
                through photography, and building customized and responsive
                WordPress websites. My multidisciplinary approach, attention to
                detail, and dedication to delivering high-quality results make
                me a valuable asset for any project.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
                I offer a wide range of services, including brand design, social
                media marketing, and photography.
              </p>
            </div>

            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
                <Image
                  className="inline-block"
                  src={design}
                  width={100}
                  height={100}
                  alt="Mobile and Web Designs"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Mobile and Web Designs
                </h3>
                <p>Creating elegant designs suited for your needs.</p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Adobe Xd</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
                <Image
                  className="inline-block"
                  src={consulting}
                  width={100}
                  height={100}
                  alt="Capturing captivating moments"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Capture your life event
                </h3>
                <p className="py-2">
                  Capturing captivating moments, crafting visual stories that
                  resonate.
                </p>
                <h4 className="py-4 text-teal-600">Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Lightroom</p>
                <p className="text-gray-800 py-1">Premire Pro</p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-100">
                <Image
                  className="inline-block"
                  src={code}
                  width={100}
                  height={100}
                  alt="WordPress"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Web development
                </h3>
                <p className="py-2">
                  Crafting responsive WordPress websites for seamless digital
                  experiences.
                </p>
                <h4 className="py-4 text-teal-600">Tools I Use</h4>
                <p className="text-gray-800 py-1">WordPress</p>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section id="portfolio">
            <div>
              <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                My Work
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
                My portfolio showcases my expertise in UI/UX design, captivating
                photography, and WordPress development. With a keen eye for
                aesthetics and technical prowess, I deliver exceptional digital
                experiences, captivating visuals, and functional websites.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  alt="example-projects"
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={Image6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </section>
          {/* Contact form */}
          <section id="contact" className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                Contact me
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                Got an idea? Want to disscuss about new project? Need help with
                planning your event? Let me know.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let me know how I can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-600 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-white mx-auto"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>

          <footer className="bg-white dark:bg-gray-900 mt-5 me-5 mb-0 ms-5">
            <div className="w-full max-w-screen-xl mx-auto pb-4 md:py-8 ">
              <div className="sm:flex sm:items-center sm:justify-between">
                <a href="/" className="flex items-center mb-4 sm:mb-0">
                  {/* <img src="./Logo.png" className="h-8 mr-3"/> */}
                  <Image src={Logo} className="h-8 w-auto mr-3" alt="Logo" />
                  <span className="text-2xl font-burtons dark:text-white">
                    vimukthi
                  </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
                  <li>
                    <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className="mr-4 hover:underline md:mr-6 "
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-black sm:text-center dark:text-gray-400">
                © 2023{" "}
                <a href="/" className="hover:underline">
                  AngelsIdea™
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
