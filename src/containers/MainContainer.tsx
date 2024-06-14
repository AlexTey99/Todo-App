import { ContainerCenter } from "./ContainerCenter";
// @ts-ignore
import imgFondo from '../assets/images/bg-desktop-dark.jpg'
import { useState } from "react";

export const MainContainer = () => {

    const [resiveMensaje, setReciveMensaje] = useState('veryDark')

    const CambiaColorBody = (mensaje)=>{
        setReciveMensaje(mensaje)        
    }

    return (
        <div className={`main-container ${resiveMensaje ? 'veryDark' : 'white'}`}>
            <img className = 'imgFondo' src={imgFondo} alt="" />
            <ContainerCenter setMensaje={CambiaColorBody}/>  
        </div>
    );
};
  
export default MainContainer;