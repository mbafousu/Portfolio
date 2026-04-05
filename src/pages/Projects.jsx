import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-page">
      <h2>My Projects</h2>

      <div className="projects-grid">

        {/* 🥇 ClinicFlow */}
        <div className="project-card">
          <img
            src="/screenshots/dashboard.png"
            alt="ClinicFlow Dashboard"
            className="project-image"
          />

          <h3>ClinicFlow</h3>

          <p>
            Full-stack healthcare management application for managing patients,
            visits, appointments, and medication lookup.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>

          <p className="demo-credentials">
            Demo Login:<br />
            Email: demo@clinicflow.com<br />
            Password: Password123!
          </p>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/ClinicFlow"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              GitHub
            </a>

            <a
              href="https://clinicflow-frontend-app.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* 🥈 Clinic Scheduler API */}
        <div className="project-card">
          <h3>Clinic Scheduler API</h3>

          <p>
            Backend RESTful API built with Node.js, Express, and MongoDB to manage
            clinic scheduling, patients, and appointments.
          </p>

          <div className="tech-stack">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>REST API</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/YOUR_USERNAME/clinic-scheduler-api"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* 🥉 Movie Finder */}
        <div className="project-card">
          <img
            src="/screenshots/movie.png"
            alt="Movie Finder"
            className="project-image"
          />

          <h3>Movie Finder</h3>

          <p>
            Movie search application that allows users to find movies, view
            details, and explore trending content.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>API Integration</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/Movie_Finder.git"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              GitHub
            </a>

            <a
              href="https://movie-finder-app-m6no.onrender.com"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}