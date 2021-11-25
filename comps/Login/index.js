import styled from 'styled-components';
import React, {useEffect, useRef, useState} from 'react';
import lottie from 'lottie-web';
import { height } from '@mui/system';
import { motion } from 'framer-motion';


const Container = styled.div`
    max-width:50%;
`

// const Buttons = styled.button``
var anim = null;


const Login = ({
    
}) => {
    const container = useRef(null)

    useEffect(({
    }) => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay:true,
            animationData: require('../../assets/login.json')
            
        })
        lottie.setSpeed(2.5);
        setTimeout(() => {
            anim.pause()
        }, 61000);
    }, [])


    

    return <Container>
        <div className="container" ref={container}></div>
    </Container>
}

export default Login;