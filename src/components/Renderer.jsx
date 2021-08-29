import React from 'react';
import jS from "./static/jS.pdf"
import webD from "./static/webD.pdf"


const Renderer = (props) => {
  return(
    <ul>
      <li><a href={webD} rel="noreferrer" target = "_blank">{props.name1}</a></li>
      <li><a href={jS} rel="noreferrer" target = "_blank">{props.name2}</a></li>   
    </ul>
    );
  }

export default Renderer;