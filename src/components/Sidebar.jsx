/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import GitHubIcon from '@material-ui/icons/GitHub';

const Sidebar = () => {
  return (
    <div class="sidebar">
     <h1>╰─$ ls Sidebar</h1>
      <div>About Me</div>
      <div>Education</div>
      <div>Skills</div>
      <div>Interests</div>
      <div>Achievments</div>
      <center>
      <hr />
      </center>
      <article className="icon">
         <GitHubIcon style={{ fontSize : "3.3em"}} />
      </article>
      <span style={{fontSize : "3em", textAlign : "center", color : "rgb(216, 216, 216)" , marginTop : "1em"}}>&copy;</span>
      <p>
        Priyansh Vyas, 2021.
       </p>
    </div>
  );
};

export default Sidebar;
