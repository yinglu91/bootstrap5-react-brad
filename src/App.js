import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsLetter from './components/NewsLetter';
import Boxes from './components/Boxes';

import LearnSections from './components/LearnSections';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <NewsLetter />
      <Boxes />
      <LearnSections />
    </div>
  );
};

export default App;
