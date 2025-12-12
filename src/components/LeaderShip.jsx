import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Leadership() {
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
        <h1 className="signature-name">Leadership</h1>
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
            <h2>Team Week</h2>
            <p>
              Team Week was the spark. Meeting my cohort, being assigned teams,
              and diving into a United Airlines project showed me how
              collaboration and resilience can turn challenges into growth.
            </p>
          </div>

          <div className="content-card">
            <h2>Tea Host</h2>
            <p>
              As Tea Host, I learned the power of connection. Hosting industry
              professionals wasn't just networking—it was about listening,
              sharing our journeys, and realizing that our voices matter.
            </p>
          </div>

          <div className="content-card">
            <h2>Cohort Soundtrack</h2>
            <p>
              One of my proudest moments was creating a soundtrack for our
              cohort. Each song represented someone's story, and together it
              became a celebration of unity, creativity, and encouragement.
            </p>
          </div>

          <div className="content-card">
            <h2>My Mission</h2>
            <p>
              Through it all, I lived my mission: to love. My gifts—empathy,
              communication, patience, creativity, and encouragement—weren't
              just words on paper. They became actions: listening to teammates,
              speaking with clarity, staying calm under pressure, creating
              something meaningful, and lifting others up.
            </p>
          </div>

          <div className="content-card">
            <h2>Closing</h2>
            <p>
              i.c.stars wasn't just an internship—it was transformation. I leave
              with gratitude, stronger leadership, and a renewed commitment to
              lead with compassion, inspire with creativity, and encourage
              others to see their own potential.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Leadership;
