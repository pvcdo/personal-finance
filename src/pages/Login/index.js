import React from "react";

import {CampoInput,Cadastre,LoginForm, LoginArea, BotaoLogar} from './LoginComponents';
import {Nav} from '../../components/Navbar/style';

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
                <Nav />
                <LoginArea>
                    <LoginForm method='post'>
                        <label for='usuario'>e-mail:</label>
                        <br/>
                        <CampoInput
                            id='usuario'
                            name="usuario"            
                            type="text"
                            checked={this.state.usuario}
                            onChange={this.handleInputChange} 
                        />
                        <br /><br />
                        <label for='senha'>senha:</label>
                        <br/>
                        <CampoInput
                            id='senha'
                            name="senha"            
                            type="password"
                            value={this.state.senha}
                            onChange={this.handleInputChange} 
                        />
                        <br/>
                        <br/>
                        <BotaoLogar 
                            type="submit"
                            onClick={this.handleSubmit}
                        >Logar</BotaoLogar>
                        <br/>
                        <br/>
                    </LoginForm>
                    <Cadastre>
                        <p style={{color: '#666'}}>Não tem login? <a style={{color: '#666'}} href="#">Cadastre-se!</a></p>
                    </Cadastre>
                </LoginArea>
            </>
        )
    }
}

export default Login;
