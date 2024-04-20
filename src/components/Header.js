import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
    <Box
      id="header"
    >
      <div className="hero-section min-h-screen flex items-center justify-center">
        <div class="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" Y="50%" text-anchor="middle">
              HI
            </text>
          </svg>
        </div>
        <section className={`relative w-full h-screen mx-auto`}>
          <div
            className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div className="font-dosis w-full md:w-3/5 text-center md:text-left">
              <Typography
                component="h2" variant="h4"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                  ...styles.heroHeadText,
                  text: `text-2xl md:text-3xl lg:text-6xl text-white font-bold transform ${animated ? "translate-y-0" : styleTranslate} ${transition(2000)}`
                }}
              >
                {content.header.text[0]} <br />
                <Typography
                  component="span"
                  variant="h4"
                  sx={{
                    fontSize: 'clamp(3rem, 10vw, 4rem)',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                  }}
                >
                  there
                </Typography>
              </Typography>
              <div>
                <Typography component="h2" variant="h4" color="text.primary">
                  {content.header.text[1]} <br />
                </Typography>
              </div>
              <Typography
                component="h2" variant="h4" color="text.primary"
                sx={{ mb: { xs: 2, sm: 4 } }}
              >
                I'm <span className="text-[#915EFF]">Nahuel Wagner</span>
              </Typography>
              <Box
                sx={{
                  width: { sm: '100%', md: '100%' },
                  textAlign: { sm: 'left', md: 'center' },
                }}
              >
                <Typography component="h2" variant="h4" color="text.primary" className={`text-2xl md:text-4xl transform ${animated ? "translate-y-0" : styleTranslate} ${transition(2000)}`}>
                  {content.header.text[2]}
                  <Typical
                    steps={content.header.typical}
                    loop={Infinity}
                    className="inline-block"
                    wrapper="p"
                  />
                </Typography>
              </Box>
            </div>
          </div>
        </section>
      </div >
    </Box >
  );
}