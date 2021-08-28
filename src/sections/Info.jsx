import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Sidebar from "../components/Sidebar";

const Info = () => {

    return(
        <div className="info">
            <Sidebar />
            <Heading heading="About me" />
            <Terminal command="cat Myself.md" filename="Myself.md" />
        </div>
    )
}

export default Info;