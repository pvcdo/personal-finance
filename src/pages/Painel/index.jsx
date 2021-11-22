import Navbar from '../../components/Navbar';

import {FaixaResumos,Resumo,AreaGrafica, Grafico} from './style'

const Painel = () => {
    return(
        <>
            <Navbar/>
            <FaixaResumos>
                <Resumo />
                <Resumo />
                <Resumo />
            </FaixaResumos>
            <AreaGrafica>
                <Grafico />
            </AreaGrafica>
            <AreaGrafica>
                <Grafico />
            </AreaGrafica>
            <AreaGrafica>
                <Grafico />
            </AreaGrafica>
        </>
    )
}

export default Painel;