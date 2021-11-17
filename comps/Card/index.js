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
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
    gap:10px;
    justify-content: flex-end;
`

const Header = styled.div`
    display: flex;
    font-weight:800;
    font-size:13px;
    color: #0F2046;
    margin-bottom: 11px;
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

const Description = styled.div`
    color:#878FA2;
    font-size:13px;
    font-weight:400;
`

const TextCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: flex-end;
    margin: 44px 34px 34px 34px;
`

const Card = ({
    height= "300px",
    width= "300px",
    text= "Header",
    src="/moodbooster.svg",
    routeTo='/.',
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
            <TextCont>
                <Header>{text}</Header>
                <Description>Not feeling too well? It’s totally okay, take a breather here or let us crack up some jokes for you!</Description>
            </TextCont>
        </Container>
}
export default Card;