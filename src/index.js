/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Education from "./sections/Education";
import Imager from "./sections/Imager";
import Myself from "./sections/Myself";

ReactDOM.render(
  <div>
    <Imager />
    <Myself />
    <Education />
  </div>,
  document.getElementById("root")
);
