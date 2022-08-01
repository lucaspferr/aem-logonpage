import styled from "styled-components";

export const WeatherContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    width: 150px;
    height: 20vh;
    flex-wrap: wrap;
    color: #222222;
    @media (max-width: 768px) {
        width: 30vw;
        height: 22.5vh;
    }
`;

export const TemperatureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        width: 30vw;
    }
`;

export const CityName = styled.h1`
    font-size: 14px;
    font-weight: 400;
    width: 150px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 11px;
        width: 30vw;
    }
`;

export const Temperature = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 42px;
    margin: 0;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const IconWeather = styled.img`
    width: 50px;
    height: 50px;
    margin: 0;
    margin-right: 10px;
    display: block;
    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
    }

`;