import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import SidebarLg from "../components/SidebarLg";
import SidebarSm from "../components/SidebarSm";

const Info = () => {

    return(
        <div className="info">
            <SidebarSm />
            <SidebarLg />
            <Heading heading="About me" />
            <Terminal command="cat Myself.md" filename="Myself.md" />
        </div>
    )
}

export default Info;