import React from "react";

function Contact() {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=ramyakrishnapitaka71@gmail.com",
      "_blank"
    );
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="contact-card text-center p-4 shadow rounded">

        <h2 className="contact-title mb-3">Work With Me</h2>
        <p className="contact-subtitle mb-4">
          Have a project in mind or need a React / Frontend developer?
          I'm available for freelance work — let's discuss your idea.
        </p>

        <div className="contact-location mb-4">
          <i className="bi bi-geo-alt-fill location-icon me-2"></i>
          <span>Hyderabad, Telangana</span>
        </div>

        <button className="btn btn-primary mb-3" onClick={handleClick}>
          Contact Me via Email
        </button>

        <div className="contact-phone mb-4">
          <i className="bi bi-telephone-fill me-2"></i>
          <a
            href="tel:+918019433693"
            className="text-decoration-none fw-semibold"
          >
            +91-8019433693
          </a>
        </div>

        <p className="mb-4 ">
          I usually reply within a few hours.
        </p>

        <div className="social-icons d-flex justify-content-center gap-3">
          <a
            href="https://github.com/Ramyakrishnapitaka"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary rounded-circle p-2"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/ramya-krishna-pitaka-325a74249/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary rounded-circle p-2"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;
