import { Link } from "react-router-dom";
import { useState } from "react";
import LogCard from "./LogCard";
import "../App.css";

function Business() {
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
        <h1 className="signature-name">Buisiness</h1>
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
            <h2>United Airlines Project</h2>
            <p>
              During my internship, one of the most impactful experiences was
              our project with United Airlines. We built SQL queries, designed
              visuals in Power BI, and learned how to structure ERDs to make
              sense of complex data. Together, we created an app that aggregated
              customer data into a centralized platform—turning raw information
              into actionable insights. By tracking trends in NPS scores and
              sentiment, we helped United better understand customer needs and
              identify opportunities for improvement.
            </p>
          </div>

          <div className="content-card">
            <h2>Learning and Growth</h2>
            <p>
              This project wasn't just about technology—it was about teamwork
              and mentorship. I learned how collaboration fuels innovation, how
              mentors guide us through challenges, and how persistence turns
              obstacles into breakthroughs. Every line of SQL, every dashboard,
              and every design decision was a chance to grow as both a
              technologist and a leader.
            </p>
          </div>

          <div className="content-card">
            <h2>Industry Exposure</h2>
            <p>
              Visiting companies like Salesforce and Accenture gave me a broader
              perspective. I saw firsthand how industry leaders approach data,
              innovation, and customer experience. Those visits reminded me that
              the skills we're building aren't just classroom exercises—they're
              the foundation for solving real-world problems at scale.
            </p>
          </div>

          <div className="content-card">
            <h2>Closing Reflection</h2>
            <p>
              This business experience taught me that technology is powerful,
              but it's people—teams, mentors, and communities—that make it
              meaningful. I leave i.c.stars with confidence in my technical
              skills, gratitude for the mentorship I've received, and a vision
              to use data and creativity to drive solutions that truly serve
              people.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
