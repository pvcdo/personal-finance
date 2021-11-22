import styled from 'styled-components';

export const LoginArea = styled.div`
    background-color: #87F6FF;

    margin-left: calc((100vw - var(--largura))/2);
    margin-top: calc((70vh - var(--altura))/2);

    padding: 10px;

    --largura: 400px;
    --altura: 300px;    
    width: var(--largura);
    height: var(--altura);

    border-radius: 30px;
`;

export const Usuario = styled.div`
    background-color: red;
    margin-top: 60px;
`;

export const Senha = styled.div`
    background-color: red;
    margin-top: 60px;
`;

export const Botao = styled.button`
    background-color: red;
    border: none;
    margin: 10px;
    padding: 15px 32px;
`;

export const AreaButtons = styled.div`
    
`;

