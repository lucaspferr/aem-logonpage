import React from "react";
import { ContainerForm, IconForm, InputForm } from "./styles";


const InputComponent = ({ id, placeholder, icon, background, ...extraConfigs}) => {
    return (
      <ContainerForm style={background && background} {...extraConfigs}>
        <InputForm placeholder={placeholder} id={id} {...extraConfigs}/>
        <IconForm src={icon} />
      </ContainerForm>
    );
  };

export default InputComponent;