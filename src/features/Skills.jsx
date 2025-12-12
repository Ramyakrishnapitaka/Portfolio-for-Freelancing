// import React from "react";
// import "../App.css";

// function Skills() {
//   const skillsData = [
//     { name: "HTML & CSS", percent: 90, color: "bg-success" },
//     { name: "JavaScript", percent: 80, color: "bg-warning" },
//     { name: "React.js", percent: 80, color: "bg-info" },
//     { name: "MongoDB", percent: 75, color: "bg-danger" },
//     { name: "NodeJs & ExpressJs", percent: 70, color: "bg-primary" },
//   ];

//   return (
//     <div className="skills-section">
//       <h2>My Skills</h2>
//       <p>
//         Fresher MERN Developer skilled in front-end, back-end, and database
//         technologies.
//       </p>

//       <div className="skill-badges">
//         <span className="badge html">HTML</span>
//         <span className="badge css">CSS</span>
//         <span className="badge bootstrap">Bootstrap</span>
//         <span className="badge js">JavaScript</span>
//         <span className="badge react">ReactJS</span>
//         <span className="badge node">NodeJS</span>
//         <span className="badge express">ExpressJS</span>
//         <span className="badge mongo">MongoDB</span>
//       </div>
//       <div className="skill-cards">
//         <div className="skill-card">
//           <h3>Frontend Development</h3>
//           <ul>
//             <li>Modern HTML & CSS Practices</li>
//             <li>Responsive Web Design (Bootstrap)</li>
//             <li>Interactive UIs with ReactJS</li>
//             <li>State Management (Redux Toolkit)</li>
//             <li>Form Handling (Formik, Yup)</li>
//           </ul>
//         </div>

//         <div className="skill-card">
//           <h3>Backend Development</h3>
//           <ul>
//             <li>API Development with Node & Express</li>
//             <li>Authentication & Authorization (JWT, Bcrypt)</li>
//             <li>Middleware & RESTful APIs</li>
//             <li>Server-side Rendering Basics</li>
//           </ul>
//         </div>

//         <div className="skill-card">
//           <h3>Database (MongoDB)</h3>
//           <ul>
//             <li>Designing and Modeling Schemas with Mongoose</li>
//             <li>CRUD Operations with MongoDB</li>
//             <li>Integrating MongoDB with Express & Node.js</li>
//             <li>Optimizing Queries for Performance</li>
//           </ul>
//         </div>

        
//       </div>
//       <div
//         className="skills-section p-4 bg-white rounded-4 shadow-sm mx-auto m-5"
//         style={{ maxWidth: "500px" }}
//       >
//         {skillsData.map((skill, index) => (
//           <div key={index} className="mb-4">
//             <div className="fw-semibold mb-1">{skill.name}</div>
//             <div
//               className="progress"
//               style={{ height: "20px", borderRadius: "10px" }}
//             >
//               <div
//                 className={`progress-bar ${skill.color}`}
//                 role="progressbar"
//                 style={{ width: `${skill.percent}%` }}
//                 aria-valuenow={skill.percent}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 {skill.percent}%
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Skills;




import React from "react";
import "../App.css";

function Skills() {
  const skillsData = [
    { name: "HTML & CSS", percent: 95, color: "bg-success" },
    { name: "JavaScript", percent: 90, color: "bg-warning" },
    { name: "React.js", percent: 90, color: "bg-info" },
    { name: "MongoDB", percent: 80, color: "bg-danger" },
    { name: "Node.js & Express.js", percent: 80, color: "bg-primary" },
  ];

  return (
    <div className="skills-section my-5">

      <h2 className="text-center mb-3">My Skills</h2>
      <p className="text-center mb-4">
        I specialize in building responsive, user-friendly web applications with modern frontend and full-stack technologies.  
        My expertise allows me to deliver high-quality solutions for clients efficiently.
      </p>

      {/* Skill Badges */}
      <div className="skill-badges text-center mb-5">
        <span className="badge html me-2">HTML</span>
        <span className="badge css me-2">CSS</span>
        <span className="badge bootstrap me-2">Bootstrap</span>
        <span className="badge js me-2">JavaScript</span>
        <span className="badge react me-2">ReactJS</span>
        <span className="badge node me-2">NodeJS</span>
        <span className="badge express me-2">ExpressJS</span>
        <span className="badge mongo me-2">MongoDB</span>
      </div>

      {/* Skill Cards */}
      <div className="skill-cards row justify-content-center mb-5">
        <div className="skill-card col-md-4 mb-4 shadow-sm p-3 rounded">
          <h3 className="mb-3">Frontend Development</h3>
          <ul>
            <li>Modern HTML & CSS Practices</li>
            <li>Responsive Web Design (Bootstrap)</li>
            <li>Interactive UIs with React.js</li>
            <li>State Management (Context API / Redux Toolkit)</li>
            <li>Form Handling & Validation (Formik, Yup)</li>
          </ul>
        </div>

        <div className="skill-card col-md-4 mb-4 shadow-sm p-3 rounded">
          <h3 className="mb-3">Backend Development</h3>
          <ul>
            <li>RESTful APIs with Node.js & Express</li>
            <li>User Authentication & Authorization (JWT, Bcrypt)</li>
            <li>Middleware Implementation & Server Logic</li>
            <li>Integrating Frontend & Backend Efficiently</li>
          </ul>
        </div>

        <div className="skill-card col-md-4 mb-4 shadow-sm p-3 rounded">
          <h3 className="mb-3">Database & Data Management</h3>
          <ul>
            <li>Schema Design & Modeling with MongoDB & Mongoose</li>
            <li>CRUD Operations & Data Validation</li>
            <li>Optimized Queries for Performance</li>
            <li>Integration with Node.js & Express Applications</li>
          </ul>
        </div>
      </div>

      {/* Skill Bars */}
      <div
        className="skills-bars p-4 bg-white rounded-4 shadow-sm mx-auto"
        style={{ maxWidth: "600px" }}
      >
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="fw-semibold mb-1">{skill.name}</div>
            <div
              className="progress"
              style={{ height: "20px", borderRadius: "10px" }}
            >
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
