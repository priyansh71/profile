import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";


const Projects = () => {

    return(
        <div className="info">        
            <Heading heading="Projects" />
            <Terminal command="cat Projects.md" filename="Projects.md" />
        </div>
    )
}

export default Projects;