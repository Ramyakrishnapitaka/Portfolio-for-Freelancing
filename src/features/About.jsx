import React from 'react';
import '../App.css';
import alogo from '../images/frontendfreelance.png';
import { useNavigate, Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const project = () => {
    navigate("/Project.jsx");
  };

  return (
    <div className="d-flex flex-column flex-md-row about-container">
      <div className="sidebar text-center p-3">
        <img src={alogo} alt="Profile" className="profile-img mb-3" />

        <ul className="nav-links list-unstyled">
          <li>
            <Link to="projectpage">
              <button className="btn btn-success rounded-pill" onClick={project}>
                <i className="bi bi-collection text-white"></i> View My Work
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="about-content flex-grow-1 p-4">
        
        <div className="badge bg-danger text-white mb-3 px-3 py-2">
          <i className="fas fa-user-circle me-2"></i> About Me
        </div>

        <h2 className="fw-bold">Hey, I'm PITAKARAMYAKRISHNA</h2>

        <p className="about-text mt-3">
          I'm a passionate 
          <span className="highlight"> Frontend & React Developer</span> 
           helping businesses turn ideas into 
          <span className="highlight"> clean, fast, and responsive</span> 
           web experiences.
          <br /><br />
          I specialize in building high-quality user interfaces using 
          <span className="highlight">  React, JavaScript, HTML, CSS, and Bootstrap</span>.
          I focus on performance, responsive layouts, and delivering a 
          <span className="highlight">  smooth user experience</span> that works across all devices.
          <br /><br />
          I also have solid MERN stack knowledge, enabling me to handle both
          frontend and full-stack projects when required.
        </p>

        <hr />

        
        <h5 className="text-primary">What I Can Do For You</h5>

        <div className="row mt-3">
          <div className="col-md-6">
            <ul className="checklist">
              <li>Build responsive React applications</li>
              <li>Fix bugs & improve performance</li>
              <li>API integration & frontend logic</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="checklist">
              <li>Build landing pages & portfolio sites</li>
              <li>Reusable components development</li>
              <li>Full deployment</li>
            </ul>
          </div>
        </div>

        <hr />

       
        <h5 className="text-primary">Why Clients Work With Me</h5>

        <div className="row">
          <div className="col-md-6">
            <ul className="checklist">
              <li>Clean, maintainable code</li>
              <li>Timely delivery</li>
              <li>Strong problem-solving ability</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className="checklist">
              <li>Good communication</li>
              <li>Pixel-perfect UI development</li>
              <li>Dedicated & quick learner</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;
