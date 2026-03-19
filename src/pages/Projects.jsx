export default function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="project">

        <h3>ClinicFlow</h3>

        <p>
          Full-stack healthcare management application for managing patients,
          visits, and medication lookup.
        </p>

        <p>
          Tech: React, Node.js, Express, MongoDB, JWT
        </p>

        <a href="https://github.com">GitHub</a>

      </div>

      <div className="project">

        <h3>VitalTrack</h3>

        <p>
          Patient vital monitoring dashboard for tracking temperature,
          blood pressure, pulse, and oxygen saturation.
        </p>

        <p>
          Tech: React, Node.js, MongoDB
        </p>

      </div>

      <div className="project">

        <h3>DrugInfo</h3>

        <p>
          Medication search application that integrates the OpenFDA API
          to retrieve drug safety and dosage information.
        </p>

        <p>
          Tech: React, REST API
        </p>

      </div>

    </section>
  );
}