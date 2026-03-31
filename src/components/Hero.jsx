import "./hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-content">
        <h1>Hey, I'm Carol Mbafou</h1>

        <p>
          A Full-Stack Software Engineer with a healthcare background,
          building and deploying webapplications that improve patient care and clinical workflows.
        </p>

        <Link to="/projects" className="hero-btn">
          PROJECTS
        </Link>
      </div>
    </main>
  );
}