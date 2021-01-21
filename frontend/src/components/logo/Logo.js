import React from "react"
import Tilt from 'react-tilt'
import "./logo.css";
import logo from "./meyn.jpeg"

const Logo = () => {
    return(
        <div>    
            <Tilt className="Tilt shadow-5 ml4" options={{ max : 25 }} style={{ height:150, width: 150 }} >
                <div className="Tilt-inner pa4"> 
                    <img alt="logo" src={logo} height="150px" />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;