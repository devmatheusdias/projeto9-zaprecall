import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import QuestionList from './QuestionsList';
import Completed from './Completed';
import Home from './home';
import { useState } from 'react';

export default function Body(){

    const [completados, setCompletados] = useState(0);

    return(
        <BodyContainer>
            <Home></Home>
            <Logo></Logo>
            <QuestionList completados={completados} setCompletados={setCompletados}></QuestionList>
            <Completed completados={completados}></Completed>
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