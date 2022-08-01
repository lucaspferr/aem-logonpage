import React from 'react'
import { CityName, IconWeather, Temperature, TemperatureContainer, WeatherContainer } from './styles';
import { MapTo } from "@adobe/aem-react-editable-components";

export const WeatherComponent = () => {

    const [location, setLocation] = React.useState(null);
    const [weather, setWeather] = React.useState(null);
    const brStates = [['Acre', 'AC'],['Alagoas', 'AL'], ['Amapá','AP'], ['Amazonas','AM'], ['Bahia','BA'], ['Ceará','CE'], ['Distrito Federal','DF'],['Espírito Santo','ES'],
    ['Goiás','GO'], ['Maranhão','MA'], ['Mato Grosso','MT'], ['Mato Grosso do Sul','MS'], ['Minas Gerais','MG'], ['Pará','PA'], ['Paraíba','PB'], ['Paraná','PR'], ['Pernambuco','PE'],
    ['Piauí','PI'], ['Rio de Janeiro','RJ'], ['Rio Grande do Norte','RN'], ['Rio Grande do Sul','RS'], ['Rondônia','RO'], ['Roraima','RR'], ['Santa Catarina','SC'], ['São Paulo','SP'],
    ['Sergipe','SE'], ['Tocantins','TO']];
    const apiKey = 'a774d7449b4247d4bb4225243220807';


    const getWeather = async () => {
      const response = await fetch(`http://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=auto:ip`);
      const jsonBody = await response.json();
      setLocation(jsonBody.city);
      const response2 = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${jsonBody.city}`);
      const jsonBody2 = await response2.json();
      setWeather(jsonBody2);
      const region = brStates.find(state =>  state[0] === jsonBody2.location.region);
      setLocation(jsonBody.city + ', ' + region[1]);

  }
    React.useEffect(() => {
        getWeather();
    }, []);
    
  return (
    <WeatherContainer>
      <CityName>{location && location}</CityName>
      <TemperatureContainer>
        <IconWeather src={weather && weather.current.condition.icon}/>
        <Temperature>{weather && weather.current.temp_c + '°'}</Temperature>
      </TemperatureContainer>
    </WeatherContainer>
  );
}

export default MapTo('reactapp/components/weather-component')(WeatherComponent);