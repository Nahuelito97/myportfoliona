import React, { useState } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link as ScrollLink } from "react-scroll";
import content from "../content";
import { navLinks } from "../constants";
import { logo } from "../assets";

const logoStyle = {
  width: '40px',
  height: 'auto',
  cursor: 'pointer',
};

function Navigation() {
  const [setOpen] = React.useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  return (
    <div>
      <header class="tj-header-area header-absolute">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex flex-wrap align-items-center">
              <Container maxWidth="lg">
                <Toolbar
                  variant="regular"
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      ml: '-18px',
                      px: 0,
                    }}
                  ><ScrollLink
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                  >
                      {/*<img src={logo} alt="logo of sitemark" className="w-12 h-12 object-contain" style={logoStyle}
                      />*/}
                      <p className=" text-white mx-1.5 text-xl hover:text-teal-500
                        duration-300  text-[18px] font-bold cursor-pointer flex "
                      >
                        {content.nav.logo}
                        <span className="sm:block hidden"></span>
                      </p>
                    </ScrollLink>

                  </Box>
                  <div class="header-menu">
                    <nav>
                      <ul>
                        {navLinks.map((nav) => (
                          <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                              } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                          >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div class="header-button">
                    <a href="#home" class="btn tj-btn-primary">Get Started!</a>
                  </div>
                  <div class="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </Toolbar>
              </Container>
            </div >
          </div >
        </div >
      </header >
      <header class="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <Container maxWidth="lg">
                <Toolbar
                  variant="regular"
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      ml: '-18px',
                      px: 0,
                    }}
                  ><ScrollLink
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0);
                    }}
                  >
                      <img src={logo} alt="logo of sitemark" className="w-12 h-12 object-contain" style={logoStyle}
                      />
                      <p
                        className="text-teal-500 mx-1.5 text-xl hover:text-gray-100
                duration-300  text-[18px] font-bold cursor-pointer flex "
                      >
                        {content.nav.logo}
                        <span className="sm:block hidden"></span>
                      </p>
                    </ScrollLink>

                  </Box>
                  <div class="header-menu">
                    <nav>
                      <ul>
                        {navLinks.map((nav) => (
                          <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-white" : "text-secondary"
                              } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                          >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div class="header-button">
                    <a href="#home" class="btn tj-btn-primary">Get Started!</a>
                  </div>
                  <div class="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </Toolbar>
              </Container>
            </div >
          </div >
        </div >
      </header>
    </div >
  );
}

export default Navigation;