import React from "react";
import background from "@/assets/background.jpg";
import myself from "@/assets/myself.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import leetcode from "../assets/leetcode.svg";
import "animate.css";
import Image from "next/image";
import { Article, PictureAsPdf } from "@mui/icons-material";

const Imager = () => {
   const style = {
      color: "black",
      marginTop: "0.6em",
      marginRight: "1em",
      fontSize: "2.2em",
   };

   return (
      <div
         style={{
            marginBottom: "-5px",
         }}
      >
         <Image
            src={background}
            alt="the tech"
            style={{
               width: "100%",
               height: "100vh",
            }}
         />
         <div id="image">
            <Image
               className="avatar animate__zoomIn animate__animated animate__slow"
               alt="Priyansh"
               src={myself}
            />
            <h1 className="username">Priyansh Vyas</h1>
         </div>
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
               href="https://drive.google.com/file/d/1gkZX7HfxWX14wOAtYG8P3frRxzXRZBqo/view?usp=drive_link"
               target="_blank"
               rel="noreferrer"
            >
               <Article style={style} />
            </a>
            <a
               href="https://leetcode.com/priyansh71/"
               target="_blank"
               rel="noreferrer"
            >
               <Image
                  src={leetcode}
                  alt="leetcode"
                  style={{
                     ...style,
                     scale: "1.3",
                  }}
               />
            </a>
         </div>
      </div>
   );
};

export default Imager;
