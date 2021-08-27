/** @format */

import React, { useState } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import "../App.css";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import Header from "./Header";

const Terminal = (props) => {
  const [term, setTerm] = useState("block");
  const [vim, setVim] = useState("none");

  const handleTerm = () => {
    setTerm("none");
    setVim("block");
  };

  const handleVim = () => {
    setVim("none");
    setTerm("block");
  };

  let a = [];
  for (let i = 0; i < 6; i++) {
    a.push("~");
  }

  return (
    <div>
      <div className="terminal-window" style={{ display: term }}>
        <Header />
        <section className="terminal">
          <div className="history"></div>
          ╭─<span className="typer">root@felix</span>
          ~
          <TypeWriterEffect
            startDelay={300}
            cursorColor="transparent"
            text={"╰─$ " + props.command}
            typeSpeed={200}
            textStyle={{
              color: "#fefefe",
              fontWeight: 100,
              fontSize: "1em",
            }}
          />
          <button className="run" onClick={handleTerm}>
            <span className="runner">Run</span>
            <ArrowForwardIosOutlinedIcon
              fontSize="medium"
              style={{ color: "white" }}
            />
          </button>
        </section>
      </div>

      <div className="terminal-window" style={{ display: vim }}>
        <Header />
        <section className="terminal">
          <div className="history">
            {a.map((item, index) => (
              <span style={{ color: "white" }} key={index}>
                {item}
              </span>
            ))}
            <button className="run" onClick={handleVim}>
              <span className="runner">Back</span>
              <ArrowBackIosOutlinedIcon
                fontSize="medium"
                style={{ color: "white" }}
              />
            </button>
            {props.filename}
          </div>
        </section>
        <br />
      </div>
    </div>
  );
};

export default Terminal;
