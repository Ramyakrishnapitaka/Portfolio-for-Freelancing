import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
           <a className="navbar-brand text-white ms-5" href="#">Kottu Radhika</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
           <ul className="navbar-nav">
           <li className="nav-item ">
           <Link className="nav-link text-white  " to="homepage" style={{marginLeft:"900px"}} >Home </Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white" to="aboutpage">About</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white" to="skillspage">Skills</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white" to="projectpage">Project</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link text-white" to="resumepage">Resume</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link text-white" to="contactpage">Contact</Link>
           </li>
           </ul>
           </div>
           </nav>


        </>

    )

}
export default Navbar