import React from "react";
import "animate.css";
import Terminal from "./components/Terminal";
import Heading from "./components/Heading";
import Myself from "./assets/My.json";

const Main = ({ title }) => {
   return (
      <div className="info" id={title}>
         <Heading heading={title} />
         <Terminal
            command={`cat ${title}`}
            filename={title}
            items={Myself[title]}
            techStack={title === "TechStack"}
         />
      </div>
   );
};

export default Main;
