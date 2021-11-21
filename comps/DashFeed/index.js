import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 51px;
    width:60%;
`

const TextContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 33px;
`

const DashText = styled.div`
    font-family: Inter;
    font-weight: ${props=>props.dashweight};
    font-size: ${props=>props.dashsize};
    color: #0F2046;
    cursor: pointer;
`

const FeedText = styled.div`
    font-family: Inter;
    font-weight: ${props=>props.feedweight};
    font-size: ${props=>props.feedsize};
    color: #0F2046;
    cursor: pointer;
`

const DashFeed = ({
    dashweight="200",
    dashsize="14px",
    feedweight="200",
    feedsize="14px",
}) => {
    return  <Container>
                <TextContainer>
                    <DashText dashsize={dashsize} dashweight={dashweight} onClick={()=>router.push('/dashboard')} >Dashboard</DashText>
                    <FeedText feedsize={feedsize} feedweight={feedweight} onClick={()=>router.push('/feed')}>Feed</FeedText>
                </TextContainer>
            </Container>
}
export default DashFeed;