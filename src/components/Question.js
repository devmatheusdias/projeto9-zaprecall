import React from 'react';
import styled from 'styled-components';
import setaPlay from '../assets/img/seta_play.png'


export default function Question() {
    return(
        <ContainerQuestionStyled>
            <p>Pergunta 1</p>
            <img src={setaPlay} alt="" />
        </ContainerQuestionStyled>
    );
}

const ContainerQuestionStyled = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0,0,0, 0.15);
    border-radius: 5px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-sizing: border-box;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;
`