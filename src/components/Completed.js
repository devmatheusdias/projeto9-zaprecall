import React from 'react';
import styled from 'styled-components';
import { cards } from '../cards'
import iconErro from '../assets/img/icone_erro.png';
import Party from '../assets/img/party.png'
import Sad from '../assets/img/sad.png'
import { useState } from 'react';



export default function Completed({ completados, answers }) {

    const [heightContainer, setHeightContainer] = useState('70px');
    const [emotion, setEmotion] = useState(Party);
    const [statusMessage, setStatusMessage] = useState('Parabéns!')
    const [message, setMessage] = useState('Você não esqueceu de nenhum flashcard!');
    const [display, setDisplay] = useState('none');

    function carregar() {

        if (completados == cards.length) {
            setHeightContainer('170px');
            setDisplay('flex')
            if (answers.includes(iconErro)) {
                setEmotion(Sad);
                setStatusMessage('Putz...')
                setMessage('Ainda faltam alguns... Mas não desanime!');
            }
        }
    }

    return (
        <CompletedContainerStyled heightContainer={heightContainer} onLoad={carregar} display={display}>
            <div className='final-message' >
                <p><img src={emotion} alt="" /><strong>{statusMessage}</strong></p>
                <p data-test="finish-text">{message}</p>
            </div>
            <p>{completados}/{cards.length} CONCLUÍDOS</p>
            <div className='answers-container' >
                {answers.map((answer) => <img src={answer}></img>)}
            </div>
        </CompletedContainerStyled>
    );
}

const CompletedContainerStyled = styled.div`
    width: 375px;
    height: ${(props) => props.heightContainer};
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 400;

    strong{
        font-weight: 700;
    }

    .final-message{
        flex-direction: column;
        display: ${(props) => props.display};
        justify-content: space-evenly;
        width: 160px;
        text-align: center;
        height: 88px;
        margin-bottom: 10px;
    }

    img{
        margin: 0px 4px;
    }

    .answers-container{
        margin-top: 5px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

`