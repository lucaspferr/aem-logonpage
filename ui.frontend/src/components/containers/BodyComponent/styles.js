import styled from "styled-components";

export const BodyContainer = styled.div`
    display: flex;
    height: 60vh;
    background: #E5E5E5;
    @media (min-height: 2000px) {
    height: 1000px;
}
`;

export const BodyDivImage = styled.div`
    display: flex;
    flex: 1 1 auto;
    background: transparent;
`;

export const BodyDivText = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5 1 auto;
    align-items: flex-end;
    background: transparent;
    margin-right: 5vw;
    margin-top: 5vh;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HomeH1 = styled.h1`
    color: #C12D18;
    font-size: 3.2vw;
    line-height: 3.2vw;
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
`;

export const HomeH2 = styled.h2`
    color: #C12D18;
    font-size: 2vw;
    line-height: 2vw;
    font-weight: 700;
    margin: 0;
`;

export const HomeP = styled.p`
    font-size: 1.2vw;
    font-weight: 400;
    color: #222222;
    margin: 0;
`;