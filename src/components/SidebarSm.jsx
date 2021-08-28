/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import SpellcheckOutlinedIcon from '@material-ui/icons/SpellcheckOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const SidebarSm = () => {
  return (
    <div class="sidebarSm">
    <span><InfoIcon fontSize="large" /></span>
    <span><SchoolIcon fontSize="large"  /></span>
    <span><CodeIcon fontSize="large"  /></span>
    <span><WbIncandescentIcon fontSize="large"  /></span>
    <span><SpellcheckOutlinedIcon fontSize="large"  /></span>
    <span><EmailOutlinedIcon fontSize="large"  /></span>
    <span><GitHubIcon fontSize="large"  /></span>
    </div>
  );
};

export default SidebarSm;
