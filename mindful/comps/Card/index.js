import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    grid-area: ${props=>props.area};
    background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.1) 0%, rgba(196, 196, 196, 0) 99.96%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
    border-radius: 25px;
`

const Header = styled.div`
    display: flex;
    justify-content: start;
    padding: 20px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #FFFFFF;
`

const ContentCont = styled.div`
    display: flex;
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

const Card = ({
    height= "300px",
    width= "300px",
    text= "Header",
    src="/logo.png",
    routeTo='/.',
    area='',
    onButtonInteract=()=>{}
}) => {
    return <Container onClick={()=>{onButtonInteract();}} area={area} height={height} width={width}>
        <Header>{text}</Header>
        <ContentCont>
            <Content src={src}/>
        </ContentCont>
    </Container>
}

export default Card;