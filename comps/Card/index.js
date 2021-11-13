import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    grid-area: ${props=>props.area};
    background: ${props=>props.background};
    /* Drop Shadow */
    
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
    padding:15px;
    gap:10px;
`

const Header = styled.div`
    display: flex;
    justify-content: start;
    font-weight:800;
    font-size:20px;
`

const ContentCont = styled.div`
display:flex;
align-items:center;
justify-content:${props=>props.justify};
    
`

const Content = styled.img`
    height: 120px;
    width: 120px;
`

const Description = styled.p`
color:#7E7E7E;
font-size:16px;
font-weight:400;

`

const Card = ({
    height= "300px",
    width= "300px",
    text= "Header",
    src="/moodbooster.svg",
    routeTo='/.', //this is needed for routing pages
    area='',
    background="#FFFFFF",
    justify="left",
}) => {
    return <Container as={motion.div} whileHover={{
        scale:1.05,
        transition: {
            duration:.1,
        }
    }}  background={background} onClick={()=>router.push(routeTo)} area={area} height={height} width={width}>
            <ContentCont justify={justify}>
                <Content src={src}/>
            </ContentCont>
            <Header>{text}</Header>
            <Description>Not feeling too well? It’s totally okay, take a breather here or let us crack up some jokes for you!</Description>
        </Container>
}
export default Card;