import React from 'react';
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navigation />
          <Header />
        </div>
        <About />
        <Timelines />
        <Stack />
        <Portfolio />
        <Feedbacks />
        <div className='relative z-0'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
