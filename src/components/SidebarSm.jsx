/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import SpellcheckOutlinedIcon from "@material-ui/icons/SpellcheckOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from "react-scroll";

const SidebarSm = () => {
  return (
    <div class="sidebarSm animate__rotateInDownLeft animate__animated">

      <Tooltip arrow title="About me" className="tooltip">
        <span>
          <Link to="Myself" activeClass="active" spy={true} smooth={true}>
            <InfoIcon fontSize="large" />
          </Link>
        </span>
      </Tooltip>

      <Tooltip arrow title="Learning">
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
      </Tooltip>

      <Tooltip arrow title="TechStack">
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
      </Tooltip>

      <Tooltip arrow title="Projects">
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
      </Tooltip>

      <Tooltip arrow title="Achievments">
        <span>
          <Link
            to="Achievments"
            activeClass="active-icon"
            spy={true}
            smooth={true}
          >
            <SpellcheckOutlinedIcon fontSize="large" />
          </Link>
        </span>
      </Tooltip>

      <Tooltip arrow title="Interests">
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
      </Tooltip>

      <Tooltip arrow title="Certifications">
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
      </Tooltip>

      <Tooltip arrow title="Contact">
        <span>
          {/* <Link to="Achievments" spy={true} smooth={true}> */}
            <EmailOutlinedIcon fontSize="large" />
          {/* </Link> */}
        </span>
      </Tooltip>

      <Tooltip arrow title="Copyright, Priyansh, 2021.">
        <span style={{ fontSize: "3em", color: "rgb(216, 216, 216)" }}>
          &copy;
        </span>
      </Tooltip>
    </div>
  );
};

export default SidebarSm;
