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
import TechStack from "./sections/TechStack";

ReactDOM.render(
  <div>
    <Imager />
    <SidebarSm />
    <SidebarLg   />
    <Myself />
    <TechStack />
    <Projects />
    <Interests />
  </div>,
  document.getElementById("root")
);
