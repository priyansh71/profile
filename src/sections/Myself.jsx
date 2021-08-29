import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../components/static/Myself";


const Info = () => {

    return(
        <div className="info" id="Myself">        
            <Heading heading="About me" />
            <Terminal
             command="cat Myself.md"
            filename="Myself.md" 
            title={Myself[0].about + " " + Myself[0].education} 
            item1={Myself[1][0]}
            item2={Myself[1][1]}
            item3={Myself[1][2]}
            />
        </div>
    )
}

export default Info;