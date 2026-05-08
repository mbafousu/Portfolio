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
           Full-stack MERN healthcare application designed to support patient workflows, appointments,
            and clinical data management with a focus on system reliability, troubleshooting, and secure backend architecture.
          </p>

          <p className="project-highlights">
            • Built and maintained RESTful APIs using Node.js and Express for patient and appointment workflows <br />
            • Implemented JWT authentication and protected routes for secure system access <br />
            • Troubleshot authentication issues, API failures, and data inconsistencies across the application <br />
            • Integrated external FDA API for real-time medication lookup and asynchronous data handling <br />
            • Structured backend architecture using MVC pattern to improve scalability and maintainability 
    
            

          </p>

          <div className="tech-stack">
            <span>Troubleshooting</span>
            <span>JWT</span>
            <span>API Integration</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
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
             Backend scheduling system designed to manage appointment workflows and healthcare data operations
             with a focus on API reliability, validation, and structured error handling.
          </p>

          <p className="project-highlights">
            • Designed and implemented RESTful API endpoints for scheduling and workflow management <br />
            • Troubleshot backend issues affecting API performance and data integrity <br />
            • Implemented validation and centralized error handling to improve system reliability <br />
            • Structured backend architecture using routes, controllers, and middleware<br />
            • Tested and validated API functionality using Postman 
            

          </p>

          <div className="tech-stack">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>REST API</span>
            <span>Error Handling</span>
            <span>Postman</span>
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

      </div>
    </section>
  );
}