export default function Projects() {
  return (
    <section style={{ padding: "40px" }}>
      <h2>Projects</h2>

      <div>
        <h3>ClinicFlow</h3>

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
    </section>
  );
}