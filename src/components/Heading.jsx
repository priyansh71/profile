/** @format */

import React from "react";
import "../App.css"
import "animate.css";


const Heading = (props) => {

  return (
      <header className="heading animate__lightSpeedInLeft animate__animated">
        # {props.heading}
      </header>
  );
};

export default Heading;