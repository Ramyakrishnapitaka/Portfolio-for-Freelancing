import React from "react";
import "../App.css"

function About(){


    return(
        <div class="container1"> 
           <section class="skills">
            <h2>What I do</h2>
            <p class="info">
            CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
          </p>

         <div class="skills-grid">
         <div class="skill">
         <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML5" />
         <span>html-5</span>
           </div>
         <div class="skill">
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="CSS3" />
         <span>css3</span>
        </div>
         <div class="skill">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Bootstrap" />
      <span>Bootstrap</span>
    </div>
      
     <div class="skill">
      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
      <span>JavaScript</span>
    </div>
    <div class="skill">
      <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="ReactJS" />
      <span>reactjs</span>
    </div>
    <div className="skill">
            <img src="https://himanshu60.github.io/images/expressjs_logo.png" alt="ExpressJS" />
            <span>ExpressJS</span>
          </div>
          <div class="skill">
      <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="NodeJS" />
      <span>nodejs</span>
    </div>
    <div class="skill">
      <img src="https://tse3.mm.bing.net/th/id/OIP.nCw3mu9Umiz5JmvMQJ7PAwHaHY?pid=Api&P=0&h=180" alt="SQL" />
      <span>MongoDB</span>
    </div>
   </div>
   </section>
           
           
  <div class="container1_inner1" >                                                                                                                                                       
            <p>
             Hello! I’m Kottu Radhika, an enthusiastic MERN Stack Developer with a strong interest in web technologies.
             I enjoy transforming ideas into interactive and responsive applications using React.js, Node.js, Express.js, and MongoDB.
            </p>
            <br/>
            <p>
              Beyond coding, I love exploring problem-solving challenges, continuously learning new tools, and improving my skills to stay updated with modern development practices.
              My goal is to contribute to impactful projects, grow as a developer, and deliver value to the teams I work with.
            </p>
           </div>
        </div>
    )

}
export default About