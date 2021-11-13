import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 30px;
`

const Button = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 70px;
width: 240px;
border-radius: 40px;
border-style: solid;
border-color: ${props=>props.border};
background-color: ${props=>props.back};
`

const CompName = styled.p`
font-style: normal;
color:${props=>props.color};
font-weight: 300;
font-size: 20px;
`



const TalkButton = ({
    text="Friends",
    back="#9B738F",
    border="#9B738F",
    color="white",
    
}) => {
    return <Container>
        <Button onClick={()=>router.push(routeTo)} back={back} border={border}>
        <CompName color={color}>{text}</CompName>
        </Button>
    </Container>
}

export default TalkButton;