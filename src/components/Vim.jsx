/** @format */

import React from "react";
import "../App.css"

const Vim = (props) => {

    let a = [];
    for( let i = 0 ; i < 9; i++){
        a.push('~');
    }

  return (
    <div class="terminal-window">
      <header>
      <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </header>
      <section class="terminal">
        <div class="history">
            {a.map((item) => <span style={{color: "white"}}>{item}</span>)}
        </div>
      </section>
      <br />
    </div>
  );
};

export default Vim;
