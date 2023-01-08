import React from "react";
import SidebarLg from "./components/SidebarLg";
import SidebarSm from "./components/SidebarSm";
import Imager from "./components/Imager";
import Main from "./Main";
import Myself from "./assets/Myself.json";
import { Parallax } from "react-parallax";
import chandelier from "./assets/chandelier.jpg";
import Allen from "./components/Allen";

const App = () => {
   return (
      <div>
         <Imager />

         <Parallax bgImage={chandelier} bgImageAlt="chandelier" strength={300}>
            <SidebarSm />
            <SidebarLg />

            {Object.getOwnPropertyNames(Myself).map((key) => {
               return <Main key={key} title={key} />;
            })}

            <div
               className="allen"
               style={{
                  margin: "3em 0 2em 0",
                  width: "55vw",
                  position: "relative",
                  left: "40vw",
                  top: "50%",
               }}
            >
               <Allen />
            </div>
         </Parallax>
      </div>
   );
};

export default App;
