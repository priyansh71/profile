import React, { useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";
import TermHeader from "./TermHeader";
import Stack from "./Stack";
import { TurnLeft } from "@mui/icons-material";

const Terminal = ({ techStack, items, filename, command }) => {
   const [term, setTerm] = useState("none");
   const [display, setDisplay] = useState("block");
   const [headerName, setHeaderName] = useState("Terminal");
   const [animate, setAnimate] = useState(null);

   const handleTerm = () => {
      setTerm("block");
      setDisplay("none");
      setHeaderName(filename);
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
               ╭─<span className="typer">priyansh@felix</span>
               ~
               <TypeWriterEffect
                  startDelay={200}
                  cursorColor="transparent"
                  text={"╰─$ " + command + "_"}
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
                  <TurnLeft
                     fontSize="large"
                     className="return"
                     style={{ color: "#f2f2f2" }}
                  />
               </button>
               <div
                  style={{
                     display: term,
                     color: "#fefefe",
                     fontWeight: 100,
                     fontSize: "0.95em",
                     marginTop: techStack ? "44px" : "20px",
                     marginLeft: "10px",
                     marginRight: "10px",
                  }}
                  className={animate}
               >
                  {!techStack ? (
                     <ul>
                        {items.map((item, index) => {
                           return <li key={index}>{item}</li>;
                        })}
                     </ul>
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
