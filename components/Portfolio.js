import React from "react";
import Image from "next/image";
import Image1 from "../public/Image1.jpg";
import Image2 from "../public/Image2.jpg";
import Image3 from "../public/Image3.jpg";
import Image4 from "../public/Image4.jpg";
import Image5 from "../public/Image5.jpg";
import Image6 from "../public/Image6.jpg";

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
  );
};

export default Portfolio;