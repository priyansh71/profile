/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import Terminal from "../components/Terminal";
import Heading from "../components/Heading";
import Myself from "../components/static/Myself";

const Certifications = () => {
  return (
    <div className="info" id="Certifications">
      <Heading heading="Certified" />
      <Terminal
        command="cat Certs.md"
        filename="Certifications.md"
        title={Myself[0].certifications}
        name1={Myself[6][0]}
        name2={Myself[6][1]}
      />
    </div>
  );
};

export default Certifications;
