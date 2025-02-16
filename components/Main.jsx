import React from "react";
import "animate.css";
import dynamic from "next/dynamic";
import Myself from "../assets/Myself.json";
import Heading from "./Heading";

const Terminal = dynamic(() => import("@/components/Terminal"), {
   ssr: false,
});

const Main = ({ title }) => {
   return (
      <div className="info" id={title}>
         <Heading heading={title} />
         <Terminal
            command={`cat ${title}`}
            filename={`${title}`}
            items={Myself[title]}
            techStack={title === "TechStack"}
         />
      </div>
   );
};

export default Main;
