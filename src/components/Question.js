import React, { useState } from 'react';
import styled from 'styled-components';
import setaPlay from '../assets/img/seta_play.png'
import setaVirar from '../assets/img/seta_virar.png'
import iconErro from '../assets/img/icone_erro.png';
import iconQuase from '../assets/img/icone_quase.png';
import iconCerto from '../assets/img/icone_certo.png';



export default function Question({ card, completados, setCompletados, key }) {


    const [vetor, setVetor] = useState([]);
    const [displayQuestion, setDisplayQuestion] = useState("flex");
    const [displayFrontCard, setDisplayFrontCard] = useState("none");
    const [displayButtons, setDisplayButtons] = useState("none");
    const [textCard, setTextCard] = useState(card.question);
    const [textColor, setTextColor] = useState("");
    const [icon, setIcon] = useState(setaPlay);
    const [textLineThrough, setTextLineThrough] = useState("none");
    const [disabledButton, setDisabledButton] = useState(false);


    function adicionar() {
        if (displayQuestion == "flex" && displayFrontCard == "none") {
            setDisplayQuestion("none")
            setDisplayFrontCard("flex");
        } else {
            setDisplayQuestion("flex")
            setDisplayFrontCard("none");
        }
    }

    function rotateCard(color) {

        if (displayButtons == "none") {
            setDisplayButtons("flex");
            setTextCard(card.answer);

        } else {
            setDisplayButtons("none")
            setTextCard(card.question);

            if (color == 'red') {
                setIcon(iconErro)
                setTextColor('red')

            } else if (color == 'orange') {
                setIcon(iconQuase)
                setTextColor('orange')

            } else {
                setIcon(iconCerto)
                setTextColor('green')

            }
            adicionar();
            setTextLineThrough('line-through');
            setCompletados(completados += 1);
            setDisabledButton(true);
        }
    }


    return (
        <>
            <ContainerQuestionStyled displayQuestion={displayQuestion} textColor={textColor} textLineThrough={textLineThrough} disabled>
                <p>pergunta {card.key}</p>
                <button onClick={() => adicionar(card)} disabled={disabledButton}><img src={icon}></img></button>
            </ContainerQuestionStyled>

            <ContainerFlashCardFront displayFrontCard={displayFrontCard}>
                <p>{textCard}</p>
                <a href="#" onClick={() => { rotateCard() }} ><img src={setaVirar} alt="" /></a>
                <ContainerButtons displayButtons={displayButtons}>
                    <ButtonStyled onClick={() => rotateCard('red')} color={'red'}>Não sei</ButtonStyled>
                    <ButtonStyled onClick={() => rotateCard('orange')} color={'orange'}>Quase não lembrei</ButtonStyled>
                    <ButtonStyled onClick={() => rotateCard('green')} color={'green'}>Sei</ButtonStyled>
                </ContainerButtons>
            </ContainerFlashCardFront>
        </>
    );
}

const ContainerQuestionStyled = styled.div`
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0,0,0, 0.15);
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    display: ${(props) => props.displayQuestion};
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    text-decoration: ${((props) => props.textLineThrough)};
    color: ${(props) => props.textColor};

    button{
        cursor: ${props => props.disabledButton ? '' : 'pointer'};
        border: none;
        background-color: transparent;
    }
    
`

const ContainerFlashCardFront = styled.div`
    width: 299px;
    height: 131px;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0,0,0, 0.15);
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 20px;
    justify-content: space-between;
    display: ${(props) => props.displayFrontCard};
    flex-direction: column;
    background-color: #FFFFD5;
    font-size: 18px;
    font-weight: 400;
    position: relative;

    a{
        margin-left: auto;
        border: none;
        background-color: transparent;
        img{
            width: 30px;
            height: 20px;
            position: absolute;
            right: 15px;
            bottom: 15px;
        }
    }


`

const ContainerButtons = styled.div`
    display: ${(props) => props.displayButtons};
    justify-content: space-between;
`

const ButtonStyled = styled.button`
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    border: none;
    z-index: 1;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
    background-color: ${(props) => props.color};
    cursor: pointer;
`