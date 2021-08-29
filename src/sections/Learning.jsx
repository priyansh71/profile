import React from "react";
import '../App.css';
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../components/static/Myself";


const Learning = () => {

    return(
        <div className="info" id="Learning">        
            <Heading heading="Learning" />
            <Terminal command="cat Learning.md" filename="learning.md"
            title={Myself[0].ongoing} 
            item1={Myself[2][0]}
            item2={Myself[2][1]}
            item3={Myself[2][2]}
            item4={Myself[2][3]}
            />
            </div>
    )
}

export default Learning;