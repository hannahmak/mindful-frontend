import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { Button, duration } from '@mui/material';
import { motion } from "framer-motion"
import Menu1 from '../comps/Menu1';


const Container = styled(motion.div) `
height:100vh
width:100%;
display:flex;
flex-direction:row;
`

const Holder1 = styled.div `
width:8%;
@media only screen and (max-width: 1024px) {
  display:none;
  width:0%;
}
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
color:#0F2046;
`
const Image = styled.img `
height:500px;

`


export default function Messaging({
}) {
  return (
    <Container>
        <Holder1>
            <Menu1 chatsrc="chatActive.svg"/>
        </Holder1>
        <Holder2>
            <Text>COMING SOON</Text>
            <Image src="/logo.svg"/>
        </Holder2>
    </Container>
  )
}
