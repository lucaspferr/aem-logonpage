import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border-radius: 50px;
    background: #26292c;
    border: 1px solid ${(props) => props.border};;
`;

export const InputForm = styled.input`
    border-radius: 50px;
    background: transparent;
    border: transparent;
    color: #E0E0E0;
    font-family: 'Poppins', sans-serif;
    width: 240px;
    font-size: 16px;
    padding-left: 20px;
    &:focus{
        outline-width: 0;
    }
`;

export const IconForm = styled.img`
    width: 15px;
    padding-left: 5px;
`;