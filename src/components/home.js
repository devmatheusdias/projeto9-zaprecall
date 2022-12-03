import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo.png'


export default function Home() {

    const [display, setDisplay] = useState("flex");

    function redirect(){
        setDisplay("none");
    }

    return (
        <ContainerStyled display={display}>
            <img src={Logo} />
            <h1>ZapRecall</h1>
            <button onClick={redirect}>Iniciar Recall!</button>

        </ContainerStyled>
    );
}


const ContainerStyled = styled.div`
    background-color: #FB6B6B;
    height: 100%;
    width: 100%;
    font-size: 36px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 44.7px;
    display: ${(props) => props.display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;

    img{
        width: 136px;
        height: 161px;
    }

    h1{
        margin: 40px 0px;
    }

    button{
        width: 246px;
        height: 54px;
        font-size: 18px;
        line-height: 21.6px;
        font-weight: 400;
        color: #D70900;
        background: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    }

`