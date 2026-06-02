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

          <h3>AWS Multi-Tier Infrastructure Automation with Terraform</h3>

          <p>
          Designed and deployed a scalable AWS infrastructure using Terraform.The environment includes
          networking, compute, storage, monitoring, and security services managed through Infrastructure as Code (IaC).
          </p>

          <p className="project-highlights">
            • Provisioned AWS infrastructure using Terraform. <br />
            • Configured VPC, EC2, Load Balancer, and Auto Scaling. <br />
            • Implemented monitoring using CloudWatch and SNS. <br />
            • Managed secure access with IAM roles and policies. <br />
            • Automated cloud deployments using Infrastructure as Code
    
            

          </p>

          <div className="Technologies">
            <span>AWS</span>
            <span>Terraform</span>
            <span>EC2</span>
            <span>VPC</span>
            <span>IAM</span>
            <span>CloudWatch</span>
            <span>SNS</span>
            <span>RDS</span>
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

        {/* 🥈 Clinic Scheduler API */}
        <div className="project-card">
          <h3>Linux Infrastructure Automation with Ansible</h3>

          <p>
            Automated Linux server administration tasks using Ansible and Bash scripting.
            The project streamlines server provisioning, software installation, user management, backups,
            and system maintenance to improve operational efficiency and consistency 
          </p>

          <p className="project-highlights">
            • Automated Linux server configuration using Ansible playbooks. <br />
            • Managed users, groups, permissions, and SSH access. <br />
            • Automated software installation and system updates. <br />
            • Implemented backup and maintenance workflows.<br />
            • Reduced manual administration through infrastructure automation.
            

          </p>

          <div className="Technologies">
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

        {/* 🥇 ClinicFlow */}
        <div className="project-card">
          <img
            src="/screenshots/dashboard.png"
            alt="ClinicFlow Dashboard"
            className="project-image"
          />

          <h3>ClinicFlow – Healthcare Management System</h3>

          <p>
           Built a full-stack healthcare management platform to streamline patient records, appointments, visits, and healthcare workflows.
           Developed secure REST APIs and integrated authentication for efficient healthcare operations.
          </p>

          <p className="project-highlights">
            • Developed patient and appointment management modules. <br />
            • Built secure REST APIs using Node.js and Express. <br />
            • Implemented JWT authentication and protected routes. <br />
            • Integrated MongoDB for data storage and retrieval. <br />
            • Designed a responsive React-based user interface.
    
          </p>

          <div className="Technologies">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT Authentication</span>
            <span>REST APIs</span>
            </div>

        {/* 🥈 movie finder */}
        <div className="project-card">
          <h3>Movie Finder</h3>

          <p>
             Developed a React application that allows users to search movies, view details,
             and manage favorites using external API integration.
          </p>

          <p className="project-highlights">
            • Integrated movie data from external APIs. <br />
            • Implemented search and filtering functionality. <br />
            • Managed application state with React Hooks. <br />
            • Added favorites feature using local storage. <br />
            • Created responsive user interface components.
            

          </p>

          <div className="Technologies">
            <span>React</span>
            <span>JavaScript</span>
            <span>API Integration</span>
            <span>CSS</span>
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