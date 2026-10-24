
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <Link
          to="/"
          className="footer-logo"
          aria-label="Go to homepage"
        >
          ❋
        </Link>

        <p>
          © 2026 Aanya Sharma. All rights reserved.
        </p>

        <nav
          className="footer-links"
          aria-label="Footer navigation"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    </footer>
  );
}

export default Footer;
