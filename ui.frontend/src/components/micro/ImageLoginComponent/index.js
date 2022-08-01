import React from 'react'
import img from "./images/imagemfull.png";
import logo from "./images/compassuol-logo-white.svg";
import { BackgroundImage, BackgroundImageContainer, CompassLogo } from './styles';

const ImageLoginComponent = () => {
    return (
        <React.Fragment>
            <BackgroundImageContainer>
                <BackgroundImage src={img} label='imgbg'/>
            </BackgroundImageContainer>
            <CompassLogo src={logo} label='logo'/>
        </React.Fragment>
      );
}

export default ImageLoginComponent;