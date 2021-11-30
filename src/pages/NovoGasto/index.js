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
    {value: '', label:'Tipo'},
    { value: 'cc', label: 'Cartão de crédito' },
    { value: 'bernardo', label: 'Bernardo' },
    { value: 'casa', label: 'Casa' }
]

const NovoGasto = () => {

    const [registro, setRegistro] = useState(0)
    const [data, setData] = useState()
    const [valor, setValor] = useState()
    const [tipo, setTipo] = useState()
    const [descricao, setDescricao] = useState()

    const armazenar = () => {
        setRegistro((e)=>{e++})
        localStorage.setItem("registro",registro)
        localStorage.setItem("data",data)
        localStorage.setItem("valor",valor)
        localStorage.setItem("tipo",tipo)
        localStorage.setItem("descricao",descricao)
    }

    return(
        <>
            <Navbar/>
            <form>
                <div style={formStyle}>
                    <div style={divSecLineStyle}>
                        <label for='data'>Data</label>
                        <br/>
                        <input id='data' type='date' name={data} onChange={(e) => {setData(e.target.value)}}/>
                    </div>
                    <div style={divSecLineStyle}>
                        <label for='valor'>Valor</label>
                        <br/>
                        <input id='valor' type='number' name={valor} onChange={(e) => {setValor(e.target.value)}}/>
                    </div>
                    <div style={{width:'300px'}}>
                        <label for='tipo'>Tipo</label>
                        <br/>
                        {/* essa o pai criou sozinho! */}
                        <Form.Select> 
                            {options.map((op) => {
                                return (
                                    <option 
                                        name={tipo} 
                                        value={op.value}
                                        onChange={(e)=> setTipo(e.target.value)}
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