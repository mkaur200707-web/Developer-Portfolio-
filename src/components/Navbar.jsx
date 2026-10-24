
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [systemDark, setSystemDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const updateSystemTheme = (event) => {
      setSystemDark(event.matches);
    };

    media.addEventListener('change', updateSystemTheme);

    return () => {
      media.removeEventListener('change', updateSystemTheme);
    };
  }, []);

  const isDark =
    theme === 'dark' || (theme === 'system' && systemDark);

  function toggleTheme() {
    setTheme(isDark ? 'light' : 'dark');
  }

  const links = [
    'Home',
    'About',
    'Skills',
    'Education',
    'Projects',
    'Blog',
    'Certificates',
    'Resume',
    'Contact',
    'Settings'
  ];

  return (
    <header className="navbar">
      <NavLink
        to="/"
        className="logo"
        aria-label="Go to homepage"
        onClick={() => setMenuOpen(false)}
      >
        ❋
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

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
          }
          title={
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {isDark ? (
            <Sun size={18} strokeWidth={1.8} />
          ) : (
            <Moon size={18} strokeWidth={1.8} />
          )}
        </button>
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
