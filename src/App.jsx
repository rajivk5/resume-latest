import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyEducation from './components/MyEducation';
import Footer from './components/Footer';
import About from './components/About';
import GoToTop from './components/GoToTop';
import ComingSoon from './components/ComingSoon';
import LeetCode from './components/LeetCode';
const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyEducation />
      <Projects />
      <LeetCode/>
      <Contact />
      <Footer />
      <GoToTop />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
