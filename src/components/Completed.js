import React from 'react';
import styled from 'styled-components';

export default function Completed(){
    return(
        <CompletedContainerStyled>
            <p>0/4 CONCLUÍDOS</p>
        </CompletedContainerStyled>
    );
}

const CompletedContainerStyled = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
`