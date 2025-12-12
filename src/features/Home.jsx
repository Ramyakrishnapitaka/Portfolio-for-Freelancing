import React from "react";
import { useNavigate, Link } from "react-router-dom";
import alogo from '../images/frontendfreelance.png';

function Home() {
  const navigate = useNavigate();

  const contact = () => {
    navigate("/Contact.jsx");
  };

  const resume = () => {
    navigate("/Skills.jsx");
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <p className="intro fs-5">
            Hi, I’m <strong>Pitaka Ramyakrishna</strong>
          </p>

          <h2 className="fw-bold mt-2">Frontend & React Developer</h2>

          <p className="description mt-3">
            I build clean, fast, and responsive web interfaces using 
            <strong> React, JavaScript, HTML, CSS, and Bootstrap.</strong>  
            I help businesses and individuals bring their ideas to life with 
            <span className="highlight"> modern UI, smooth interactions,</span> 
            and high-quality frontend development.
            <br /><br />
            I also work with the MERN stack, enabling me to handle 
            <span className="highlight"> full-stack features</span> when needed.
            Whether it’s a landing page, portfolio, dashboard, or complete web app—
            I can build it from scratch with clean and optimized code.
          </p>

          <div className="d-flex mt-4">
            <Link to="contactpage">
              <button className="btn btn-primary rounded-pill me-2" onClick={contact}>
                <i className="bi bi-telephone-fill text-white"></i> Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={alogo}
            alt="Developer Illustration"
            className="img-fluid rounded-4 border border-info p-2"
            style={{ width: "420px", height: "420px" }}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
