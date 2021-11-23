import styled from 'styled-components';

export const LoginArea = styled.div`

    padding: 50px;

    margin-left: calc((100vw - var(--largura))/2);
    margin-right: calc((100vw - var(--largura))/2);
    margin-top: calc((70vh - var(--altura))/2);

    --largura: 400px;
    --altura: 300px;
`;

export const LoginForm = styled.form`
    justify-content: end;

    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

export const TesteDiv = styled.div`
    border: red 1px solid;
`;

export const CampoInput = styled.input`
    width: 100%;
    border: 1px solid #CCCCCC;
`;

export const Senha = styled.div`
    background-color: red;
`;

export const BotaoLogar = styled.button`
    display: inline-block ;
    background-color: #499167;
    border: none;
    width: 100%;
    padding: 10px;
    font-weight:bold;
    color: #fff;
    border-radius: 3px;
    &:hover{
        background-color: rgba(29,57,40,0.7);
    }
`;

export const AreaButtons = styled.div`
    display: flex;
    justify-content: end;
`;

export const Cadastre = styled.div`
    display: flex;
    justify-content: end;
`;

