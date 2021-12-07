import Navbar from '../../components/Navbar';

import { Container } from '../../components/Container/style'
import Table from 'react-bootstrap/Table'

import React from "react";

const border = {
    border: "1px solid #dddddd",
}

const Historico = () => {
    
    const carregarHistorico = () => {
        let regs = []
        for(let n = 0; n < localStorage.length; n++){
            let despesa = JSON.parse(localStorage.getItem(n))
            
            let data = despesa.data
            let tipo = despesa.tipo
            let valor = despesa.valor
            let descricao = despesa.descricao

            regs.push(
                <tr>
                    <td>{data}</td>
                    <td>{tipo}</td>
                    <td>{valor}</td>
                    <td>{descricao}</td>
                    <td style={{textAlign:"center"}}>
                        <i className="far fa-edit"></i>
                    </td>
                    <td style={{textAlign:"center"}}>
                        <span style={{color:"red"}}><i className="fas fa-trash-alt"></i></span>
                    </td>
                </tr>
            )
        }

        if(localStorage.length === 0){
            
            regs.push(
                <tr>
                    <td colSpan="5" style={{textAlign:"center"}}>
                        Histórico vazio! Registre novos gastos e faça a consulta nesta página!
                    </td>
                </tr>
            )
        }

        return regs
    }

    return(
        <>
            <Navbar/>
            <Container>
                <h1>Página de historico</h1> 
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={border}>Data</th>
                            <th style={border}>Tipo</th>
                            <th style={border}>Valor</th>
                            <th style={border}>Descrição</th>
                            <td colSpan="2"></td>
                        </tr>
                    </thead>
                    <tbody>
                        {carregarHistorico()}
                    </tbody>
                </Table>
            </Container>
        </>
    )
    
}

export default Historico; 
