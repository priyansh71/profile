/** @format */

import React from "react";
import "animate.css";
import Terminal from "../components/dynamic/Terminal";
import Heading from "../components/dynamic/Heading";
import Myself from "../components/static/Myself";

const Certifications = () => {
  return (
    <div className="info" id="Certifications">
      <Heading heading="Certified" />
      <Terminal
        command="cat Certs.md"
        filename="Certifications.md"
        title={Myself[0][6][1]}
        name1={Myself[6][0]}
        name2={Myself[6][1]}
        name3={Myself[6][2]}
        name4={Myself[6][3]}
        name5={Myself[6][4]}
      />
    </div>
  );
};

export default Certifications;
