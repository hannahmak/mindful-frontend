import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import AvatarPicture from '../AvatarPicture';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:90%;
`

const Circle = styled.img`
width:${props=>props.width};
height:${props=>props.height};
border-radius:${props=>props.borderRadius};
background-color: #B0D8D2;
`

const Holder1 = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-start;
`
const Holder2 = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-end;
height:100%;
width:100%;
`

const Check = styled.img `
width:20px;
`

const Moods = ({
    source="logo2.svg",
    width="70px",
    height="70px",
    borderRadius="160px",
    src="/open.svg",
    hover="false",
}) => {
    return <Container>
        <Holder1>
            <AvatarPicture height="79px" width="79px" />
        </Holder1>
        <Holder2>
            <Check src={src}/>
        </Holder2>
    </Container>
}

export default Moods;