/** @format */

import React, { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "../App.css";
import FastForwardIcon from "@material-ui/icons/FastForward";
import Header from "./Header";

const Terminal = (props) => {
  const [term, setTerm] = useState("none");
  const [display, setDisplay] = useState("block");
  const [headerName, setHeaderName] = useState(null);

  const handleTerm = () => {
    setTerm("block");
    setDisplay("none");
    setHeaderName(props.filename);
  };

  return (
    <div>
      <div className="terminal-window">
        <Header name={headerName} click={handleTerm} />
        <section className="terminal">
          <div className="history"></div>
          ╭─<span className="typer">root@felix</span>
          ~
          <TypeWriterEffect
            startDelay={200}
            cursorColor="#dedede"
            text={"╰─$ " + props.command}
            typeSpeed={150}
            hideCursorAfterText={true}
            textStyle={{
              color: "#fefefe",
              fontWeight: 100,
              fontSize: "1em",
            }}
          />
            <button
            className="animate__animated animate__slower animate__backInUp animate__delay-1s run"
            onClick={handleTerm}
            style={{ display: display }}
          >
            <FastForwardIcon fontSize="large" style={{ color: "white" }} />
          </button>

          
          <div
            style={{
              display: term,
              color: "#fefefe",
              fontWeight: 100,
              fontSize: "1em",
              margin: "20px 10px",
            }}
          >
            Hello there
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terminal;
