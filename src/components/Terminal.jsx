/** @format */

import React, { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "../App.css";
import FastForwardIcon from "@material-ui/icons/FastForward";
import TermHeader from "./TermHeader";

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
        <TermHeader name={headerName} click={handleTerm} />
        <section className="terminal">
          <div className="history"></div>
          ╭─<span className="typer">root@felix</span>
          ~
          <TypeWriterEffect
            startDelay={200}
            cursorColor="transparent"
            text={"╰─$ " + props.command + "▉"}
            typeSpeed={150}
            textStyle={{
              color: "#f2f2f2",
              fontWeight: 100,
              fontSize: "1em",
            }}
          />
          <button
            className="animate__animated animate__slower animate__backInUp run"
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
              margin: "10px",
            }}
          >
            {props.title}
            <br />
            <br />
            <ul>
              <li>{props.item1}</li>
              <li>{props.item2}</li>
              <li>{props.item3}</li>
              {props.item4 ? <li> {props.item4}</li> : null}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terminal;
