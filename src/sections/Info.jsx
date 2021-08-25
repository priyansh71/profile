import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Vim from "../components/Vim";

const Info = () => {

    return(
        <div className="info">
            <Terminal command="vim Myself.md" />
            <Vim filename="Myself" />
        </div>
    )
}

export default Info;