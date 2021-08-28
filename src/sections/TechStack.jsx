import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";


const Skills = () => {

    return(
        <div className="info">        
            <Heading heading="techStack" />
            <Terminal command="cat techStack.md" filename="techStack.md" />
        </div>
    )
}

export default Skills;