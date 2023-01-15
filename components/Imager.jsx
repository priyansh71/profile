import React from "react";
import { Parallax } from "react-parallax";
import myself from "@/assets/myself.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import background from "@/assets/background.jpg";
import spotify from "../assets/spotify.svg";
import "animate.css";
import Image from "next/image";

const Imager = () => {
   const style = {
      color: "white",
      marginTop: "0.6em",
      marginRight: "1em",
      fontSize: "2.2em",
   };

   return (
      <div>
         <Parallax
            bgImage={background.src}
            bgImageAlt="the tech"
            strength={300}
         >
            <div className="heighter" id="image">
               <Image
                  className="avatar animate__zoomIn animate__animated animate__slow"
                  alt="Priyansh"
                  src={myself}
               />
               <h1 className="username">Priyansh Vyas</h1>
            </div>
         </Parallax>
         <div className="navicons">
            <a
               href="https://github.com/priyansh71"
               target="_blank"
               rel="noreferrer"
            >
               <GitHubIcon style={style} />
            </a>
            <a
               href="https://www.linkedin.com/in/priyansh-vyas/"
               target="_blank"
               rel="noreferrer"
            >
               <LinkedInIcon style={style} />
            </a>
            <a
               href="mailto:priyansh710@outlook.com"
               target="_blank"
               rel="noreferrer"
            >
               <MailOutlineIcon style={style} />
            </a>
            <a
               href="https://open.spotify.com/user/31p63gpkkyycyxyujobxyhki6pc4"
               target="_blank"
               rel="noreferrer"
            >
               <Image src={spotify} alt="spotify" style={style} />
            </a>
         </div>
      </div>
   );
};

export default Imager;
