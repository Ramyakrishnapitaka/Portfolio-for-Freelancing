import React from "react";

function Contact(){
    return(

        <div className="container my-5 d-flex justify-content-center">
      <div className="contact-card text-center">
        {/* Heading */}
        <h2 className="contact-title">Let’s Connect</h2>
        <p className="contact-subtitle">
          Interested in working together? Let’s start a conversation.
        </p>

        {/* Location */}
        <div className="contact-location">
          <i className="bi bi-geo-alt-fill location-icon"></i>
          <span>Hyderabad ,Telangana</span>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <a href="mailto:youremail@example.com" className="btn contact-btn-primary">
            <i className="bi bi-envelope-fill me-2"></i> Get in Touch
          </a>
        
        </div>
        {/* Social Icons */}
        <div className="social-icons mt-4">
          <a href="https://github.com/KottuRadhika" target="_blank" rel="noopener noreferrer" className="social-circle">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/radhika-kottu-8b160a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-circle">
            <i className="bi bi-linkedin"></i>
          </a>
          
        </div>
      </div>
    </div>
        
    )

}
export default Contact