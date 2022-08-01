import React from "react";
import { BodyContainer, BodyDivImage, BodyDivText, HomeH1, HomeH2, HomeP } from "./styles";
import ImageHomeComponent from "../../micro/ImageHomeComponent";
import { MapTo } from "@adobe/aem-react-editable-components";

const BodyComponent = ({ rtext1, rtext2, rtext3, rtext4, btext1, btext2, btext3, btext4}) => {
    const redtext = ["Our mission is", "to transform the world", "building digital experiences", "that enable our client's growth"];
    const blacktext = ["Nossa missão é", "transformar o mundo", "construindo experiências digitais", "que permitam o crescimento dos nossos clientes"];
    
    return (
      <BodyContainer>
        <BodyDivImage>
          <ImageHomeComponent />
        </BodyDivImage>
        <BodyDivText>
          <HomeH2>{rtext1 ? rtext1 : redtext[0]}</HomeH2>
          <HomeP>{btext1 ? btext1 : blacktext[0]}</HomeP>
          <HomeH1>{rtext2 ? rtext2 : redtext[1]}</HomeH1>
          <HomeP>{btext2 ? btext2 : blacktext[1]}</HomeP>
          <HomeH1>{rtext3 ? rtext3 : redtext[2]}</HomeH1>
          <HomeP>{btext3 ? btext3 : blacktext[2]}</HomeP>
          <HomeH1>{rtext4 ? rtext4 : redtext[3]}</HomeH1>
          <HomeP>{btext4 ? btext4 : blacktext[3]}</HomeP>
        </BodyDivText>
      </BodyContainer>
    );
  };

  export default MapTo('reactapp/components/body-component')(BodyComponent);