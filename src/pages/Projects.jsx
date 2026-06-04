import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-page">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {/* AWS */}
        <div className="project-card">
          <img
            src="/screenshots/dashboard.png"
            alt="AWS Infrastructure Project"
            className="project-image"
          />

          <h3>AWS Serverless User Registration API with Terraform</h3>

          <p>
           Built and deployed a cloud-native user registration application on AWS using Terraform for Infrastructure as Code (IaC).
           The project automates infrastructure deployment and provides a scalable serverless backend for user registration and data management.
          </p>

          <p className="project-highlights">
            • Built and deployed a serverless user registration system on AWS using Terraform. <br />
            • Created REST APIs with API Gateway and Lambda functions. <br />
            • Integrated Amazon RDS PostgreSQL for user data management. <br />
            • Configured CloudFront, S3, IAM, and CloudWatch for secure delivery, monitoring, and logging. <br />
            • Automated infrastructure provisioning using Infrastructure as Code (Terraform).
          </p>

          <div className="tech-stack">
            <span>Terraform</span>
            <span>AWS Lambda</span>
            <span>Amazon RDS PostgreSQL</span>
            <span>Amazon CloudFront</span>
            <span>Amazon S3</span>
            <span>CloudWatch</span>
            <span>AWS IAM</span>
            <span>API Gateway</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/ClinicFlow"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Linux */}
        <div className="project-card">
          <h3>Linux Infrastructure Automation with Ansible</h3>

          <p>
            Automated Linux server administration tasks using Ansible and Bash
            scripting. The project streamlines server provisioning, software
            installation, user management, backups, and system maintenance.
          </p>

          <p className="project-highlights">
            • Automated Linux server configuration using Ansible playbooks. <br />
            • Managed users, groups, permissions, and SSH access. <br />
            • Automated software installation and system updates. <br />
            • Implemented backup and maintenance workflows. <br />
            • Reduced manual administration through infrastructure automation.
          </p>

          <div className="tech-stack">
            <span>Linux</span>
            <span>Ansible</span>
            <span>Bash</span>
            <span>SSH</span>
            <span>Cron</span>
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

        {/* ClinicFlow */}
        <div className="project-card">
          <img
            src="/screenshots/dashboard.png"
            alt="ClinicFlow Dashboard"
            className="project-image"
          />

          <h3>ClinicFlow – Healthcare Management System</h3>

          <p>
            Built a full-stack healthcare management platform to streamline
            patient records, appointments, visits, and healthcare workflows.
            Developed secure REST APIs and integrated authentication for
            efficient healthcare operations.
          </p>

          <p className="project-highlights">
            • Developed patient and appointment management modules. <br />
            • Built secure REST APIs using Node.js and Express. <br />
            • Implemented JWT authentication and protected routes. <br />
            • Integrated MongoDB for data storage and retrieval. <br />
            • Designed a responsive React-based user interface.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT Authentication</span>
            <span>REST APIs</span>
          </div>

          <p className="demo-credentials">
            Demo Login: <br />
            Email: demo@clinicflow.com <br />
            Password: Password123!
          </p>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/ClinicFlow.git"
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
              className="btn primary"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Movie Finder */}
        <div className="project-card">
          <h3>Movie Finder</h3>

          <p>
            Developed a React application that allows users to search movies,
            view details, and manage favorites using external API integration.
          </p>

          <p className="project-highlights">
            • Integrated movie data from external APIs. <br />
            • Implemented search and filtering functionality. <br />
            • Managed application state with React Hooks. <br />
            • Added favorites feature using local storage. <br />
            • Created responsive user interface components.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>API Integration</span>
            <span>CSS</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/Movie_Finder"
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