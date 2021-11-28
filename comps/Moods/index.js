import { border, borderRadius, style, width } from '@mui/system';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


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
    source="/camera.svg",
    width="79px",
    height="79px",
    borderRadius="160px",
    src="/open.svg",
    hover="false",
}) => {
    return <Container>
        <Holder1>
            <Circle borderRadius={borderRadius}  source={source} height={height} width={width} />
        </Holder1>
        <Holder2>
            <Check src={src}/>
        </Holder2>
    </Container>
}

export default Moods;