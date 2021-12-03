import { useState } from 'react';
import styled from 'styled-components';
import AvatarPicture from '../AvatarPicture';

const Container = styled.div`
display:flex;
flex-direction:row;
background-color:white;
width:100%;
padding:10px;
gap:50px;
border-radius: 25px;
gap:50px;
`
const Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;

`

const Row2 = styled.div`
display:flex;
flex-direction:column;
`

const Image = styled.img `
width:70px;
`

const Name = styled.p `
font-size:20px;
font-weight:600;
margin-bottom:-10px;
`

const Mood = styled.p `
`

const Active = styled.div `
background-color:#BAE490;
width:10px;
height:10px;
position:absolute;
bottom:10px;
right:13px;
border-style:solid;
border-color:white;
border-width:thin;
border-radius:100px;
`

const Friend = ({
    name="[name]",
    mood="[mood]",
    source="/happy.svg"

}) => {

    return <Container>
        <Row1>
            <Image src={source}/>
            <Active></Active>
        </Row1>
        <Row2>
            <Name>{name}</Name>
            <Mood>{mood}</Mood>
        </Row2>
    </Container>
}

export default Friend;