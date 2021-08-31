/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import SpellcheckOutlinedIcon from "@material-ui/icons/SpellcheckOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import AssignmentIcon from "@material-ui/icons/Assignment";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Link } from "react-scroll";

const SidebarSm = () => {
  return (
    <div class="sidebarSm animate__rotateInDownLeft animate__animated">
      <div class="container">
        <div class="container__content">Myself</div>
        <div class="container__arrow" />
        <span>
          <Link to="Myself" activeClass="active" spy={true} smooth={true}>
            <InfoIcon fontSize="large" />
          </Link>
        </span>
      </div>

      <div class="container">
        <div class="container__content">Learning</div>
        <div class="container__arrow" />
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

      <div class="container">
        <div class="container__content">TechStack</div>
        <div class="container__arrow" />
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

      <div class="container">
        <div class="container__content">Projects</div>
        <div class="container__arrow" />
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

      <div class="container">
        <div class="container__content">Achievments</div>
        <div class="container__arrow" />
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
      </div>

      <div class="container">
        <div class="container__content">Interests</div>
        <div class="container__arrow" />
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

      <div class="container">
        <div class="container__content">Certifications</div>
        <div class="container__arrow" />
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

      <div class="container">
        <div class="container__content">Contact</div>
        <div class="container__arrow" />
        <span>
          <EmailOutlinedIcon fontSize="large" />
        </span>
      </div>

      <div class="container">
        <div class="container__content">Copyright, Priyansh, 2021.</div>
        <div class="container__arrow" />
        <span style={{ fontSize: "3em", color: "rgb(216, 216, 216)" }}>
          &copy;
        </span>
      </div>
    </div>
  );
};

export default SidebarSm;
