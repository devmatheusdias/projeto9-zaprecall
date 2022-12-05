import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import QuestionList from './QuestionsList';
import Completed from './Completed';
import Home from './home';
import { useState } from 'react';
import iconErro from '../assets/img/icone_erro.png';
import iconQuase from '../assets/img/icone_quase.png';
import iconCerto from '../assets/img/icone_certo.png';

export default function Body() {

    const [completados, setCompletados] = useState(0);
    const [answers, setAnswers] = useState([]);


    return (
        <BodyContainer>
            <Home></Home>
            <Logo></Logo>
            <QuestionList completados={completados} setCompletados={setCompletados} answers={answers} setAnswers={setAnswers}></QuestionList>
            <Completed completados={completados} answers={answers}></Completed>
        </BodyContainer>
    );
}

const BodyContainer = styled.div`
    width: 375px;
    height: 667px;
    background-color: #FB6B6B;
    border: 1px solid #DBDBDB;
    margin: 200px auto;
    position: relative;

`