export default function Projects() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Projects</h2>

      <div>
        <h3>PROJECT 1 -ClinicFlow</h3>

        <img
          src="/screenshots/dashboard.png"
          alt="ClinicFlow Dashboard"
          style={{
            width: "600px",
            maxWidth: "100%",
            display: "block",
            border: "2px solid red",
            margin: "20px 0"
          }}
        />

        <p>
          Full-stack healthcare management application for managing patients,
          visits, and medication lookup.
        </p>

        <p>Tech: React, Node.js, Express, MongoDB, JWT</p>

<p className="demo-credentials">
  Demo Login: <br />
  Email: demo@clinicflow.com <br />
  Password: Password123!
</p>

        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="https://github.com/mbafousu/ClinicFlow"
            target="_blank"
            rel="noreferrer"
             className="github-btn"
          >
            GitHub
          </a>

          <a
            href="https://clinicflow-frontend-app.onrender.com"
            target="_blank"
            rel="noreferrer"
            className="live-btn"
      
          >
            Live Demo
          </a>
        </div>
      </div>
      
      <div className="project-card">
        <h3>PROJECT 2 -Movie Finder</h3>

        <img
          src="/screenshots/movie.png"
          alt="Movie Finder"
          className="main-image"
        />

        <p>
          Movie search application that allows users to find movies,
          view details, and explore trending content.
        </p>

        <p>Tech: React, API Integration, CSS</p>

        <div className="project-links">
        
          <a
            href="https://github.com/mbafousu/Movie_Finder.git"
            target="_blank"
          >
            GitHub
          </a>

           <a
            href="https://movie-finder-app-m6no.onrender.com"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}