import React from "react";
import SidebarLg from "./components/SidebarLg";
import SidebarSm from "./components/SidebarSm";
import Imager from "./components/Imager";
import Main from "./Main";

const App = () => {
   return (
      <div>
         <Imager />
         <SidebarSm />
         <SidebarLg />
         <Main title="Myself" />
         <Main title="Education" />
         <Main title="TechStack" />
         <Main title="Experience" />
         <Main title="Projects" />
         <Main title="Learning" />
         <Main title="Achievments" />
         <Main title="Certifications" />
         <Main title="Interests" />

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
