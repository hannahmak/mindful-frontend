// import React, {useState} from 'react';
// import styled from 'styled-components';
// import router, {useRouter} from 'next/router';
// import { motion } from 'framer-motion';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import ImageIcon from '../ImageIcon';


// const Container = styled.div `
// `
// const ContainerHolder = styled.div `
// background-color:red;
// height:100vh;
// width:100vw;
// position:fixed;
// top:0;
// z-index: 1;
// display:flex;
// flex-direction:column;
// align-items:center;
// justify-content:center;
// `
// const One = styled.p `
// color:white;
// `
// const Two = styled.p ``
// const Three = styled.p ``
// const Four = styled.p ``
// const Five = styled.p ``
// const Six = styled.p ``

// const Hamburger = styled.img `
// z-index:2;
// position:fixed;
// width:30px;
// height:30px;
// right:20px;
// top:20px;
// `

// const ResponsiveMenuu = ({
    
// }) => {
//     const iconVariants= {
//         opened: {
//             scale:2,
//         },
//         closed: {
//             scale:1,
    
//         },
    
//     },

//     const menuVariants= {
//         opened: {
//             top:0
//         },
//         closed: {
//             top:"-90vh"
    
//         },
    
//     },
//     const [click, onclicked] = useState(false)


//     return <Container>
//         <Hamburger as={motion.img} 
//         initial={false}
//         variants= {iconVariants}
//         animate={click ? "opened" : "closed"}
//         onClick={() => onclicked(state => !state)}
//         src="hamburger.svg"/>
//         <ContainerHolder 
//         initial={false}
//         variants={menuVariants}
//         animate={click ? "opened" : "closed"}
//         >
//             <One>Dashboard</One>
//             <Two>Journal</Two>
//             <Three>Mood Booster</Three>
//             <Four>Badges</Four>
//             <Five>Chat</Five>
//             <Six>Trends</Six>
//         </ContainerHolder>

//         </Container>
// }
// export default ResponsiveMenuu;