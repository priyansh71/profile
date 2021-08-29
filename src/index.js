/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SidebarLg from "./components/SidebarLg";
import SidebarSm from "./components/SidebarSm";
import Interests from "./sections/Interests";
import Imager from "./sections/Imager";
import Myself from "./sections/Myself";
import Projects from "./sections/Projects";
import Learning from "./sections/Learning";
import Achievments from "./sections/Achivements";
import Certifications from "./sections/Certifications";

ReactDOM.render(
  <div>
    <Imager />
    <SidebarSm />
    <SidebarLg   />
    <Myself />
    <Learning />
    <Projects />
    <Achievments />
    <Interests />
    <Certifications />
    <div style={{padding: "90px", width : "100vw"}}></div>
  </div>,
  document.getElementById("root")
);
