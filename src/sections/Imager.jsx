import React from "react";
import { Parallax } from "react-parallax";
import pi from "../components/static/pi.jpeg";
import '../App.css';
import "animate.css";

const Imager = () => {

    const url = 
    "https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?cs=srgb&dl=pexels-vitaly-vlasov-1342460.jpg&fm=jpg"
   //2 // "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"    

    return(
        <Parallax blur={0} bgImage={url} bgImageAlt="the tech" strength={100}>
         <div className="heighter">
                <img className="avatar animate__zoomIn animate__animated animate__slow" alt="Priyansh" src={pi} />
                <h1 className="name">Priyansh Vyas</h1>
            </div>
        </Parallax>       
    )
}

export default Imager;