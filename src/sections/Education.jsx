import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";

const Education = () => {

    return(
        <div className="info">
            <Heading heading="Education" />
            <Terminal command="cat Education.md" filename="Education.md" />
        </div>
    )
}

export default Education;