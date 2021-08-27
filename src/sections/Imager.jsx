import React from "react";
import { Parallax } from "react-parallax";
import pi from "../components/static/pi.jpeg";
import '../App.css';
import "animate.css";

const Imager = () => {

    const url = 
    "https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?cs=srgb&dl=pexels-vitaly-vlasov-1342460.jpg&fm=jpg"

    return(
        <Parallax blur={0} bgImage={url} bgImageAlt="the tech" strength={150}>
         <div className="heighter">
                <img className="avatar animate__zoomIn animate__animated animate__slow" alt="Priyansh" src={pi} />
                <h1 className="name">Priyansh Vyas</h1>
            </div>
        </Parallax>       
    )
}

export default Imager;