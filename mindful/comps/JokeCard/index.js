import styled from 'styled-components';
import { useState } from 'react';
import Button from '../Button'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 586px;
height: 503px;
background-color:white;
padding:30px;

/* Glass Effect Fill */

background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
/* Glass Effect Effect's */

box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
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



const Exit = styled.button`
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



const JokesCard = ({
    joke="Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”"
}) => {
    return <Container>
        <Holder1>
            <Exit>Exit</Exit>
        </Holder1>
        <Holder2>
            <Joke>{joke}</Joke>
        </Holder2>
        <Holder3>
            <Button ButtonText="Next"/>
        </Holder3>
    </Container>
}

export default JokesCard;