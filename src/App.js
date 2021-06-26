import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsLetter from './components/NewsLetter';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <NewsLetter />
    </div>
  );
};

export default App;
