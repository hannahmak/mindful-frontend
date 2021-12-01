import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { height } from '@mui/system';
import { motion } from 'framer-motion';


const Container = styled.div`
    max-width:50%;
`

// const Buttons = styled.button``
let anim = null;
// let audio = document.getElementById('a1');


const Breathe = ({

}) => {
  const container = useRef(null)
  const [ isPlaying, setIsPlaying ] = useState(false);
  
  useEffect(() => {
    anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('../../assets/breathe.json'),

    })
    lottie.setSpeed(2.5);
    
  }, [])

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying])



  function play() {
    let audio = document.getElementById('a1');

    audio.play();
    anim.play();

    setTimeout(function () {
      setIsPlaying(false);
      audio.pause();
      anim.pause();

    }, 60000)
  }

  function stop() {
    let audio = document.getElementById('a1');
    audio.pause();
    anim.pause();
  }



  return <Container

    onClick={() => { setIsPlaying(!isPlaying) }} as={motion.div} whileHover={{
      scale: 1.05,
      transition: {
        duration: .1,
      }
    }}>
    <div className="container" ref={container}></div>
  </Container>
}

export default Breathe;