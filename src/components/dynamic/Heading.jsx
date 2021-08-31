/** @format */

import React from "react";
import "animate.css";


const Heading = (props) => {

  return (
      <header className="heading animate__lightSpeedInLeft animate__animated">
        # {props.heading}
      </header>
  );
};

export default Heading;