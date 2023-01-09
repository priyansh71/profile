import React, { useEffect } from "react";
import Heading from "./Heading";
import "../styles/allen.scss";

const Allen = () => {

   return (
      <div style={{
         fontFamily: "Didact Gothic",
      }}>
         <Heading heading={"Paul Allen's Card"} />
         <div style={{ padding: "4em" }}></div>

         <div  className="allen">
            <div className="card tk-eskapade">
               <div className="top">
                  <div className="phone">+91.992.987.6698</div>
                  <div className="top-right">
                     <div className="firm">Computer Science</div>
                     <div className="department">Undergraduate</div>
                  </div>
               </div>
               <div className="middle">
                  <div className="name">P<span>riyansh</span> Vyas</div>
                  <div className="title">Web3 Developer</div>
               </div>
               <div className="bottom">
                  <div className="address">AH9 302, BITS Pilani Goa Campus, 403726.</div>
               </div>
               <a className="watermark" href="https://codepen.io/johnslipper/pen/zYzBJa" title="Credits : John Slipper" target="_blank"><span></span>felix</a>
            </div>
         </div>
      </div>
   );
};

export default Allen;
