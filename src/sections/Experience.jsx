import React from "react";
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../assets/Myself";

const Achievments = () => {
   return (
      <div className="info" id="Experience">
         <Heading heading="Experience" />
         <Terminal
            command="cat Experience.md"
            filename="Experience.md"
            title={Myself[0][7][1]}
            item1={Myself[7][0]}
            item2={Myself[7][1]}
            item3={Myself[7][2]}
            item4={Myself[7][3]}
         />
      </div>
   );
};

export default Achievments;
