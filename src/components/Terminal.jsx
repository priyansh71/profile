/** @format */

import React ,{useState} from "react";
import TypeWriterEffect from 'react-typewriter-effect';
import "../App.css";
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
const Terminal = (props) => {

  const [click, setClick] = useState("block");

  const handleClick = () => {
    setClick("none");
  }

  return (
    <div class="terminal-window" style={{ display : click}}>
      <header>
        <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </header>
      <section class="terminal">
        <div class="history"></div>
        ╭─<span className="typer">root@felix</span>
         ~ 
        <TypeWriterEffect
            startDelay={300}
            cursorColor="transparent"
            text={"╰─$ " + props.command}
            typeSpeed={200}
            textStyle={{
              color: '#fefefe',
              fontWeight: 100,
              fontSize: '1em',
        }}    
          />
          
         <button className="run"  onClick={handleClick}>
          <span className="runner">Run</span> 
          <ArrowForwardIosOutlinedIcon fontSize="medium" style={{color : "white"}} />
        </button>
      </section>
      <br />
    </div>
  );
};

export default Terminal;
