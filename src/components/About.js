import React from "react";
import { SectionWrapper } from "../hook";
import { experiences } from "../constants";

const About = () => {
  return (
    <section class="resume-section" id="resume-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="section-header wow fadeInUp" data-wow-delay=".3s">
              <h2 class="section-title">My Experience</h2>
            </div>

            <div className="resume-widget">
              {experiences.map((experience, index) => (
                <div className="resume-item wow fadeInLeft" data-wow-delay={`${0.4 + index * 0.1}s`} key={index}>
                  <div className="time">{experience.date}</div>
                  <h3 className="resume-title">{experience.title}</h3>
                  <div className="institute">{experience.company_name}</div>

                </div>
              ))}
            </div>
          </div>

          <div class="col-md-5">
            <div class="section-header wow fadeInUp" data-wow-delay=".4s">
              <h2 class="section-title">My Education</h2>
            </div>

            <div class="resume-widget">
              <div class="resume-item wow fadeInRight" data-wow-delay=".5s">
                <div class="time">
                  2020 - 2023
                </div>
                <h3 class="resume-title">Programming course</h3>
                <div class="institute">
                  Harverd University
                </div>
              </div>
              <div class="resume-item wow fadeInRight" data-wow-delay=".6s">
                <div class="time">
                  2016 - 2020
                </div>
                <h3 class="resume-title">Graphic design course</h3>
                <div class="institute">
                  University of Denmark
                </div>
              </div>
              <div class="resume-item wow fadeInRight" data-wow-delay=".7s">
                <div class="time">
                  2012 - 2015
                </div>
                <h3 class="resume-title">Web design course</h3>
                <div class="institute">
                  University of California
                </div>
              </div>
              <div class="resume-item wow fadeInRight" data-wow-delay=".8s">
                <div class="time">
                  2010 - 2011
                </div>
                <h3 class="resume-title">Design & Technology</h3>
                <div class="institute">
                  Parsons, The New School
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default SectionWrapper(About, "about");
