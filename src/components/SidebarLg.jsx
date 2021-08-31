/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import { Link } from "react-scroll";
import Myself from "./static/Myself";

const SidebarLg = () => {
  return (
    <div class="sidebarLg animate__rotateInDownLeft animate__animated animate__slow">
      <h1>╰─$ ls Profile</h1>
      {
        Myself[0].map((item) => {
          return(
            <div>
          <Link to={item[0]} activeClass="active" spy={true} smooth={true}>
            {item[0]}
           </Link>
      </div>

          )
        })
      }

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
