import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';

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
    justify-content: center;
    font-weight:600;
    font-size:18px;
    padding-top: 15px;
    text-align: center;
    color: #0F2046;
`

const ContentCont = styled.div`
display:flex;
align-items:center;
justify-content:${props=>props.justify};
    
`

const Content = styled.img`
    padding-top: 15px;
    height: 65px;
    width: 65px;
`

const Description = styled.p`
color:#878FA2;
font-size:15px;
font-weight:400;
text-align: center;
padding-bottom: 15px;
`

const LockedBadges = ({
    height= "900px",
    width= "900px",
    text= "Header",
    description="To unlock this badge, use the Breathe Tool. This is found in the Mood Booster page.",
    src="/lock.svg",
    routeTo='/.', //this is needed for routing pages
    area='',
    background="#F2F3F7",
    justify="center",
}) => {
    return <Container background={background} onClick={()=>router.push(routeTo)} area={area} height={height} width={width}>
        <ContentCont justify={justify}>
            <Content src={src}/>
        </ContentCont>
        <Header>{text}</Header>
        <Description>{description}</Description>
    </Container>
}
export default LockedBadges;