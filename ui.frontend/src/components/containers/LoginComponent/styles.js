import styled from "styled-components";

export const DivExtern = styled.div`
display: flex;
flex-direction: column;
min-width: 50vw;
height: 100%;
align-items: center;
background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);

@media (max-width: 768px) {
    width: 100vw;
}
@media (min-height: 2000px) {
    height: 1000px;
}
`;

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding-bottom: 10vh;
    align-items: flex-start;
    justify-content: space-evenly;
    min-width: 300px;
    @media (max-width: 768px) {
        margin-top: 10vh;
        height: 85vh;
        padding-bottom: 5vh;
    }
    @media (min-height: 2000px) {
    height: 90%;
    }
`;

export const DivTexts = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const Title = styled.h1`
    font-size: 48px;
    margin: 0;
    font-weight: normal;
    color: #E0E0E0;
`;

export const Text = styled.p`
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    color: #E0E0E0;
`;

export const DivInputs = styled.div`
    display: flex;
    height: 250px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`;

export const TitleForm = styled.h1`
    font-size: 30px;
    font-weight: normal;
    margin: 0;
    color: #E0E0E0;
`;

export const InvalidTextContainer = styled.div`
    height: 20px;
    align-self: center;
    `;

export const InvalidText = styled.p`
    font-size: 14px;
    color: #E9B425;
    font-weight: 700;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    max-height: 100vh;
`;