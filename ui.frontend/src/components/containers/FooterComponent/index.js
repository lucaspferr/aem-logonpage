import React from "react";
import { HomeFooterButtonKeep, HomeFooterButtonLog, HomeFooterButtonContainer, HomeFooterContainer, HomeFooterText } from "./styles";
import { MapTo } from "@adobe/aem-react-editable-components";
import CountdownComponent from "../../micro/CountdownComponent";
import { CounterContext } from "../../micro/CountdownComponent/CounterContext";
// import { useHistory } from "react-router-dom";

const FooterComponent = ({ footertext, buttontext1, buttontext2 }) => {

  const counter = React.useContext(CounterContext);
  // let history = useHistory();

  // if(!localStorage.getItem("token")) {
  //   history.push("/content/reactapp/us/en/compasslogin.html?wcmmode=disabled");
  // }
  return (
        <HomeFooterContainer>
          <HomeFooterText>
            {footertext}
          </HomeFooterText>
          <CountdownComponent />
          <HomeFooterButtonContainer>
            <HomeFooterButtonKeep
              type="button"
              onClick={() => counter.setCounter(600)}
            >
              {buttontext1}
            </HomeFooterButtonKeep>
            <HomeFooterButtonLog
              type="button"
              onClick={() => counter.setCounter(0)}
            >
              {buttontext2}
            </HomeFooterButtonLog>
          </HomeFooterButtonContainer>
        </HomeFooterContainer>
    );
}

FooterComponent.defaultProps = {

    footertext: "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.",
    buttontext1: "Continuar Navegando",
    buttontext2: "Logout",

};
export default MapTo('reactapp/components/footer-component')(FooterComponent);
