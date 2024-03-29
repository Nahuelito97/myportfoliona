import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import content from '../content';

export default function Stack() {
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"      
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>development skills</p>
        <h2 className={styles.sectionHeadText}>Stack I Use for Coding 💻</h2>
      </motion.div>
      <p className="mt-10 mb-10 w-11/12 md:max-w-xl text-center inline-block text-xl md:text-2xl font-dosis ">
        {content.stack.desc}.
      </p>
      <div>
        <div className="flex flex-wrap justify-center">
          {content.stack.tech.map((tech, index) => (
            <span
              key={index}
              className={` h-40 w-40 bg-white shadow-xl  ml-2  rounded-full flex justify-center items-center p-5 m-2 ${
                index % 2 !== 0 ? 'animate-bounce' : 'animate-bounceFirst'
              }`}
            >
              <LazyLoadImage effect="blur" src={tech.img} alt={tech.alt} title={tech.title} />
            </span>
          ))}
        </div>
      </div>
     
    </div>
  );
}
