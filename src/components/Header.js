import React from "react";

import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useStartAnimation from "../hook/useStartAnimation";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

import { styles } from "../styles";

export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div className="font-dosis w-full md:w-3/5 text-center md:text-left">
            <h2
              className={`${
                styles.heroHeadText
              } text-2xl md:text-3xl lg:text-6xl text-white font-bold transform ${
                animated ? "translate-y-0" : styleTranslate
              }  ${transition(2000)}`}
            >
              {content.header.text[0]}
              <br></br>
              {content.header.text[1]}
            </h2>
            <h3
              className={`${styles.heroHeadText} text-2xl md:text-3xl lg:text-6xl text-white font-bold transform`}
            >
              I'm <span className="text-[#915EFF]">Nahuel Wagner</span>
            </h3>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <h1
                className={`text-2xl md:text-4xl text-gray-400 transform ${
                  animated ? "translate-y-0" : styleTranslate
                } ${transition(2000)} `}
              >
                <br />
                {content.header.text[2]}

                <Typical
                  steps={content.header.typical}
                  loop={Infinity}
                  className="inline-block"
                  wrapper="p"
                />
              </h1>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
