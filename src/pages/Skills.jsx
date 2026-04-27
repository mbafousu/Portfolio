export default function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-group">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>JWT Authentication & Authorization</li>
            <li>Middleware</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Tools & Technologies</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>Render</li>
          </ul>
        </div>

      </div>
    </section>
  );
}