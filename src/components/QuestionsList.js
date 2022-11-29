import React from 'react';
import styled from 'styled-components';
import Question from './Question';

export default function QuestionsList(){
    return(
        <ContainerQuestionsListStyled>
            <Question></Question>
            {/* <Question></Question>
            <Question></Question>
            <Question></Question>
            <Question></Question>
            <Question></Question> */}

        </ContainerQuestionsListStyled>
    );
}


const ContainerQuestionsListStyled = styled.div`
    width: 100%;
    height: 477px;
    background-color: cyan;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
`