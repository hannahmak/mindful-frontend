import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';
import { height } from '@mui/system';


const Container = styled.div`
max-width:50%;
`

// const Buttons = styled.button``

const Breathe = ({
    go="true"
    
}) => {

    const container = useRef(null)

    useEffect(({
    }) => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData: require('../../assets/breathe.json'),
        })
    }, [])
    

    return <Container>
        <div className="container" ref={container}></div>
    </Container>
}

export default Breathe;