import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
display: flex;
align-itens: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
`;

const InputArea = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
width: 120px;
padding 0 10px;
border: 1px solid #bbb;
border-radius: 5px;
height: 40px;
`;

const Label = styled.label`
`;

const Button = styled.button`
padding: 10px;
cursor: pointer;
border-radius: 5px;
border: none;
background-color: #2c73d2;
color: white;
height: 42px;
`;

const Form = ({onEdit}) => {

    const ref = useRef();

    return (
        <FormContainer ref={ref}>

            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"></Input>
            </InputArea>

            <InputArea>
                <Label>E-mail</Label>
                <Input name="emial" type="email"></Input>
            </InputArea>

            <InputArea>
                <Label>Telefone</Label>
                <Input name="fone"></Input>
            </InputArea>

            <InputArea>
                <Label>Data de nascimento:</Label>
                <Input name="data_nascimento" type="date"></Input>
            </InputArea>

            <Button type="submit">SALVAR</Button>
            
        </FormContainer>
    );
};

export default Form;