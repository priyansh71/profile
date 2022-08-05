import React from "react";
import jS from "../assets/jS.pdf";
import webD from "../assets/webD.pdf";
import cybersec from "../assets/cybersec.pdf";
import bugBust from "../assets/bugBust.pdf";
import pns from "../assets/p&s.pdf";

const Renderer = (props) => {
   return (
      <ul>
         <li>
            <a href={webD} rel="noreferrer" target="_blank">
               {props.name1}
            </a>
         </li>
         <li>
            <a href={jS} rel="noreferrer" target="_blank">
               {props.name2}
            </a>
         </li>
         <li>
            <a href={cybersec} rel="noreferrer" target="_blank">
               {props.name3}
            </a>
         </li>
         <li>
            <a href={bugBust} rel="noreferrer" target="_blank">
               {props.name4}
            </a>
         </li>
         <li>
            <a href={pns} rel="noreferrer" target="_blank">
               {props.name5}
            </a>
         </li>
      </ul>
   );
};

export default Renderer;
