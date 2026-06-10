import "../styles/projects.css";

export default function Projects() {
  return (
    <section className="projects-page">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {/* AWS */}
        <div className="project-card">
          <img
            src="/screenshots/dynamodb-table.png"
            alt="AWS Infrastructure Project"
            className="project-image"
          />

          <h3>ClinicFlow AWS Cloud Platform</h3>

          <p>
           A cloud-native healthcare appointment management platform built on AWS using Terraform and serverless technologies.
          The application leverages Amazon API Gateway, AWS Lambda, and DynamoDB to manage appointment data, while Amazon S3 and CloudFront provide scalable frontend hosting and content delivery.
          CloudWatch and SNS were implemented for monitoring, logging, and automated alerting.
          </p>

          <p className="project-highlights">
            • Automated AWS infrastructure deployment using Terraform <br />
            • Serverless REST API for appointment management <br />
            • DynamoDB-based appointment storage <br />
            • CloudWatch monitoring and logging <br />
            • SNS email notifications and alerts <br />
            • Scalable frontend hosting with S3 and CloudFront <br />
            • Infrastructure as Code (IaC) implementation.
          </p>

          <div className="tech-stack">
            <span>Terraform</span>
            <span>AWS Lambda</span>
            <span>DynamoDB</span>
            <span>Amazon CloudFront</span>
            <span>Amazon S3</span>
            <span>CloudWatch</span>
            <span>AWS IAM</span>
            <span>API Gateway</span>
            <span>SNS</span>
            <span>IAM</span>
            <span>Python</span>
            <span>React</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/ClinicFlow-AWS-Cloud-Platform"
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

        {/* BOOKING PORTAL */}
        <div className="project-card">
          <img
            src="/screenshots/booking-portal.png"
            alt="ClinicFlow Online Booking Portal"
            className="project-image"
          />
          <h3>ClinicFlow Online Booking Portal</h3>

          <p>
            A healthcare appointment booking application built with React that allows patients to schedule, view, and manage appointments through an intuitive user interface.
            The application provides appointment management functionality and demonstrates modern frontend development practices
          </p>

          <p className="project-highlights">
            • Appointment scheduling and management <br />
            • Patient-friendly booking interface <br />
            • Dynamic data rendering <br />
            • Responsive design <br />
            • Component-based architecture <br />
            • API integration for appointment data
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>REST API</span>
            <span>CSS</span>
            <span>Vite</span>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/mbafousu/clinicflow-booking-portal"
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