/** @format */

import React from "react";
import "../App.css";
import "animate.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TwitterIcon from "@material-ui/icons/Twitter";
import Heading from "../components/dynamic/Heading";

const Footer = () => {
  let size = "3.5em";
  let margin = "0.4em";
  return (
    <div className="footer">
      <center>
        <Heading heading="Contact" />
        <div className="icons">
          <a
            href="https://github.com/priyansh71"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container">
              <div className="container__content">GitHub</div>
              <div className="container__arrow" />
              <GitHubIcon
                  style={{ color: "#020408" , margin : margin , fontSize : size}}
                />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/priyansh-vyas/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container">
              <div className="container__content">LinkedIn</div>
              <div className="container__arrow" />
              <span>
                <LinkedInIcon
                  style={{ color: "#0B65C2" , margin : margin , fontSize : size }}
                />
              </span>
            </div>
          </a>

          <a
            href="mailto:f20201388@goa.bits-pilani.ac.in"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container">
              <div className="container__content">GMail</div>
              <div className="container__arrow" />
              <span>
                <MailOutlineIcon
                  style={{ color: "#D44B3D" , margin : margin , fontSize : size}}
                />
              </span>
            </div>
          </a>
          <a
            href="https://twitter.com/priyansh_71"
            target="_blank"
            rel="noreferrer"
          >
            <div className="container" id="Contact">
              <div className="container__content">Twitter</div>
              <div className="container__arrow" />
              <span>
                <TwitterIcon
                    style={{ color: "#0D9AFB" , margin : margin , fontSize : size }}
                />
              </span>
            </div>
          </a>
        </div>
      </center>
    </div>
  );
};

export default Footer;
