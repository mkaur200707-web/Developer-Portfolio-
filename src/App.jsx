
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import '../style.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact/>
        <Resume />
        
      </main>
      <Footer />

    </>
  );
}

export default App;
