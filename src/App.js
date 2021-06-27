import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsLetter from './components/NewsLetter';
import Boxes from './components/Boxes';

import LearnFundamentals from './components/LearnFundamentals';
import LearnReact from './components/LearnReact';
import QuestionAccordion from './components/QuestionAccordion';

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />

      <NewsLetter />
      <Boxes />
      <LearnFundamentals />
      <LearnReact />

      <QuestionAccordion />
    </div>
  );
};

export default App;
