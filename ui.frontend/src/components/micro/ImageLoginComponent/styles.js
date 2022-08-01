import styled from "styled-components";

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%; 
    object-fit: cover;
`;
export const BackgroundImageContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const CompassLogo = styled.img`
    position: absolute;
    top: 2vh;
    width: 250px;
    left: calc(75vw - 125px);
    @media (max-width: 768px) {
        width: 250px;
        left: calc(50vw - 125px);
    }
`;

export const HomeImage = styled.img`
    width: 35vw;
    height: auto; 
    margin-top: 7.5vh;
    background: transparent;
    @media (max-width: 768px) {
        width: 70vw;
    }
    @media (max-width: 450px) {
        width: 95vw;
    }
    
`;
