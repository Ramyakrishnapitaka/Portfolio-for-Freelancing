
import React from "react";
import "../App.css";

function Projects() {
  return (
    <div className="project-container mt-5">
      <div className="project-card mb-5">
        <h2 className="text-primary mb-3">Course Management – React Application</h2>
        <h5 className="text-muted">
          Frontend Project | React, Context API, React Router
        </h5>
        <hr />

        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Built a fully responsive course management interface with clean and modern UI.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Implemented <strong>dynamic search, category filtering,</strong> and enrollment tracking.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Used <strong>Context API</strong> to manage global state efficiently without prop drilling.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Designed progress indicators and dashboards for a smoother user experience.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Integrated multiple pages using <strong>React Router</strong> with clean navigation.
          </li>
        </ul>

        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">React</span>
          <span className="badge bg-success me-2">React Router</span>
          <span className="badge bg-info text-dark me-2">Context API</span>
          <span className="badge bg-warning text-dark me-2">Bootstrap</span>
          <span className="badge bg-secondary text-white">CSS</span>
        </div>

        <div className="mt-3">
          <a
            href="https://github.com/Ramyakrishnapitaka/React-Course-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            View GitHub Code
          </a>
          <a
            href="https://react-upskilledcourse-project.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div className="project-card">
        <h2 className="text-primary mb-3">Feedback Management – Full Stack Application</h2>
        <h5 className="text-muted">
          MERN Stack | Real-time Admin Dashboard
        </h5>
        <hr />

        <ul className="list-unstyled project-details">
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Developed a complete user feedback system with authentication and secure data handling.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Users can submit feedback, edit comments, and manage their responses.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Built an <strong>admin dashboard</strong> that allows replying to feedback in real time.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Applied <strong>Formik + Yup</strong> for strong validation and error handling.
          </li>
          <li>
            <i className="bi bi-check-circle-fill text-info me-2"></i>
            Designed clean UI with rating colors, status tags, and organized components.
          </li>
        </ul>

        <div className="tech-stack mt-3">
          <h6>Technologies Used:</h6>
          <span className="badge bg-primary me-2">React.js</span>
          <span className="badge bg-success me-2">Node.js</span>
          <span className="badge bg-info text-dark me-2">Express</span>
          <span className="badge bg-warning text-dark me-2">MongoDB</span>
          <span className="badge bg-secondary text-white">Formik & Yup</span>
          <span className="badge bg-dark me-2">CSS</span>
        </div>

        <div className="mt-3">
          <a href="https://github.com/Ramyakrishnapitaka/FeedbackBackend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-warning m-2"
          >
            Backend Code
          </a>
          <a
            href="https://github.com/Ramyakrishnapitaka/FeedbackFrontend"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info m-2"
          >
            Frontend Code
          </a>
        </div>
      </div>

<div className="project-card mt-5">
  <h2 className="text-primary mb-3">Task Tracker – Full Stack Application</h2>
  <h5 className="text-muted">
    MERN Stack | Task Management System
  </h5>
  <hr />

  <ul className="list-unstyled project-details">
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Built a complete task management app with user-friendly UI and clean workflow.
    </li>
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Users can <strong>add, edit, delete</strong> tasks and track their daily activities.
    </li>
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Backend built with <strong>Node.js & Express</strong> to handle CRUD APIs securely.
    </li>
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Tasks are stored in <strong>MongoDB</strong> using Mongoose models for efficient data handling.
    </li>
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Fully responsive frontend built using <strong>React.js + CSS</strong>.
    </li>
    <li>
      <i className="bi bi-check-circle-fill text-info me-2"></i>
      Implemented proper folder structure for scalability and maintainability.
    </li>
  </ul>

  <div className="tech-stack mt-3">
    <h6>Technologies Used:</h6>
    <span className="badge bg-primary me-2">React.js</span>
    <span className="badge bg-success me-2">Node.js</span>
    <span className="badge bg-info text-dark me-2">Express.js</span>
    <span className="badge bg-warning text-dark me-2">MongoDB</span>
    <span className="badge bg-secondary me-2">CSS</span>
    
  </div>

  <div className="mt-3">
    <a
      href="https://github.com/Ramyakrishnapitaka/Task-Tracker-App"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-warning m-2"
    >
    View Code
    </a>
    
    <a
      href="https://task-tracker-app-1-d1pu.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-primary m-2"
    >
      Live Demo
    </a>
  </div>
</div>


    </div>
  );
}

export default Projects;
