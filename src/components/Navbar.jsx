
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    'Home',
    'About',
    'Skills',
    'Education',
    'Projects',
    'Certificates',
    'Resume',
    'Contact'
  ];

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        &lt;Dev<span>/&gt;</span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={
              activeLink === link.toLowerCase() ? 'active' : ''
            }
            onClick={() => {
              setActiveLink(link.toLowerCase());
              setMenuOpen(false);
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        className="menu-btn"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
}

export default Navbar;
