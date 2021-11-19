import {FaixaResumos,Resumo,AreaGrafica, Grafico} from './style'

const Painel = () => {
    return(
        <>
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