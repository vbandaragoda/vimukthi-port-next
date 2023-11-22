import React from "react";
import Image from "next/image";
import Image1 from "../public/Image1.jpg";
import Image2 from "../public/Image2.jpg";
import Image3 from "../public/Image3.jpg";
import Image4 from "../public/Image4.jpg";
import Image5 from "../public/Image5.jpg";
import Image6 from "../public/Image6.jpg";
import Image7 from "../public/Image7.jpg";
import Image8 from "../public/Image8.jpg";
import Image9 from "../public/Image9.jpg";
import Image10 from "../public/Image10.jpg";
import Image11 from "../public/Image11.jpg";
import Image12 from "../public/Image12.jpg";
import Image13 from "../public/Image13.jpg";
import Image14 from "../public/Image14.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          My Work
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
          My portfolio showcases my expertise in UI/UX design, captivating
          photography, and WordPress development. With a keen eye for aesthetics
          and technical prowess, I deliver exceptional digital experiences,
          captivating visuals, and functional websites.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        
      <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Truck Navigation App</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/150176685/Truck-Navigation-App-(Weather)">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image1}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
        
        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Food Delivery App Design</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/150176923/Food-Delivery-App-Design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image2}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
        
        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Product Packaging</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185134815/Product-Packaging">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image3}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Product Photography</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185136071/Product-Photography">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image4}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Product Branding</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185114885/A-Culinary-Journey-with-ORAG-Lanka">
                  Design
                </a>
              </div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="https://oraglanka.com">
                  Live version
                </a>
              </div>
            </div>
          </div>
          <Image
            src={Image5}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
        
        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Online Learning Platform</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/152717489/Online-Learning-System">
                  Design
                </a>
              </div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="https://nayanajithrathnayaka.com/">
                  Live version
                </a>
              </div>
            </div>
          </div>
          <Image
            src={Image6}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
        
        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">E-commerce Mobile App</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/174134727/E-commerce-mobile-app-design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image7}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
        
        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Tuition Mart</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/150178359/Tuition-Platform">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image8}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Employee Management Dashboard</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/174134893/Dashboard-Design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image9}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Mental Health App</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185127283/Medical-mentoring-app-Design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image10}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Petics Dashboard Redesign</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185127055/Petics-Dashboard-Design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image11}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">ENCORE Customs Redesign</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185126773/ENCORE-Customs-Redesign">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image12}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Login Page</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185127703/Login-Page-Design">
                  Design
                </a>
              </div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="https://pest-control-login-design.vercel.app/">Live version</a>
              </div>
            </div>
          </div>
          <Image
            src={Image13}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>

        <div className="basis-1/3 flex-1 overflow-hidden relative group rounded-lg">
          <div className="rounded-lg z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
            <div className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
              <div className="font-bold text-gray-50">Company Services Page</div>
              <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/gallery/185127497/Services-Page-Design">
                  Design
                </a>
              </div>
              {/* <div className="flex gap-2 opacity-100 text-sm text-white hover:text-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z"
                    clipRule="evenodd"
                  />
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="#">
                  Live version
                </a>
              </div> */}
            </div>
          </div>
          <Image
            src={Image14}
            className="rounded-lg object-cover w-full h-full group-hover:scale-110 transition duration-300 ease-in-out"
            alt="vimukthi-bandaragoda-projects"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
