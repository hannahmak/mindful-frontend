import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { Button, duration } from '@mui/material';
import { motion } from "framer-motion"
import Menu from '../comps/Menu';


const Container = styled(motion.div) `
height:100vh
width:100%;
display:flex;
flex-direction:row;
`

const Holder1 = styled.div `
width:8%;
`
const Holder2 = styled.div `
display:flex;
flex-direction:column;
width:92%;
align-items:center;
justify-content:center;
height:100vh;
gap:50px;
`

const Text = styled.p `
font-size:55px;
margin-bottom:-20px;
font-weight: 800;
color:#3C2743;
`
const Image = styled.img `
height:500px;

`


export default function Messaging({
}) {
  return (
    <Container>
        <Holder1>
            <Menu press4="inset 0px 0px 4px rgba(0, 0, 0, 0.25)"/>
        </Holder1>
        <Holder2>
            <Text>COMING SOON</Text>
            <Image src="/comingsoon.png"/>

        </Holder2>


    </Container>
  )
}