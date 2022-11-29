import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import QuestionList from './QuestionsList';
import Completed from './Completed';

export default function Body(){
    return(
        <BodyContainer>
            <Logo></Logo>
            <QuestionList></QuestionList>
            <Completed></Completed>
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