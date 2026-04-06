import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">Full-Stack Software Engineer</p>

        <h1>
          Hi, I’m <span>Carol Mbafou</span>
        </h1>

        <p className="hero-description">
          I build clean, scalable web applications with the MERN stack,
          with a strong focus on backend systems, APIs, and healthcare technology.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn primary">
            View Projects
          </Link>

          <Link to="/contact" className="btn secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <h3>What I Build</h3>
          <p>Full-stack applications</p>
          <p>RESTful APIs</p>
          <p>Authentication systems</p>
          <p>Healthcare solutions</p>
        </div>
      </div>
    </section>
  );
}