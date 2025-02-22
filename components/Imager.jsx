import React from "react";
import background from "@/assets/background.jpg";
import myself from "@/assets/myself.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "animate.css";
import Image from "next/image";
   import { Article } from "@mui/icons-material";

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
              alt="Tech Background"
              style={{
               width : "100%",
               height : "100vh",
               objectFit : "cover"
              }}
              quality={80} // Increases performance without losing much quality
              priority
              placeholder="blur"
         />
         <div id="image">
            <Image
               className="avatar animate__zoomIn animate__animated animate__slow"
               alt="Priyansh"
               src={myself}
            />
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
               href="mailto:priyanshvyas710@gmail.com"
               target="_blank"
               rel="noreferrer"
            >
               <MailOutlineIcon style={style} />
            </a>
            <a
               href="https://drive.google.com/file/d/1UU7gRnP7LMwGDUP-6fvu2iEMSxMu4_QR/view?usp=sharing"
               target="_blank"
               rel="noreferrer"
            >
               <Article style={style} />
            </a>
         </div>
      </div>
   );
};

export default Imager;
