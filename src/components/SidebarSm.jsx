import React from "react";
import "animate.css";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import SpellcheckOutlined from "@mui/icons-material/SpellcheckOutlined";
import AssignmentIcon from "@mui/icons-material/Assessment";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-scroll";
import { Book, CastForEducation } from "@mui/icons-material";

const SidebarSm = () => {
   return (
      <div className="sidebarSm animate__rotateInDownLeft animate__animated">
         <div className="container">
            <div className="container__content">Myself</div>
            <div className="container__arrow" />
            <span>
               <Link to="Myself" activeClass="active" spy={true} smooth={true}>
                  <InfoIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Education</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Education"
                  activeClass="active"
                  spy={true}
                  smooth={true}
               >
                  <Book fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">TechStack</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="TechStack"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <StarBorderIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Experience</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Experience"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <BookmarkIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Projects</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Projects"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <AssignmentIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Learning</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Learning"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <CodeIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Achievments</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Achievments"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <SpellcheckOutlined fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Certifications</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Certifications"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <VerifiedUserIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <div className="container__content">Interests</div>
            <div className="container__arrow" />
            <span>
               <Link
                  to="Interests"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
               >
                  <WbIncandescentIcon fontSize="large" />
               </Link>
            </span>
         </div>

         <div className="container">
            <Link
                  to="allen"
                  activeClass="active-icon"
                  spy={true}
                  smooth={true}
                  offset={-70}
               >
            <span style={{ fontSize: "3em", color: "rgb(216, 216, 216)" }}>
               &copy;
            </span>
            </Link>
         </div>
      </div>
   );
};

export default SidebarSm;
