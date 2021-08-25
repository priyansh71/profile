/** @format */

import React from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "../App.css";

const Terminal = (props) => {
  return (
    <div class="terminal-window">
      <header>
        <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </header>
      <section class="terminal">
        <div class="history"></div>
        ╭─<span className="typer">root@felix</span>
         ~
        <TypeWriterEffect
            startDelay={300}
            cursorColor="white"
            text={"╰─$ " + props.command}
            typeSpeed={200}
            textStyle={{
              color: '#fefefe',
              fontWeight: 100,
              fontSize: '1em',
              margin : '0.1em 0em',
        }}    
          />
      </section>
      <br />
    </div>
  );
};

export default Terminal;
