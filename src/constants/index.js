import {
  mobile,
  logo192,
  webdev,
  backend,
  creator,
  web,
  swagger,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nahuelgithub,
  elprofe,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "React Developer",
    icon: logo192,
  },
  {
    title: "Backend Developer",
    icon: swagger,
  },
  {
    title: "Laravel Developer",
    icon: laravel
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Laravel Developer",
    company_name: "Adsmovil",
    icon: laravel,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using Laravel Framework and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "Frelance",
    icon: webdev,
    iconBg: "#383E56",
    date: "Jan 2020 - Present",
    points: [
      "Developing and maintaining web applications using PHP, Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "El Profe",
    description:
      "Web-based platform that allows users to manage students of the educational institution, providing a convenient and efficient solution for the needs of the institute..",
    tagsitos: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
    ],
    image: elprofe,
    source_code_link: "https://github.com/Nahuelito97/EL-Profe",
  },
  {
    name: "Ecomerce Project",
    description:
      "Web application, This website is under development, with constant changes. Develped with React.js framework.",
    tagsitos: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nahuelito97/ecomerce-react",
    source_code_link_published: "https://nahuelito97.github.io/ecomerce-react/",
  },
  {
    name: "GitHub Profile",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tagsitos: [
      {
        name: "github",
        color: "blue-text-gradient",
      }
    ],
    image: nahuelgithub,
    source_code_link: "https://github.com/Nahuelito97",
  },
  
];


const icons = [
  //{ name: "logo-facebook", link: "#" },
  { 
    name: "logo-twitter", 
    source_code_link: "https://twitter.com/nahuelitodev" },
  { 
    name: "logo-github", 
    source_code_link: "https://github.com/Nahuelito97" },
  { 
    name: "logo-linkedin", 
    source_code_link: "https://www.linkedin.com/in/nahuewagner/" },
  { 
    name: "logo-instagram", 
    source_code_link: "https://www.instagram.com/nahuewagner/" },
];

export { services, technologies, experiences, testimonials, projects, icons };
