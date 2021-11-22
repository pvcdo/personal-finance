import React from "react";
import Botao from "../../components/Botao";
import {LoginArea, Usuario, Senha} from './LoginComponents';

const Login = () => {
    return(
        <>
            <LoginArea>
                <Usuario>
                    Paulo
                </Usuario>
                <Senha>
                    123456
                </Senha>
                <Botao name="Logar" color="green"/>
                <Botao name="Cadastrar" color="yellow"/>
            </LoginArea>
        </>
    )
}

export default Login;
