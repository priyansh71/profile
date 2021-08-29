/** @format */

import React from "react";
import "../App.css";
import "animate.css";

const SidebarLg = () => {
  return (
    <div class="sidebarLg animate__rotateInDownLeft animate__animated animate__slow">
     <h1>╰─$ ls Profile</h1>
      <div>About Me</div>
      <div>Learning</div>
      <div>Projects</div>
      <div>Achievments</div>
      <div>Interests</div>
      <div>Certifications</div>
      <div>Find me at..</div>
      <center>
      <hr className="white" />
      </center>
      <span style={{fontSize : "3em", textAlign : "center", color : "rgb(216, 216, 216)" , marginTop : "0.7em"}}>&copy;</span>
      <p>
        Priyansh Vyas, 2021.
       </p>
    </div>
  );
};

export default SidebarLg;
