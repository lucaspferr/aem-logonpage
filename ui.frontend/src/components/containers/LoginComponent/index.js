import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import user_icon from "./images/icon-user.svg";
import pass_icon from "./images/icon-password.svg";
import InputComponent from "../../micro/InputComponent";
import ButtonComponent from "../../micro/ButtonComponent";
import { Container, DivForm, DivExtern, DivInputs, InvalidText, InvalidTextContainer, Title, Text, TitleForm, DivTexts } from "./styles";
import ImageLoginComponent from "../../micro/ImageLoginComponent";
import { useHistory } from "react-router-dom";

const LoginComponent = props => {

    const [form, setForm] = React.useState({ username: "", password: "" });
    const [borderColor, setBorderColor] = React.useState("#fff");
    let history = useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        if (form.username === "admin" && form.password === "admin") {
            localStorage.setItem("token", "admin");
            history.push("/content/reactapp/us/en/compasshome.html?wcmmode=disabled");
        } else {
            setBorderColor("#E9B425");
        }
    }

    function handleChange({ target }) {
        const { id, value } = target;
        setForm({ ...form, [id]: value });
    }


    return (
        <Container>
            <DivExtern>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <DivForm>
                        <DivTexts>
                            <Title>{props.title ? props.title : "Olá,"}</Title>
                            <Text>
                                {props.paragraph ? props.paragraph : "Para continuar navegando de forma segura, efetue o login na rede."}
                            </Text>
                        </DivTexts>
                        <DivInputs>
                            <TitleForm>{props.logintext ? props.logintext : "Login"}</TitleForm>
                            <InputComponent id="username" placeholder={props.usertext ? props.usertext : "Usuário"} icon={user_icon} border={borderColor} value={form.username} onChange={handleChange} />
                            <InputComponent id="password" placeholder={props.passwordtext ? props.passwordtext : "Senha"} icon={pass_icon} border={borderColor} type="password" value={form.password} onChange={handleChange} />
                            <InvalidTextContainer>
                                {borderColor === "#E9B425" && (
                                    <InvalidText>
                                        Ops, usuário ou senha inválidos.<br />Tente novamente!
                                    </InvalidText>)}
                            </InvalidTextContainer>
                        </DivInputs>
                        {/* <Link to="/content/logoncompass/us/en/compasshome.html?wcmmode=disabled"> */}
                        <ButtonComponent type='submit' value={props.buttontext ? props.buttontext : "Continuar"} />
                        {/* </Link> */}
                    </DivForm>
                </form>
            </DivExtern>
            <ImageLoginComponent />
        </Container>

    );
}

export default MapTo('reactapp/components/login-component')(LoginComponent);