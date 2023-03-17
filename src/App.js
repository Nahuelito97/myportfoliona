import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Portfolio from './components/Portfolio';
import Timelines from './components/Timelines';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Portfolio />
      <Stack />
      <Timelines />
      <Footer />
    </>
  );
}

export default App;
