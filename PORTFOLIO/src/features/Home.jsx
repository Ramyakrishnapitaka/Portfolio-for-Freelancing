import React from "react";
import "../App.css";
import radhikapic from "../images/Radhika.jpg"
import { Link, useNavigate } from "react-router-dom";

function Home(){
    var navigate=useNavigate();
    function contact(){
        navigate("/Contact.jsx")
    }
    function resume(){
        navigate("/Skills.jsx")
    }
    return(
    <div  class="container" >
        
        <div class="homediv" >
               <h1 >Hi, I'm Kottu Radhika <span className="wave" > &#128075;</span> </h1>
               <br/>
               <p >
                  Aspiring software developer skilled in  <strong>HTML,CSS,JS,ReactJS,Node.js,Express.Js and MongoDB.</strong>
                  Passionate about building clean,responsive, and user-friendly web applications.   
               </p >
               <p > As a fresher, I focus on writing clean, efficient code and continuously improving my problem-solving skills.
                I enjoy turning ideas into functional products, and I am eager to contribute to real-world projects where I can learn and grow while delivering value to the team.</p>
                <br/>
               <Link to="contactpage" ><button className="btn btn-primary rounded-pill m-2" onClick={()=>{contact()}}><i class="bi bi-telephone-fill text-white"></i> CONTACT ME</button></Link>
                <Link to="resumepage" ><button className="btn btn-success rounded-pill m-2" onClick={()=>{resume()}}><i class="bi bi-download text-white"></i> Download Resume</button></Link>


        </div>
        <div class="profile" >
            <img src={radhikapic} alt="Radhika_photo" className="image-fluid rounded-circle border-info ms-4 bg-info"  style={{width:"250px" ,height:"250px"}}/>    
        </div>
    </div>
    )

}
export default Home
