
import { Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Settings from './components/Settings';

import '../style.css';

function NotFound() {
  return (
    <section
      style={{
        minHeight: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '100px 20px',
        color: 'var(--page-text)'
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(5rem, 15vw, 9rem)',
          fontFamily: 'Georgia, serif',
          color: 'var(--page-accent)',
          marginBottom: '10px'
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          marginBottom: '15px'
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          maxWidth: '450px',
          lineHeight: '1.8',
          opacity: 0.75,
          marginBottom: '30px'
        }}
      >
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link
        to="/"
        className="btn primary-btn"
      >
        Back to Home →
      </Link>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/settings" element={<Settings />} />

          {/* 404 page for invalid routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
