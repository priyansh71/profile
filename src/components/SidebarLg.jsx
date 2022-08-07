import React from "react";
import "animate.css";
import { Link } from "react-scroll";
import Myself from "../assets/Myself.json";

const SidebarLg = () => {
   return (
      <div className="sidebarLg animate__rotateInDownLeft animate__animated animate__slow">
         <h1>
            <Link to="image" spy={true} smooth={true}>
               ╰─$ ls Profile
            </Link>
         </h1>
         {Object.keys(Myself).map((item, index) => {
            return (
               <div key={index}>
                  <Link
                     to={item}
                     activeClass="active"
                     offset={-100}
                     spy={true}
                     smooth={true}
                  >
                     {item}
                  </Link>
               </div>
            );
         })}
         <center>
            <hr className="white" />
         </center>
         <article
            style={{
               fontSize: "3em",
               textAlign: "center",
               color: "rgb(216, 216, 216)",
            }}
         >
            &copy;
         </article>
         <p>Coded by Priyansh.</p>
      </div>
   );
};

export default SidebarLg;
