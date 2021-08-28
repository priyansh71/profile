import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../components/static/Myself";


const Projects = () => {

    return(
        <div className="info">        
            <Heading heading="Projects" />
            <Terminal command="cat Projects.md" filename="Projects.md"
             title={Myself[0].projects} 
            item1={Myself[4][0]}
            item2={Myself[4][1]}
            item3={Myself[4][2]}
            />
        </div>
    )
}

export default Projects;