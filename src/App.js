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

            <Allen />
         </Parallax>
      </div>
   );
};

export default App;
