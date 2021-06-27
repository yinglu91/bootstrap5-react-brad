import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewsLetter from './components/NewsLetter';
import Boxes from './components/Boxes';

import LearnFundamentals from './components/LearnFundamentals';
import LearnReact from './components/LearnReact';
import QuestionAccordion from './components/QuestionAccordion';

import Instructors from './components/Instructors';

import Contact from './components/Contact';

import Footer from './components/Footer';

import EnrollFormModal from './components/EnrollFormModal';

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

      <Instructors />

      <Contact />

      <Footer />

      <EnrollFormModal />
    </div>
  );
};

export default App;

// https://www.youtube.com/watch?v=4sosXZsdy-s
// Bootstrap 5 Crash Course | Website Build & Deploy June 9, 2021
