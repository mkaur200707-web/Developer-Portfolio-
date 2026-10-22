
import { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'Web Designer',
  'Java Programmer',
  'Creative Developer'
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && characterIndex === currentRole.length) {
      delay = 1600;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (characterIndex < currentRole.length) {
          setCharacterIndex(characterIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (characterIndex > 0) {
          setCharacterIndex(characterIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [roleIndex, characterIndex, isDeleting]);

  return (
    <section className="hero" id="home">
      <div className="gradient-orb orb-one"></div>
      <div className="gradient-orb orb-two"></div>

      <div className="hero-content">
        <p className="hello">HELLO, I'M</p>

        <h1>
          Aanya <span>Sharma</span>
        </h1>

        <h2>
          I'm a{' '}
          <span id="typingText">
            {roles[roleIndex].substring(0, characterIndex)}
          </span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          I create modern, responsive and user-friendly digital
          experiences by combining creativity, clean design and technology.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            Explore My Work <span>→</span>
          </a>

          <a href="#contact" className="btn secondary-btn">
            Let's Connect
          </a>
        </div>

        <div className="social-area">
          <span>Find me on</span>

          <div className="social-links">
            <a href="#">GH</a>
            <a href="#">in</a>
            <a href="#">@</a>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-circle">
          <img
            src="https://img.magnific.com/premium-photo/indian-businesswoman-white-background-showing-left-side-with-her-right-hand_181624-58573.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Aanya Sharma"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
