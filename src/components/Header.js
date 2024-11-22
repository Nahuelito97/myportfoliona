import * as React from "react";
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
    <section
      className="relative w-full h-screen mx-auto hero-section d-flex align-items-center"
      id="intro"
    >
      <div className="intro_text">
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-content-box">
              <span
                className="hero-sub-title wow fadeInLeft"
                data-wow-delay="1.1s"
              >
                {content.header.text[1]}
              </span>
              <h1
                className="hero-title wow fadeInLeft"
                data-wow-delay="1.2s"
              >
                Web Developer
              </h1>

              <p
                className="lead wow fadeInLeft"
                data-wow-delay="1.4s"
              >
                I break down complex user experience problems to create
                integrity-focused solutions that connect billions of people.
              </p>
              {/* 
                <span
                  className={`text-2xl text-[#915EFF] md:text-4xl transform ${animated ? "translate-y-0" : styleTranslate
                    } ${transition(2000)}`}
                >
                  {content.header.text[2]}
                  <span className="typing-container">
                    <Typical
                      steps={content.header.typical}
                      loop={Infinity}
                      wrapper="p"
                      className="inline-block"
                    />
                  </span>
                </span> 
                */}
             {/* <div className="button-box d-flex flex-wrap align-items-center">
                <a
                  href="#"
                  className="btn tj-btn-secondary wow fadeInLeft"
                  data-wow-delay="1.5s"
                >
                  Download CV
                </a>
                <ul
                  className="ul-reset social-icons wow fadeInLeft"
                  data-wow-delay="1.6s"
                >
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-light fa-basketball"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
