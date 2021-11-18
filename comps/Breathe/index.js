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


const Breathe = ({
    
}) => {
    const container = useRef(null)

    useEffect(({
    }) => {
        anim = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay:false,
            animationData: require('../../assets/breathe.json'),
            
        })
        lottie.setSpeed(2.5);
        setTimeout(() => {
            anim.pause()
        }, 61000);
    }, [])


    

    return <Container 
    
    onClick={()=>{anim.play()}}  as={motion.div} whileHover={{
        scale:1.05,
        transition: {
            duration:.1,
        }
    }}>
        <div className="container" ref={container}></div>
    </Container>
}

export default Breathe;