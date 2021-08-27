import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";

const Info = () => {

    return(
        <div className="info">
            <Terminal command="vim Myself.md" filename="Myself.md" />
        </div>
    )
}

export default Info;