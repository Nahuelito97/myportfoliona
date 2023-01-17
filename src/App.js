import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Work from './components/Work';
import Timelines from './components/Timelines';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Work />
      <Stack />
      <Timelines />
      <Footer />
    </>
  );
}

export default App;
