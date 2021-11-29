import Navbar from '../../components/Navbar';
import Select from 'react-select';
import Button from 'react-bootstrap/Button'

import React from "react";

const formStyle = {
    display: 'flex',
    margin: '40px'
};

const divSecLineStyle = {
    marginRight: "20px"
}

const divDescStyle = {
    width:'100%'
};

const options = [
    { value: 'cc', label: 'Cartão de crédito' },
    { value: 'bernardo', label: 'Bernardo' },
    { value: 'casa', label: 'Casa' }
]

const NovoGasto = () => {
    return(
        <>
            <Navbar/>
            <form>
                <div style={formStyle}>
                    <div style={divSecLineStyle}>
                        <label for='data'>Data</label>
                        <br/>
                        <input id='data' type='date' value=''/>
                    </div>
                    <div style={divSecLineStyle}>
                        <label for='valor'>Valor</label>
                        <br/>
                        <input id='valor' type='number' value=''/>
                    </div>
                    <div style={{width:'300px'}}>
                        <label for='tipo'>Tipo</label>
                        <br/>
                        <Select
                            options={options}
                        />
                    </div>
                </div>
                <div style={formStyle}>
                    <div style={divDescStyle}>
                        <label for='descricao'>Descrição</label>
                        <br/>
                        <input 
                            style={{width:'100%'}} 
                            id='descricao' 
                            type='text' 
                        />
                    </div>
                </div>
                <div style={formStyle}>
                    <Button variant="outline-success">
                        Registrar
                    </Button>
                </div>
            </form>
        </>
    )
}

export default NovoGasto;