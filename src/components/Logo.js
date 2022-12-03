import logo from '../assets/img/logo.png'
import React from 'react';
import styled from 'styled-components';

export default function Logo() {
    return (
        <ContainerLogoStyled>
            <LogoImageStyled src={logo}></LogoImageStyled>
            <LogoTitleStyled>ZapRecall</LogoTitleStyled>
        </ContainerLogoStyled>
    );
}

const ContainerLogoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0px;
    box-sizing: border-box;

`

const LogoImageStyled = styled.img`
    width: 52px;
    height: 60px;
    margin-right: 20px;
`
const LogoTitleStyled = styled.h1`
    font-size: 36px;
    line-height: 44.7px;
    color: #FFFFFF;
    font-weight: 400;
    letter-spacing: -0.012em;
    font-family: 'Roboto', sans-serif;
    font-family: 'Righteous', cursive;
`
