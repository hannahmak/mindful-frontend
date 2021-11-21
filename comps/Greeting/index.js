import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';



const Container = styled.div `
`
const Greetings = styled.h1`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #0F2046;
    margin-bottom:0px;
`

const Date = styled.p`   
margin-top:0px;

    font-size: 18px;
    color:  #878FA2;
    padding-top: 24px;
`



const Greeting = ({

src="badges.svg"
}) => {
    return <Container>
        <Greetings>Good Morning Kelly</Greetings>
        <Date>Saturday, October 06</Date>
    </Container>
}
export default Greeting;