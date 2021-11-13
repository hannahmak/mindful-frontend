import styled from 'styled-components';
import { useState } from 'react';
import { Button } from '@mui/material';
// import { style } from '@mui/system';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 50%;
height: 50%;
background-color:white;
padding:30px;

/* Glass Effect Fill */

background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.01) 0%, rgba(196, 196, 196, 0) 99.96%);
/* Glass Effect Effect's */

box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(15px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 25px;
`

const Joke = styled.p`
font-family: Quicksand;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 30px;
text-align: center;
color: white;
`

const Exit = styled.img`
`

const Holder1 =styled.div`
display:flex;
flex:0.3;
width:100%;
justify-content:flex-end;
`
const Holder2 =styled.div`
display:flex;
flex:3;
align-items:center;
justify-content:center;
`
const Holder3 =styled.div`
flex:1;
`
const ContainerHolder = styled.div `
position:absolute;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:100%;
background: rgba(0, 0, 0, 0.3);
`
const JokeButt = styled.button ``


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
            </Holder2>
            <Holder3>
                <Button variant="contained" style={{width:250, height:50, borderRadius:60, backgroundColor:"#9B738F"}} onClick={()=>{onGenerate();}}>Next</Button>
            </Holder3>
        </Container>
    </ContainerHolder> 
}

export default JokesCard;