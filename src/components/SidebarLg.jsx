/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import { Link } from "react-scroll";

const SidebarLg = () => {
  return (
    <div class="sidebarLg animate__rotateInDownLeft animate__animated animate__slow">
      <h1>╰─$ ls Profile</h1>
      <div>
        <Link to="Myself" activeClass="active" spy={true} smooth={true}>
          About Me
        </Link>
      </div>

      <div>
        <Link to="Learning" activeClass="active" spy={true} smooth={true}>
          Learning
        </Link>
      </div>

      <div>
        <Link to="TechStack" activeClass="active" spy={true} smooth={true}>
          TechStack
        </Link>
      </div>

      <div>
        <Link to="Projects" spy={true} smooth={true}>
          Projects
        </Link>
      </div>

      <div>
        <Link to="Achievments" spy={true} smooth={true}>
          Achievments
        </Link>
      </div>

      <div>
        <Link to="Interests" spy={true} smooth={true}>
          Interests
        </Link>
      </div>

      <div>
        <Link to="Certifications" spy={true} smooth={true}>
          Certifications
        </Link>
      </div>

      

      <div>Find me at..</div>
      <center>
        <hr className="white" />
      </center>
      <article
        style={{
          fontSize: "3em",
          textAlign: "center",
          color: "rgb(216, 216, 216)",
          marginTop: "0.7em",
        }}
      >
        &copy;
      </article>
      <p>Priyansh Vyas, 2021.</p>
    </div>
  );
};

export default SidebarLg;
