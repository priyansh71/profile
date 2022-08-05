import React from "react";
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../assets/Myself";

const Projects = () => {
   return (
      <div className="info" id="Projects">
         <Heading heading="Projects" />
         <Terminal
            command="cat Projects.md"
            filename="Projects.md"
            title={Myself[0][3][1]}
            item1={Myself[4][0]}
            item2={Myself[4][1]}
            item3={Myself[4][2]}
            item4={Myself[4][3]}
            item5={Myself[4][4]}
         />
      </div>
   );
};

export default Projects;
