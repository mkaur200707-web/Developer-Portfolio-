
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  const roles = [
    'Frontend Developer',
    'Web Designer',
    'Java Programmer',
    'Creative Developer'
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && text === currentRole) {
      speed = 1500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          currentRole.substring(
            0,
            text.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>

      <div className="hero-content">
        <p className="hello">HELLO, I'M</p>

        <h1>
          Aanya <span>Sharma</span>
        </h1>

        <h2>
          I'm a{' '}
          <span id="typingText">{text}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          I create modern, responsive and user-friendly
          digital experiences by combining creativity,
          clean design and technology.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary-btn">
            Explore My Work →
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Let's Connect
          </Link>
        </div>

        <div className="social-area">
          <span>Find me on</span>

          <div className="social-links">
            <a href="#" aria-label="GitHub">
              GH
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="Email">
              @
            </a>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-circle">
          <img
            src="https://img.magnific.com/premium-photo/indian-businesswoman-white-background-showing-left-side-with-her-right-hand_181624-58573.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Professional portfolio portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
