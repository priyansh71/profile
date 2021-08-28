import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";

const Education = () => {

    return(
        <div className="info">
            <Heading heading="Interests" />
            <Terminal command="cat Interests.md" filename="Interests.md" />
        </div>
    )
}

export default Education;