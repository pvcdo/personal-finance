import React, {useState} from 'react';

import Navbar from '../../components/Navbar';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

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
    { value: '',            label:'Tipo'},
    { value: 'cc',          label: 'Cartão de crédito' },
    { value: 'bernardo',    label: 'Bernardo' },
    { value: 'casa',        label: 'Casa' }
]

const NovoGasto = () => {

    const [registro, setRegistro] = useState(0)
    const [data, setData] = useState()
    const [valor, setValor] = useState()
    const [tipo, setTipo] = useState()
    const [descricao, setDescricao] = useState()

    class Despesa {
        constructor(data,valor,tipo,descricao){
            this.data = data
            this.valor = valor
            this.tipo = tipo
            this.descricao = descricao
        }
    }

    

    const armazenar = () => {
        const despesa = new Despesa(
            data,
            valor,
            tipo,
            descricao
        )
        localStorage.setItem(registro, JSON.stringify(despesa))
        setRegistro(registro + 1)
    }

    return(
        <>
            <Navbar/>
            <form>
                <div style={formStyle}>
                    <div style={divSecLineStyle}>
                        <label for='data'>Data</label>
                        <br/>
                        <input id='data' type='date' onChange={(e) => {setData(e.target.value)}}/>
                    </div>
                    <div style={divSecLineStyle}>
                        <label for='valor'>Valor</label>
                        <br/>
                        <input id='valor' type='number' onChange={(e) => {setValor(e.target.value)}}/>
                    </div>
                    <div style={{width:'300px'}}>
                        <label for='tipo'>Tipo</label>
                        <br/>
                        {/* essa o pai criou sozinho! */}
                        <Form.Select 
                            id="tipo"
                            onChange={ (e)=>{ 
                                setTipo(e.target.value)
                                document.getElementById('tipo').style.border= '1px solid #676774'

                        }}> 
                            {options.map((op) => {
                                return (
                                    <option
                                        value={op.value}
                                    >
                                        {op.label}
                                    </option>
                                )
                            })}
                        </Form.Select>
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
                            name={descricao}
                            onChange={(e) => {setDescricao(e.target.value)}}
                        />
                    </div>
                </div>
                <div style={formStyle}>
                    <Button 
                        onClick={()=>armazenar()} 
                        variant="outline-success">
                        Registrar
                    </Button>
                </div>
            </form>
        </>
    )
}

export default NovoGasto;