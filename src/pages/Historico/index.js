import Navbar from '../../components/Navbar';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from "react";

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
                    
                </tr>
            )
        }
        return regs
    }

    return(
        <>
            <Navbar/>
            <h1>Página de historico</h1> 
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {carregarHistorico()}
                </tbody>
            </table>
        </>
    )
    
}

export default Historico; 
