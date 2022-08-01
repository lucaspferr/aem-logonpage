import styled from "styled-components";

export const HomeFooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 15vh;
    background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
    @media (min-height: 2000px) {
    height: 200px;
    }
    /* position: absolute;
    bottom: 0; */
`;

export const HomeFooterText = styled.p`
    height: 50px;
    border-right: 2px solid #fff;
    font-size: 1vw;
    font-weight: 400;
    color: white;
    margin: 0;
    padding-left: 100px;
    padding-right: 20px;
    text-align: center;
    vertical-align: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const HomeFooterButtonContainer = styled.div`
    width: 240px;
    height: 15vh;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: row-reverse;
        width: 100vw;
    }
`;

export const HomeFooterButtonKeep = styled.button`
    height: 15vh;
    width: 120px;
    font-size: 12px;
    font-weight: 400;
    border: 0px transparent;
    color: #C13216;
    line-height: 18px;
    background: #FFFFFF;
    @media (max-width: 768px) {
        width: 70vw;
    }
    
`;

export const HomeFooterButtonLog = styled.button`
    height: 15vh;
    width: 120px;
    font-size: 12px;
    font-weight: 700;
    border: 0px transparent;
    color: #fff;
    background: transparent;
`;