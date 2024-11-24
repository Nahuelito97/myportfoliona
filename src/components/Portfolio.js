import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hook";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Button,
  Icon,
} from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt'; // Icono similar al rayo
import RefreshIcon from '@mui/icons-material/Refresh'; // Icono de refrescar
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Icono de flecha izquierda
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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

const CustomCardd = () => (
  <Card sx={{ maxWidth: 600, margin: 'auto', backgroundColor: '#1c1c1e', color: '#fff' }}>
    {/* Título y descripción */}
    <CardContent>
      <Typography variant="h6" component="div">
        Marketing page
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ color: '#aaa' }}>
        A responsive marketing page layout with sections for product features, testimonials,
        pricing, and FAQs.
      </Typography>
    </CardContent>

    {/* Imagen o contenido visual */}
    <CardMedia
      component="img"
      height="200"
      image="https://via.placeholder.com/600x200" // Cambia esta URL por tu imagen
      alt="Marketing page preview"
    />

    {/* Acciones en la parte inferior */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {/* Íconos interactivos */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton aria-label="feature" color="primary">
          <BoltIcon />
        </IconButton>
        <IconButton aria-label="refresh" color="primary">
          <RefreshIcon />
        </IconButton>
        <IconButton aria-label="previous" color="primary">
          <ChevronLeftIcon />
        </IconButton>
        <IconButton aria-label="next" color="primary">
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Botón de acción */}
      <Button variant="contained" color="primary">
        Live preview
      </Button>
    </Box>
  </Card>
);

const CustomCard = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        boxShadow: 2,
        borderRadius: 2,
        maxWidth: 300,
        height: 220,
        backgroundColor: '#fff7e6',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Icon sx={{ color: '#ffa726', fontSize: 36 }}>code</Icon>
      </Box>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Code snippets
        </Typography>
        <Typography variant="body2">
          Native syntax highlighting for dozens of languages.
        </Typography>
      </CardContent>
    </Card>

  )
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
          <CustomCard />
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Portfolio, "projects");
