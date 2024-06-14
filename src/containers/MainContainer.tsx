import { ContainerCenter } from "./ContainerCenter";
// @ts-ignore
import imgFondo from '../assets/images/bg-desktop-dark.jpg';
//@ts-ignore
import imgLight from '../assets/images/bg-desktop-light.jpg';
import { useState } from "react";

export const MainContainer = () => {

    const [resiveMensaje, setReciveMensaje] = useState('veryDark');
    const [cambioFondo, setCambioFondo] = useState('displayNone');

    const CambiaColorBody = (mensaje)=>{
        setReciveMensaje(mensaje)  
        setCambioFondo(mensaje)      
    }

    return (
        <div className={`main-container ${resiveMensaje ? 'veryDark' : 'white'}`}>
            <img className='imgLight'src={imgLight} alt="" />
            <img className={`imgFondo ${cambioFondo ? 'displayFlex' : 'displayNone'}`} src={imgFondo} alt="" />
            <ContainerCenter setMensaje={CambiaColorBody}/>  
        </div>
    );
};
  
export default MainContainer;