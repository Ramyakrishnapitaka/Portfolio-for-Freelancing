import React from "react";
import "../App.css";

function Skills() {
   const skillsData = [
  { name: "HTML & CSS", percent: 95, color: "bg-success" },
  { name: "JavaScript", percent: 85, color: "bg-warning" },
  { name: "React.js", percent: 80, color: "bg-info" },
  { name: "MongoDB", percent: 75, color: "bg-danger" },
  {name:"NodeJs & ExpressJs",percent:70,color:"bg-primary"}
 ];
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <p>Fresher MERN Developer skilled in front-end and back-end technologies.</p>

      {/* Skill badges */}
      <div className="skill-badges">
        <span className="badge html">HTML</span>
        <span className="badge css">CSS</span>
        <span className="badge bootstrap">Bootstrap</span>
        <span className="badge js">JavaScript</span>
        <span className="badge react">ReactJS</span>
        <span className="badge node">NodeJS</span>
        <span className="badge express">ExpressJS</span>
        <span className="badge mongo">MongoDB</span>
      </div>

      {/* Skill categories */}
      <div className="skill-cards">
        <div className="skill-card">
          <h3>Frontend Development</h3>
          <ul>
            <li>Modern HTML & CSS Practices</li>
            <li>Responsive Web Design (Bootstrap)</li>
            <li>Interactive UIs with ReactJS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend Development</h3>
          <ul>
            <li>API Development with Node & Express</li>
            <li>Database Management with MongoDB</li>
            <li>Understanding MERN Architecture</li>
          </ul>
        </div>
         <div className="skill-card">
        <h3>MongoDB (MERN Stack)</h3>
         <ul>
      <li>Designing and Modeling Schemas with Mongoose</li>
       <li>CRUD Operations with MongoDB</li>
       <li>Integrating MongoDB with Express & Node.js</li>
      <li>Optimizing Queries for Performance</li>
        
      </ul>
     </div>

      </div>
      <div className="skills-section p-4 bg-white rounded-4 shadow-sm mx-auto m-5" style={{ maxWidth: "500px" }}>
       
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="fw-semibold mb-1">{skill.name}</div>
            <div className="progress" style={{ height: "20px", borderRadius: "10px" }}>
              <div
                className={`progress-bar ${skill.color}`}
                role="progressbar"
                style={{ width: `${skill.percent}%` }}
                aria-valuenow={skill.percent}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.percent}%
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Skills;
