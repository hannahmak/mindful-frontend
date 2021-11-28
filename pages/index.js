import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { Button, duration } from '@mui/material';
import { motion } from "framer-motion"

const Container = styled.div `
  height:100vh;
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:100px;
  flex-wrap:wrap;
  background-image: url("/test8.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Holder = styled.div `
  flex-wrap:wrap;
  display:flex;
  width:100%;
  flex-direction:row;
  
  justify-content:center;
  align-items:center;
  
  padding-bottom:100px;
`

const WelcomeHeader = styled.div `
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  @media only screen and (max-width: 768px) {
    justify-content:center;
    align-items:center;
    gap:50px;
  }
`

const ButtonHolder = styled.div `
  display:flex;
  flex-direction:row;
  gap:30px;

  @media only screen and (max-width: 768px) {
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  
`

const Image = styled.img `
  width:100%;
`
const Cont1 = styled.div `
width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding-left:10%;

  @media only screen and (max-width: 768px) {
    padding-left:0%;
    gap:50px;
  }
  
`

const Cont2 = styled.div `
width:50%;
  height:100%;
  display:flex;
  justify-content:center;
  
  @media only screen and (max-width: 768px) {
    display:none;
  }
`

const Header = styled.h1 `
  font-size:60px;
  margin-bottom:-20px;
  font-weight: 800;
  color:#0F2046;

  @media only screen and (max-width: 768px) {
    text-align:center;
    margin-bottom:0px;
    font-size:45px;
  }
`

const Text = styled.p `
  font-size:25px;
  font-weight: 200;
  color:#0F2046;
  width:100%;
  
  @media only screen and (max-width: 768px) {
    text-align:center;
    width:100%;
    font-size:16px;
  }
`

const HeroImage = styled.img `
width:50%;

@media only screen and (max-width: 768px) {
  display:none;
}
`

const HeroImage2 = styled.img `
width:50%;
display:none;

@media only screen and (max-width: 768px) {
  display:flex;
  width:80%;
}
`





export default function Home({
}) {
  return (
    <Container initial="hidden" animate="visible" variants={{
      hidden: {
        scale:1.05,
        opacity:0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay:.10,
          duration:2
        }
      }
    }}>
      <Holder as={motion.div}
      initial="hidden" animate="visible" variants={{
        hidden: {
          scale:1,
          opacity:0,
          x:-50
        },
        visible: {
          scale: 1,
          opacity: 1,
          x:0,
          transition: {
            delay:.10,
            duration:2
          }
        }
      }}
      
      >
            {/* <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale:1,
                opacity:0,
                x:-50
              },
              visible: {
                scale: 1,
                opacity: 1,
                x:0,
                transition: {
                  delay:.10,
                  duration:2
                }
              }
            }}> */}
        <Cont1>
          <WelcomeHeader>
              <Header>Welcome to Mindful</Header>
              <HeroImage2 src="/clearlogo.svg"/>
            <Text>Anyone can have a bad day, but it doesn’t mean that it’s a bad life. How we respond to it and take care of our mental health are what’s important.</Text>
          </WelcomeHeader>
          <ButtonHolder>
            <Button onClick={()=>router.push('/profile')} style={{width:250, height:50, borderRadius:60, backgroundColor:"#0F2046"}} routeto="./profile" variant="contained">Signup</Button>
            <Button onClick={()=>router.push('/profile')} style={{width:250, height:50, borderRadius:60, color:"#0F2046", borderColor:"#0F2046"}} routeto="./profile" variant="outlined">Login</Button>
          </ButtonHolder>
        </Cont1>
        <Cont2>
          <HeroImage src="/clearlogo.svg"/>
        </Cont2>
  
      {/* </motion.div> */}
      </Holder>
    </Container>
  )
}
