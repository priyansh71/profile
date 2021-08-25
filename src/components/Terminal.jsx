/** @format */

import React from "react";
import "../App.css"

const Terminal = () => {
  return (
    <div class="terminal-window">
      <header id="headerbottom">
      <div class="button red"></div>
        <div class="button yellow"></div>
        <div class="button green"></div>
      </header>
      <section class="terminal">
        <div class="history"></div>
        ╭─<span style={{color : "aquamarine"}}>priyansh@felix</span> ~ <br />
        ╰─$ <span className="cursor"></span>
        <span class="prompt"></span>
        <span class="typed-cursor"></span>
      </section>
      <br />
    </div>
  );
};

export default Terminal;
