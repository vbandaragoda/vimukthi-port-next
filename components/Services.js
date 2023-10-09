import React from "react";
import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Services = () => {
  return (
    <section id="services" className="mt-14">
      <div>
        <h3 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
          I am a UI/UX designer, photographer, and WordPress developer with 2
          years of experience. I possess a keen eye for detail and a deep
          understanding of user-centric design principles. I excel at crafting
          intuitive interfaces, capturing captivating moments through
          photography, and building customized and responsive WordPress
          websites. My multidisciplinary approach, attention to detail, and
          dedication to delivering high-quality results make me a valuable asset
          for any project.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800  dark:text-slate-300 text-center">
          I offer a wide range of services, including brand design, social media
          marketing, and photography.
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
          <h3 className="text-lg font-medium pt-8 pb-2 ">Web development</h3>
          <p className="py-2">
            Crafting responsive WordPress websites for seamless digital
            experiences.
          </p>
          <h4 className="py-4 text-teal-600">Tools I Use</h4>
          <p className="text-gray-800 py-1">WordPress</p>
          <p className="text-gray-800 py-1">React</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
