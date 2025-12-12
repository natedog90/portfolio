import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Wellness() {
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
        <h1 className="signature-name">Wellness</h1>
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
            <h2>Financial Mindfulness</h2>
            <p>
              During this cycle, I learned that wellness is just as important as
              technical growth. I became more mindful of my spending patterns,
              recognizing how stress influenced my choices, and began aligning
              my financial decisions with my long-term goals.
            </p>
            <p>
              My financial goal is simple: to be able to take care of myself and
              my family. I don't need much, and I don't need to become rich.
              What matters most is stability, security, and the ability to
              provide. At the end of the day, my health is my wealth—and that's
              the foundation I want to build on.
            </p>
          </div>

          <div className="content-card">
            <h2>Physical Wellness</h2>
            <p>
              To manage the mental and physical demands, I committed to the gym
              and regular sauna sessions. The sauna became more than
              relaxation—it helped relieve stress, improved circulation, cleared
              my mind, and gave me better sleep. Together with exercise, it kept
              me grounded and focused.
            </p>
          </div>

          <div className="content-card">
            <h2>Mental Health & Self-Talk</h2>
            <p>
              There were moments when the workload felt overwhelming. I wrote
              about those challenges in my journal, and that practice reminded
              me that vulnerability is part of growth. I also confronted
              negative self-talk and imposter syndrome by reframing my thoughts.
              Instead of telling myself "I'm not good enough," I reminded
              myself, "I'm learning, and growth takes time."
            </p>
          </div>

          <div className="content-card">
            <h2>Affirmations</h2>
            <p>
              I strengthened this mindset with affirmations: I am capable of
              learning and growing every day. My effort matters as much as the
              outcome. I belong in spaces where I bring value.
            </p>
          </div>

          <div className="content-card">
            <h2>Closing</h2>
            <p>
              This wellness journey taught me that resilience isn't just about
              pushing through—it's about caring for myself, challenging doubt,
              and choosing progress over perfection.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wellness;
