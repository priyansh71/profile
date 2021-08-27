import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";

const Info = () => {

    return(
        <div className="info">
            <Heading heading="About me" />
            <Terminal command="cat Myself.md" filename="Myself.md" />
        </div>
    )
}

export default Info;