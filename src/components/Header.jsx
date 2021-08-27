/** @format */

import React from "react";
import "../App.css"

const Header = (props) => {

  return (
      <header>
        <span className="button red"></span>
        <span className="button yellow"></span>
        <span className="button green"></span>
        <span className="filename">{props.name}</span>
      </header>

  );
};

export default Header;
