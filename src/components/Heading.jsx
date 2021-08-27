/** @format */

import React from "react";
import "../App.css"

const Heading = (props) => {

  return (
      <header className="heading">
        # {props.heading}
      </header>

  );
};

export default Heading;
