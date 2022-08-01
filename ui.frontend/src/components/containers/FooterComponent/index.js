import React from "react";
import { HomeFooterButtonKeep, HomeFooterButtonLog, HomeFooterButtonContainer, HomeFooterContainer, HomeFooterText } from "./styles";
import { MapTo } from "@adobe/aem-react-editable-components";
import CountdownComponent from "../../micro/CountdownComponent";
import { CounterContext } from "../../micro/CountdownComponent/CounterContext";
// import { useHistory } from "react-router-dom";

const FooterComponent = props => {

  const counter = React.useContext(CounterContext);
  // let history = useHistory();

  // if(!localStorage.getItem("token")) {
  //   history.push("/content/reactapp/us/en/compasslogin.html?wcmmode=disabled");
  // }
  return (
      <HomeFooterContainer>
        <HomeFooterText>
          Essa janela do navegador é usada para manter sua sessão de autenticação
          ativa.
          <br />
          Deixe-a aberta em segundo plano e abra uma nova janela para continuar a
          navegar.
        </HomeFooterText>
        <CountdownComponent />
        <HomeFooterButtonContainer>
          <HomeFooterButtonKeep
            type="button"
            onClick={() => counter.setCounter(600)}
          >
            Continuar Navegando
          </HomeFooterButtonKeep>
          <HomeFooterButtonLog
            type="button"
            onClick={() => counter.setCounter(0)}
          >
            Logout
          </HomeFooterButtonLog>
        </HomeFooterButtonContainer>
      </HomeFooterContainer>
    );
}

export default MapTo('reactapp/components/footer-component')(FooterComponent);
