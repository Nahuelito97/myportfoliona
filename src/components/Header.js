import * as React from 'react';
import Typical from "react-typical";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useStartAnimation from "../hook/useStartAnimation";


export default function Header() {
  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = "translate-y-10 opacity-0";
  const animated = useStartAnimation();
  return (
    <section class=" relative w-full h-screen mx-auto hero-section d-flex align-items-center" id="intro">
      <div class="intro_text">
        <svg viewBox="0 0 1320 300">
          <text x="50%" Y="50%" text-anchor="middle">
            HI
          </text>
        </svg>
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-2">
            <div class="flex flex-col justify-center items-center mt-5">
              <div class="w-5 h-5 rounded-full bg-[#915EFF]"></div>
              <div class="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="hero-content-box">
              <span class="hero-sub-title wow fadeInLeft" data-wow-delay="1.1s">I am Wagner Nahuel</span>
              <h1 class="hero-title wow fadeInLeft" data-wow-delay="1.2s">Web Developer +<br />UX Designer</h1>
              <h1 class="hero-title wow fadeInLeft" data-wow-delay="1.2s">{content.header.text[1]}</h1>

              <div class="hero-image-box d-md-none text-center wow fadeInRight" data-wow-delay="1.3s">
                <img src="assets/img/hero/me.png" alt="" />
              </div>
              <span
                component="h2"
                variant="h4"
                className={`text-2xl text-[#915EFF] md:text-4xl transform ${animated ? "translate-y-0" : styleTranslate} ${transition(2000)}`}
              >
                {content.header.text[2]}
                <Typical
                  steps={content.header.typical}
                  loop={Infinity}
                  className="inline-block"
                  wrapper="p"
                />
              </span>


              <div class="button-box d-flex flex-wrap align-items-center">
                <a href="#" class="btn tj-btn-secondary wow fadeInLeft" data-wow-delay="1.5s">Download CV</a>
                <ul class="ul-reset social-icons wow fadeInLeft" data-wow-delay="1.6s">
                  <li><a href="https://twitter.com/nahuelitodev" target='_blank'><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/nahuewagner/" target='_blank'><i class="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="https://github.com/Nahuelito97" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}