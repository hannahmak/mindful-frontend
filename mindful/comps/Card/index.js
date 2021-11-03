import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    border-radius: 25px;
`

const Header = styled.div`
    padding: 20px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;
`

const Content = styled.img`
    display: flex;
    justify-content: center;
    align-self: center;
    height: 150px;
    width: 150px;
`

const Card = ({
    height= "300px",
    width= "300px",
    text= "Header",
    src="/logo.png",
    routeTo='/.'
}) => {
    return <Container height={height} width={width} onClick={()=>router.push(routeTo)}>
        <Header>{text}</Header>
        <Content src={src}></Content>
    </Container>
}

export default Card;