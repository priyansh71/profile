import React, { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import FastForwardIcon from "@mui/icons-material/FastForward";
import TermHeader from "./TermHeader";
import Renderer from "./Renderer";
import cryptohack from "../assets/cryptohack.png";
import Stack from "./Stack";

const Terminal = (props) => {
   const [term, setTerm] = useState("none");
   const [display, setDisplay] = useState("block");
   const [headerName, setHeaderName] = useState(null);
   const [animate, setAnimate] = useState(null);

   const handleTerm = () => {
      setTerm("block");
      setDisplay("none");
      setHeaderName(props.filename);
   };

   useEffect(() => {
      setAnimate("animate__animated animate__slow animate__zoomIn text");
   }, [term]);

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
                  typeSpeed={130}
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
                  <FastForwardIcon
                     fontSize="large"
                     style={{ color: "white" }}
                  />
               </button>
               <div
                  style={{
                     display: term,
                     color: "#fefefe",
                     fontWeight: 100,
                     fontSize: "0.9em",
                     marginTop: "15px",
                     marginLeft: "10px",
                     marginRight: "10px",
                  }}
                  className={animate}
               >
                  {props.title}
                  {props.title ? <br /> : null}
                  <br />
                  {!props.techStack ? (
                     props.item1 ? (
                        <ul>
                           <li>{props.item1}</li>
                           <li>{props.item2}</li>
                           <li>{props.item3}</li>
                           <li> {props.item4}</li>
                           {props.item5 ? <li>{props.item5}</li> : null}
                           {props.img ? (
                              <a
                                 href={cryptohack}
                                 rel="noreferrer"
                                 target="_blank"
                              >
                                 {props.img}
                              </a>
                           ) : null}
                        </ul>
                     ) : (
                        <Renderer
                           name1={props.name1}
                           name2={props.name2}
                           name3={props.name3}
                           name4={props.name4}
                           name5={props.name5}
                        />
                     )
                  ) : (
                     <Stack />
                  )}
               </div>
            </section>
         </div>
      </div>
   );
};

export default Terminal;
