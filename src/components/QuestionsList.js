import React, { useState } from 'react';
import styled from 'styled-components';
import Question from './Question';
import { cards } from '../cards'


export default function QuestionsList() {

    return (
        <ContainerQuestionsListStyled>
            <ul>
                {cards.map((card) => 
                <li>
                    <Question card={card}></Question>
                </li>)}
            </ul>
        </ContainerQuestionsListStyled>
    );
}


const ContainerQuestionsListStyled = styled.div`
    width: 100%;
    height: 477px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    overflow-y: auto;

    ul li{
        margin-bottom: 30px;
    }
`