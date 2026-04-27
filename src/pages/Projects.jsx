import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-page">
      <h2>Featured Projects</h2>

      <div className="projects-grid">

        {/* 🥇 ClinicFlow */}
        <div className="project-card">
          <img
            src="/screenshots/dashboard.png"
            alt="ClinicFlow Dashboard"
            className="project-image"
          />

          <h3>ClinicFlow – Healthcare Management System</h3>

          <p>
            Full-stack MERN application designed to manage patient records,
            appointments, and clinical workflows with secure authentication
            and scalable backend architecture.
          </p>

          <p className="project-highlights">
            • Developed RESTful APIs using Node.js and Express for patient and appointment management <br />
            • Implemented JWT-based authentication and authorization for secure access control <br />
            • Integrated third-party FDA API for real-time medication data retrieval <br />
            • Structured backend using MVC architecture for maintainability and scalability
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
            <span>REST API</span>
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
          <h3>Clinic Scheduler API – Backend System</h3>

          <p>
            Backend RESTful API built to manage clinic scheduling, patient data,
            and appointment workflows using Node.js, Express, and MongoDB.
          </p>

          <p className="project-highlights">
            • Designed and implemented RESTful API endpoints for CRUD operations <br />
            • Modeled and managed data using MongoDB and Mongoose <br />
            • Structured backend using routes, controllers, and middleware <br />
            • Implemented validation, error handling, and tested endpoints using Postman
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
              href="https://github.com/mbafousu/clinic-scheduler-api"
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

          <h3>Movie Finder – Web Application</h3>

          <p>
            Responsive React application that allows users to search for movies,
            view details, and explore trending content using external APIs.
          </p>

          <p className="project-highlights">
            • Built dynamic search functionality with real-time API data fetching <br />
            • Integrated external movie API for asynchronous data retrieval <br />
            • Implemented loading states and error handling for better UX <br />
            • Designed responsive UI using reusable React components
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
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