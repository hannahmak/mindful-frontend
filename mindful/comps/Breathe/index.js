import styled from 'styled-components';
import React, {useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import { height } from '@mui/system';


const Container = styled.div`
max-width:70%;
`

// const Buttons = styled.button``




const Breathe = ({

}) => {
    const container = useRef(null)

    useEffect(() => {
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