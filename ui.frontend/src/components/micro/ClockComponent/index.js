import React from "react";
import { ClockContainer, ClockDate, ClockTime } from "./styles";
import { MapTo } from "@adobe/aem-react-editable-components";

const ClockComponent = () => {

    const [clock, setClock] = React.useState({
        hours: "",
        minutes: "",
        seconds: "",
        date: "",
      });
      const months = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];
      const days = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado",
      ];
    
      function parse2Digits(number) {
        return number < 10 ? "0" + number : number;
      }

      React.useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setClock({
            hours: parse2Digits(date.getHours()),
            minutes: parse2Digits(date.getMinutes()),
            seconds: parse2Digits(date.getSeconds()),
            date: `${days[date.getDay()]}, ${date.getDate()} de ${
              months[date.getMonth()]
            } de ${date.getFullYear()}`,
          });
        }, 1000);
      }, []);

      return (
        <ClockContainer>
          <ClockTime >
            {clock.hours ? (clock.hours + ":" + clock.minutes) : "00:00"}
          </ClockTime>
          <ClockDate>{clock.date ? clock.date : "Loading..."}</ClockDate>
        </ClockContainer>
      );

}

export default MapTo('reactapp/components/clock-component')(ClockComponent);