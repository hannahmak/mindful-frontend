import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '@mui/material';
// import { style } from '@mui/system';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    max-width: 50%;
    max-height: 70%;
    background-color: white;
    padding:30px;
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    border-radius: 25px;

    @media only screen and (max-width: 768px) {
        max-width: 80%;
        max-height: 100%;
      }
`

const Joke = styled.p`
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #0F2046;

    @media only screen and (max-width: 768px) {
        font-size: 12px;
      }
`

const Exit = styled.img`
`

const Holder1 =styled.div`
    display:flex;
    height:10%;
    width:100%;
    justify-content:flex-end;
`
const Holder2 =styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const ContainerHolder = styled.div `
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:100vh;
    background: rgba(0, 0, 0, 0.3);
`


const JokesCard = ({
    joke="Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”",
    show=false,
    onHideInteract=()=>{},
    onGenerate=()=>{},
}) => {
    if(show === false){
        return <></>
    }
    return<ContainerHolder>
        <Container>
            <Holder1>
                <Exit src="/exit.svg" onClick={()=>{onHideInteract();}}/>
            </Holder1>
            <Holder2>
                <Joke>{joke}</Joke>
                <Button variant="contained" style={{width:248, height:75, borderRadius:60, backgroundColor:"#0F2046", textTransform:'none', fontSize:'24px', }} onClick={()=>{onGenerate();}}>Next</Button>
            </Holder2>
        </Container>
    </ContainerHolder> 
}

export default JokesCard;