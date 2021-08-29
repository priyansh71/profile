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

const SidebarSm = () => {
  return (
    <div class="sidebarSm animate__rotateInDownLeft animate__animated animate__slow">
      <Tooltip arrow title="About me" className="tooltip">
        <span>
          <InfoIcon fontSize="large" />
        </span>
      </Tooltip>
      <Tooltip arrow title="Learning">
        <span>
          <CodeIcon fontSize="large" />
        </span>
      </Tooltip>

      <Tooltip arrow title="Projects">
        <span>
          <AssignmentIcon fontSize="large" />
        </span>
      </Tooltip>

      <Tooltip arrow title="Achievments">
        <span>
          <SpellcheckOutlinedIcon fontSize="large" />
        </span>
      </Tooltip>

      <Tooltip arrow title="Interests">
        <span>
          <WbIncandescentIcon fontSize="large" />
        </span>
      </Tooltip>

      <Tooltip arrow title="Certifications">
        <span>
          <VerifiedUserIcon fontSize="large" />
        </span>
      </Tooltip>

      <Tooltip arrow title="Contact">
        <span>
          <EmailOutlinedIcon fontSize="large" />
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
