import * as React from 'react';
import Box from '@mui/material/Box';
import content from '../content';


export default function LogoCollection() {
  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <section class="skills-section" id="skills-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header text-center">
                <h2 class="section-title wow fadeInUp" data-wow-delay=".3s"> Stack I Use for Coding</h2>

                <p class=" wow fadeInUp" data-wow-delay=".4s">{content.stack.desc}.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                {content.stack.tech.map((tech, index) => (
                  <div className="skill-item wow fadeInUp" data-wow-delay={`.${3 + index}s`} key={index}>
                    <div className="skill-inner">
                      <div className="icon-box">
                        <img
                          src={tech.img}
                          alt=""
                        />
                      </div>
                      <div className="number">{tech.percent}%</div>
                    </div>
                    <p>{tech.title}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </Box>
  );
}