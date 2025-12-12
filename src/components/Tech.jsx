import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Tech() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <LogCard />
      <nav className="navbar-clean">
        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect x="4" y="7" width="22" height="3" rx="1.5" fill="white" />
            <rect x="4" y="13.5" width="22" height="3" rx="1.5" fill="white" />
            <rect x="4" y="20" width="22" height="3" rx="1.5" fill="white" />
          </svg>
        </button>
        <h1 className="signature-name">Tech</h1>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          LinkedIn
        </a>
      </nav>

      {/* Side Panel Menu */}
      <div className={`side-panel ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="side-panel-content">
          <Link to="/" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">🏠</span>
            Home
          </Link>
          <Link to="/leadership" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">👑</span>
            Leadership
          </Link>
          <Link to="/business" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">💼</span>
            Business
          </Link>
          <Link to="/tech" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">💻</span>
            Tech
          </Link>
          <Link to="/wellness" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">🌱</span>
            Wellness
          </Link>
          <Link
            to="/career-planning"
            onClick={toggleMenu}
            className="panel-link"
          >
            <span className="link-icon">🎯</span>
            Career Planning
          </Link>
          <Link to="/resume" onClick={toggleMenu} className="panel-link">
            <span className="link-icon">📄</span>
            Resume
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      <div className="page-container">
        <div className="page-content">
          <div className="content-card">
            <h2>Geek Week</h2>
            <p>
              Geek Week was a trial by fire. We were pushed to complete 15
              technical tasks—SQL queries, Excel formulas, and more. It wasn't
              easy, but it taught me resilience, focus, and how to learn under
              pressure.
            </p>
          </div>

          <div className="content-card">
            <h2>Tech Stack</h2>
            <p>
              From there, I began building my portfolio—an application that
              showcases everything I've learned. My tech stack became my
              toolkit: Power BI for visualization, SQL for data, Azure Cognitive
              Services for intelligence, and React for building interactive
              solutions. Alongside these, tools like Google Drive, Microsoft
              Teams, and Trello kept me organized and collaborative.
            </p>
          </div>

          <div className="content-card">
            <h2>5-Hour Minimum Study</h2>
            <p>
              I committed to studying at least five hours a week. That
              discipline turned practice into mastery. Each week, I wasn't just
              learning tools—I was building confidence, sharpening my skills,
              and preparing myself to solve real-world problems.
            </p>
          </div>

          <div className="content-card">
            <h2>Closing</h2>
            <p>
              Geek Week gave me grit, my tech stack gave me power, and my study
              routine gave me growth. Together, they shaped me into someone
              ready to use technology not just to build apps, but to create
              impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tech;
