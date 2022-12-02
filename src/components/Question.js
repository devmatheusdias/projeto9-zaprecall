import React, { useState } from 'react';
import styled from 'styled-components';
import setaPlay from '../assets/img/seta_play.png'
import setaVirar from '../assets/img/seta_virar.png'
import iconErro from '../assets/img/icone_erro.png';
import iconQuase from '../assets/img/icone_quase.png';
import iconCerto from '../assets/img/icone_certo.png';



export default function Question({card, completados, setCompletados}) {

    let cont = 0;

    const [vetor, setVetor] = useState([]);
    const [displayQuestion, setDisplayQuestion] = useState("flex");
    const [displayFrontCard, setDisplayFrontCard] = useState("none");
    const [displayButtons, setDisplayButtons] = useState("none");
    const [textCard, setTextCard] = useState(card.question);
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

            } else if (color == 'orange') {
                setIcon(iconQuase)
            } else {
                setIcon(iconCerto)
            }
            adicionar();
            setTextLineThrough('line-through');
            setCompletados(completados+=1);
            setDisabledButton(true);
        }
    }

    // function setColor(){
    //     setDisplayFrontCard("none");
    //     setDisplayQuestion("flex");
    //     setDisplayButtons("none");
    //     setTextCard(card.question);
    // }

    return (
        <>
            <ContainerQuestionStyled displayQuestion={displayQuestion} cont={cont} textLineThrough={textLineThrough} disabled>
                <p>pergunta</p>
                <button onClick={() => adicionar(card)} disabled={disabledButton} ><img src={icon}></img></button>
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

// const Container = styled.div`
//     background-color: blueviolet;
//     position: relative;
// `

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
    cursor: pointer;
    text-decoration: ${((props) => props.textLineThrough)};
    
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

// const ContainerFlashCardBack = styled.div`
//     width: 299px;
//     height: 131px;
//     border-radius: 5px;
//     box-shadow: 0px 4px 5px rgba(0,0,0, 0.15);
//     background-color: #FFFFD5;
//     padding: 15px;
//     box-sizing: border-box;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     margin-bottom: 15 px;

//     p{
//         font-size: 18px;
//         font-weight: 400;
//         line-height: 21.6px;
//         color: #333333;
//     }

//     img{
//         width: 30px;
//         height: 20px;
//     }

// `

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