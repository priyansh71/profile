import React from "react";
import Heading from "./Heading";
import styles from "@/styles/Allen.module.scss";

const Allen = () => {
   return (
      <div
         style={{
            fontFamily: "Didact Gothic",
         }}
         className="bateman"
      >
         <Heading heading={"Paul Allen's Card"} />
         <div style={{ padding: "4em" }}></div>

         <div className={styles.allen}>
            <div className={styles.card}>
               <div className={styles.top}>
                  <div className={styles.phone}>+91.992.987.6698</div>
                  <div className={styles.topRight}>
                     <div className={styles.firm}>Computer Science</div>
                     <div className={styles.department}>Undergraduate</div>
                  </div>
               </div>
               <div className={styles.middle}>
                  <div className={styles.name}>
                     P<span>riyansh</span> Vyas
                  </div>
                  <div className={styles.title}>Web3 Developer</div>
               </div>
               <div className={styles.bottom}>
                  <div className={styles.address}>
                     AH9 302, BITS Pilani Goa Campus, 403726.
                  </div>
               </div>
               <a
                  className={styles.watermark}
                  href="https://codepen.io/johnslipper/pen/zYzBJa"
                  rel="noreferrer"
                  title="Credits : John Slipper"
                  target="_blank"
               >
                  <span></span>felix
               </a>
            </div>
         </div>
      </div>
   );
};

export default Allen;
