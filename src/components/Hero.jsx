import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">Troubleshooting • Backend APIs • System Support
          </p>


        <h1>
          Hi, I’m <span>Carol Mbafou</span>
        </h1>

        <p className="hero-description">
       I build and troubleshoot backend systems and applications, focusing on reliability, data accuracy, and
        real-world workflows.

       Skilled in Node.js, Express, MongoDB, and REST APIs, I enjoy solving technical problems, debugging 
       systems, and supporting reliable application performance.
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
          <p>Troubleshooting & Issue Resolution</p>
          <p>Technical Support & User Assistance</p>
          <p>Backend Development (Node.js, Express)</p>
          <p>RESTful APIs Design & Integration</p>
          <p>System Debugging & Error Handling</p>
          <p>Data Accuracy & Workflow Management</p>
        </div>
      </div>
    </section>
  );
}