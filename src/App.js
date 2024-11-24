import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Tooltip } from '@mui/material';

import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Stack from './components/Stack';
import Feedbacks from './components/Feedbacks';
import Portfolio from './components/Portfolio';
import Timelines from './components/Timelines';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navigation />
      <Tooltip
        title="Scroll to top"
        arrow
        sx={{
          '& .MuiTooltip-tooltip': {
            backgroundColor: '#333',
            color: '#fff',
            fontSize: '14px',
            padding: '6px 12px',
          },
          '.MuiTooltip-arrow': {
            color: '#333',
          },
        }}
        placement="left"
      >
        <div className="progress-wrap" id="scrollUp">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      </Tooltip>

      <Header />

      <BrowserRouter>
        <About />
        <Portfolio />
        <Stack />
        <Feedbacks />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
