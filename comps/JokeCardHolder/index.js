import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    grid-area: ${props=>props.area};
    background: #FFFFFF;
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
`

const Header = styled.div`
    display: flex;
    justify-content: start;
    padding: 20px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
`

const ContentCont = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    height: 140%;
`

const Content = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    height: 100px;
    width: 100px;
`

const Text = styled.p`
`

const JokeCardHolder = ({
    height= "300px",
    width= "300px",
    text= "Header",
    src="/quotes.svg",
    area='',
    onButtonInteract=()=>{} //added for joke ftr.
}) => {
    return <Container as={motion.div} whileHover={{
        scale:1.05,
        transition: {
            duration:.1,
        }
    }} area={area} height={height} width={width}>
        <ContentCont>
            <Content src={src}/>
        <Button style={{width:248, height:75, borderRadius:60, color:"#0F2046", borderColor:"#0F2046", border:' solid 3px', textTransform:'none', fontSize:'24px'}}  onClick={()=>{onButtonInteract();}} variant="outlined">Joke</Button>
        </ContentCont>
    </Container>
}
export default JokeCardHolder;