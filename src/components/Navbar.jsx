
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    'Home',
    'About',
    'Skills',
    'Education',
    'Projects',
    'Certificates',
    'Resume',
    'Contact',
    'Settings'
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        &lt;Dev<span>/&gt;</span>
      </NavLink>

      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link}
            to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
            end
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </NavLink>
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
