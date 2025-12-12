import React from "react";
import radhikaresume from "../pdf/Kottu Radhika's CV.pdf";

function Resume() {
  return (
    <div className="text-center my-5">
      <h2>My Resume</h2>
      <a href={radhikaresume} download className="btn btn-primary">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;

