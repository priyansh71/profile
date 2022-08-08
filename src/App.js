import React from "react";
import SidebarLg from "./components/SidebarLg";
import SidebarSm from "./components/SidebarSm";
import Imager from "./components/Imager";
import Main from "./Main";
import Myself from "./assets/Myself.json";

const App = () => {
   return (
      <div>
         <Imager />
         <SidebarSm />
         <SidebarLg />
         {Object.getOwnPropertyNames(Myself).map((key) => {
            return <Main key={key} title={key} />;
         })}

         <div
            style={{
               paddingTop: "5em",
               backgroundColor: "rgb(245, 245, 245)",
            }}
         ></div>
      </div>
   );
};

export default App;
