import React, { useEffect } from "react";
import Heading from "./Heading";

const title = "Paul Allen's Card";
const Allen = () => {
   // run a scruipt using useEffect
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      };
   }, []);
   return (
      <>
         <Heading heading={title} />
         <div style={{ padding: "4em" }}></div>

         <p
            className="codepen"
            data-height="450"
            data-default-tab="result"
            data-slug-hash="JjvgEpz"
            data-user="priyansh71"
         ></p>
      </>
   );
};

export default Allen;
