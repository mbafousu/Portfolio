import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">Linux Administration • Cloud Infrastructure • Automation 
          </p>


        <h1>
          Hi, I’m <span>Carol Mbafou</span>
        </h1>

        <p className="hero-description">
       IT professional with experience in Linux administration, AWS cloud infrastructure, automation, and software development.
       Passionate about building, automating, and supporting reliable systems.
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
          <p>Linux System Administration</p>
          <p>AWS Cloud Infrastructure</p>
          <p>Terraform</p>
          <p>Ansible</p>
          <p>Bash Scripting</p>
          <p>Infrastructure Automation</p>
          <p>System Monitoring</p>
          <p>Troubleshooting</p>
          <p>Full-Stack Development</p>
          <p>Healthcare IT</p>
        </div>
      </div>
    </section>
  );
}