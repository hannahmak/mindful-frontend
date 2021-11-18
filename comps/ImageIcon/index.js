import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';



const Container = styled.img `
width:20px;
height:30px;
`



const ImageIcon = ({

src="badges.svg"
}) => {
    return <Container src={src}/>
}
export default ImageIcon;