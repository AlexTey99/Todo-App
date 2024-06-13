import { ContainerCenter } from "./ContainerCenter";
// @ts-ignore
import imgFondo from '../assets/images/bg-desktop-dark.jpg'

export const MainContainer = () => {
    return (
        <div className='main-container '>
            <img className = 'imgFondo' src={imgFondo} alt="" />
            <ContainerCenter/>  
        </div>
    );
};

MainContainer.defaultProps = {
    colorChanged: false,
};

const mapStateToProps = (state) => ({
    colorChanged: state.colorChanged,
  });
  
export default MainContainer;