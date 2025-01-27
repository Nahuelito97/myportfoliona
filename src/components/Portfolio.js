import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { webdev } from "../assets";
import { SectionWrapper } from "../hook";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tagsitos,
  image,
  source_code_link,
  demo,
  source_code_link_published,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tagsitos.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="mt-1">
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              {demo.map((dem) => (
                <p
                  key={`${name}-${dem.name}`}
                  className={`text-[14px] ${dem.color}`}
                >
                  #{dem.name}
                </p>
              ))}
            </div>

            <div
              onClick={() => window.open(source_code_link_published, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={webdev}
                alt={`feedback_by-${name}`}
                className="w-10 h-10 rounded-full object-contain"
              />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
      <section class="testimonial-section" id="testimonials-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="section-header">
                <h2 class="section-title wow fadeInLeft" data-wow-delay=".3s">My Client's Stories</h2>
                <p class=" wow fadeInLeft" data-wow-delay=".4s">Empowering people in new a digital journey
                  with my super services</p>
              </div>
            </div>

            <div class="col-lg-7 col-xl-6 offset-xl-1">
              <div class="testimonials-widget wow fadeInRight" data-wow-delay=".5s">
                <div class="owl-carousel testimonial-carousel">
                  <div class="testimonial-item">
                    <div class="top-area d-flex flex-wrap justify-content-between">
                      <div class="logo-box">
                        <img src="assets/img/testimonials/logo/1.png" alt="" />
                      </div>
                      <div class="image-box">
                        <img src="assets/img/testimonials/user/1.jpg" alt="" />
                      </div>
                    </div>
                    <div class="icon-box">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_588)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_588" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_589)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_589" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p class="quote">“Taylor is a professional Designer he really helps my business by
                      providing value to my business. </p>
                    <h4 class="name">Brandon Fraser</h4>
                    <span class="designation">Senior Software Dev, Cosmic Sport</span>
                  </div>
                  <div class="testimonial-item">
                    <div class="top-area d-flex flex-wrap justify-content-between">
                      <div class="logo-box">
                        <img src="assets/img/testimonials/logo/2.png" alt="" />
                      </div>
                      <div class="image-box">
                        <img src="assets/img/testimonials/user/2.jpg" alt="" />
                      </div>
                    </div>
                    <div class="icon-box">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_511)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_511" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_510)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_510" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p class="quote">“Taylor is a professional Designer he really helps my business by
                      providing value to my business. </p>
                    <h4 class="name">Tim Bailey</h4>
                    <span class="designation">SEO Specialist, Theme Junction</span>
                  </div>
                  <div class="testimonial-item">
                    <div class="top-area d-flex flex-wrap justify-content-between">
                      <div class="logo-box">
                        <img src="assets/img/testimonials/logo/1.png" alt="" />
                      </div>
                      <div class="image-box">
                        <img src="assets/img/testimonials/user/1.jpg" alt="" />
                      </div>
                    </div>
                    <div class="icon-box">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_512)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_512" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_513)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_513" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p class="quote">“Taylor is a professional Designer he really helps my business by
                      providing value to my business. </p>
                    <h4 class="name">Brandon Fraser</h4>
                    <span class="designation">Senior Software Dev, Cosmic Sport</span>
                  </div>
                  <div class="testimonial-item">
                    <div class="top-area d-flex flex-wrap justify-content-between">
                      <div class="logo-box">
                        <img src="assets/img/testimonials/logo/2.png" alt="" />
                      </div>
                      <div class="image-box">
                        <img src="assets/img/testimonials/user/2.jpg" alt=""/>
                      </div>
                    </div>
                    <div class="icon-box">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_514)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_514" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                          fill="url(#paint0_linear_263_515)" />
                        <defs>
                          <linearGradient id="paint0_linear_263_515" x1="-0.0363755"
                            y1="-0.0729998" x2="35.3333" y2="-0.0729991"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="1" stop-color="var(--tj-theme-primary)" />
                            <stop offset="1" stop-color="#140C1C" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <p class="quote">“Taylor is a professional Designer he really helps my business by
                      providing value to my business. </p>
                    <h4 class="name">Tim Bailey</h4>
                    <span class="designation">SEO Specialist, Theme Junction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Last Projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Portfolio, "projects");
