import React from "react";
import { ContainerCenter } from "./ContainerCenter";
// @ts-ignore
import imgFondo from '../assets/images/bg-desktop-dark.jpg'

const MainContainer = () => {
    return (
        <div className = "main-container">
            <img className = 'imgFondo' src={imgFondo} alt="" />
            <ContainerCenter/>  
        </div>
    );
};

export{MainContainer};