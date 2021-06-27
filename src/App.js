import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsLetter from './components/NewsLetter';
import Boxes from './components/Boxes';

import LearnFundamentals from './components/LearnFundamentals';
import LearnReact from './components/LearnReact';
import QuestionAccordion from './components/QuestionAccordion';

import Instructors from './components/Instructors';

import Contact from './components/Contact';

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

      <Contact />
    </div>
  );
};

export default App;
