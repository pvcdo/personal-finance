import Navbar from '../../components/Navbar';
import MultipleSelect from '../../components/OpenSelection'

import React from "react";

const formStyle = {
    display: 'flex',
    margin: '40px'
};

const divStyle = {
    width:'100%'
};

const NovoGasto = () => {
    return(
        <>
            <Navbar/>
            <form>
                <div style={formStyle}>
                    <div>
                        <label for='data'>Data</label>
                        <br/>
                        <input id='data' type='date' value=''/>
                    </div>
                    <div>
                        <label for='valor'>Valor</label>
                        <br/>
                        <input id='valor' type='number' value=''/>
                    </div>
                    <div style={{display: 'flex', flexDirection:'row'}}>
                        <MultipleSelect options={[
                            'c/c',
                            'Bernardo',
                        ]} />
                    </div>
                </div>
                <div style={formStyle}>
                    <div style={divStyle}>
                        <label for='descricao'>Descrição</label>
                        <br/>
                        <input style={{width:'100%'}} id='descricao' type='text' value=''/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default NovoGasto;
