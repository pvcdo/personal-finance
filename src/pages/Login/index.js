import React from "react";
import {Link} from 'react-router-dom'

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
                    <LoginForm>
                        <label style={{color:'#666'}} for='usuario'>e-mail:</label>
                        <br/>
                        <CampoInput
                            id='usuario'
                            name="usuario"            
                            type="text"
                            checked={this.state.usuario}
                            onChange={this.handleInputChange} 
                        />
                        <br /><br />
                        <label style={{color:'#666'}} for='senha'>senha:</label>
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
                        <Link to='/painel' activeStyle>
                            <BotaoLogar 
                                type="submit"
                                //onClick={this.handleSubmit}
                            >
                                Logar
                            </BotaoLogar>
                        </Link>
                        <br/>
                        <br/>
                    </LoginForm>
                    <Cadastre>
                        <p style={{color: '#666'}}>Não tem login? <a style={{color: '#666'}} href="/cadastrar">Cadastre-se!</a></p>
                    </Cadastre>
                </LoginArea>
            </>
        )
    }
}

export default Login;
