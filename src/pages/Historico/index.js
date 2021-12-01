import Navbar from '../../components/Navbar';

import React from "react";

const carregarHistorico = () => {
    const n_regs = localStorage.length
    for(let n in localStorage){
        return(
            localStorage.getItem(n)
        )
    }
}



const Historico = () => {
    
    return(
        <>
            <Navbar/>
            <h1>Página de historico</h1> 
            <table>
                <tr>
                    <th>Data</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th>Descrição</th>
                    <td></td>
                    <td></td>
                </tr>
                {/*carregarHistorico()*/}
            </table>
        </>
    )
    
}

export default Historico; 
