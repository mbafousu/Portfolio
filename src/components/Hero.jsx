import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">Software Engineer | Backend Focus (Node.js, Express, MongoDB)
          </p>


        <h1>
          Hi, I’m <span>Carol Mbafou</span>
        </h1>

        <p className="hero-description">
            Backend-focused Software Engineer specializing in Node.js, Express, and MongoDB.
            I build scalable RESTful APIs, implement secure authentication systems, and develop
            full-stack MERN applications that solve real-world problems.
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
          <h3>Core Expertise</h3>
          <p>Backend Development (Node.js, Express)</p>
          <p>RESTful APIs Design & Integration</p>
          <p>Authentication & Authorization (JWT)</p>
          <p>Full-Stack MERN Applications</p>
        </div>
      </div>
    </section>
  );
}