import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { webdev } from "../assets";
import { SectionWrapper } from "../hook";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import miImagen1 from '../assets/pexels-photo-248515.png';

const ProjectCard = ({
  name,
  description,
  tagsitos,
  image,
  source_code_link,
}) => {
  return (
    <div className="bg-tertiary rounded-2xl sm:w-[360px] w-full shadow-md transition-transform duration-300 transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt="project_image"
        className="w-full h-64 object-cover rounded-t-2xl"
      />

      <div className="p-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tagsitos.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <a
          href={source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};


const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Recent Works
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap gap-7 justify-center">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Portfolio, "projects");
