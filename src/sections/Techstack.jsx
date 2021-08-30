/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";


const TechStack = () => {
  return (
    <div className="info" id="TechStack">
      <Heading heading="techStack" />
      <Terminal
        command="cat TechStack.md"
        filename="TechStack.md"
        techStack={true}
      />
    </div>
  );
};

export default TechStack;
