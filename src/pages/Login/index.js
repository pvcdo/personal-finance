import React from "react";
//import Botao from "../../components/Botao";
import {LoginArea, Usuario, Senha,AreaButtons, BotaoLogar} from './LoginComponents';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            senha: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }

    handleSubmit(event){
        alert('Usuario: ' + this.state.usuario + ' | ' + ' Senha: ' + this.state.senha)
    }

    render(){
        return(
            <>
                <LoginArea>
                    <label for='usuario'>Usuário:</label>
                    <br/>
                    <input
                        id='usuario'
                        name="usuario"            
                        type="text"
                        checked={this.state.usuario}
                        onChange={this.handleInputChange} 
                    />
                    <br />
                    <label for='senha'>Senha:</label>
                    <br/>
                    <input
                        id='senha'
                        name="senha"            
                        type="password"
                        value={this.state.senha}
                        onChange={this.handleInputChange} 
                    />
                    <br/>
                    <BotaoLogar 
                        type="submit" 
                        value="Logar"
                        onClick={this.handleSubmit}
                    />
                </LoginArea>
            </>
        )
    }
}

export default Login;
