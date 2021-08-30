import React from "react";
import SidebarLg from "./components/SidebarLg";
import SidebarSm from "./components/SidebarSm";
import Interests from "./sections/Interests";
import Imager from "./sections/Imager";
import Myself from "./sections/Myself";
import Projects from "./sections/Projects";
import Learning from "./sections/Learning";
import Achievments from "./sections/Achivements";
import Certifications from "./sections/Certifications";
import TechStack from "./sections/Techstack";
import Footer from "./sections/Footer";


const App = () => {
  return (
    <div>
    <Imager />
    <SidebarSm />
    <SidebarLg   />
    <Myself />
    <Learning />
    <TechStack />
    <Projects />
    <Achievments />
    <Interests />
    <Certifications />
    <Footer />
  </div>
  );
};

export default App;
