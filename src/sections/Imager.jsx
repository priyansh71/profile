import React from "react";
import { Parallax } from "react-parallax";
import myself from "../components/static/myself.jpg";
import "../App.css";
import "animate.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Imager = () => {
  const url =
  // "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80";
  "https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  const style = {
    color: "white",
    marginTop: "0.7em",
    marginRight: "1.1em",
    fontSize: "2.2em",
  };
  return (
    <div>
      <Parallax bgImage={url} bgImageAlt="the tech" strength={300}>
        <div className="heighter" id="image">
          <img
            className="avatar animate__zoomIn animate__animated animate__slow"
            alt="Priyansh"
            src={myself}
          />
          <h1 className="name">Priyansh Vyas</h1>
        </div>
      </Parallax>
      <div className="navicons">
        <a
          href="https://github.com/priyansh71"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon style={style} />
        </a>
        <a
          href="https://www.linkedin.com/in/priyansh-vyas/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon style={style} />
        </a>
        <a
          href="mailto:f20201388@goa.bits-pilani.ac.in"
          target="_blank"
          rel="noreferrer"
        >
          <MailOutlineIcon style={style} />
        </a>
      </div>{" "}
    </div>
  );
};

export default Imager;
