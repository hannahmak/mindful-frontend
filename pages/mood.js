import styled from 'styled-components'
import Breathe from '../comps/Breathe'
import Card from '../comps/Card'
import JokeCardHolder from '../comps/JokeCardHolder'
import Menu1 from '../comps/Menu1'
import { useState } from 'react'
import JokesCard from '../comps/JokeCard'
import Lottie from 'lottie-web'
import { motion } from 'framer-motion'

const axios = require('axios').default;

const Container = styled.div `
  height:100vh
  width:100%;
  display:flex;
  flex-direction:row;
`;

const Holder2 = styled.div `
display:flex;
padding:40px;
flex-direction:column;
flex-wrap:wrap;
width:100%;
height:100%;
align-items:center;
justify-content:center;
gap:10px;
`;

const JokeCards = styled.div `
  display:flex;
  flex-direction:row;
  align-items:space-between;
  justify-content: space-between;
  padding-top: 20px;
`;

const Tool = styled.div `
  display:flex;
  flex-direction: column;
  justify-content:center;
  padding:20px;
  background-color:white;
  box-shadow: 0px 0px 20px #F2F3F7;
  border-radius: 25px;
  width: 100%;
`;

const Header = styled.div`
  padding: 20px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  color: #FFFFFF;
`

const Breathing = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
`

const BreathingHolder = styled.div `
  height:250px;
  width:500px;
  position:relative;
`;

const ContainerHolder = styled.div`
  display:flex;
  width:100%;
  padding:100px;
  @media only screen and (max-width: 768px) {
    padding:0px;
  }
`

const ContainerHolder1 = styled.div`
  background-color:blue;
  width:8%;

  @media only screen and (max-width: 768px) {
    display:none;
    width:0%;
  }
`

const TitleHolder = styled.div `
  display:flex;
  flex-direction:column;
  width:100%;
`

const CardHolder = styled.div `
  display:flex;
  flex-direction:row;
  gap:20px;
  width:100%;
  width:100%;
  justify-content:center;

  @media only screen and (max-width: 768px) {
    flex-wrap:wrap;
  }
`
const CardContainer = styled.div `
  display:flex;
  flex-direction:column;
  gap:20px;
`
const LaughHolder = styled.div `
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
`
const Title = styled.h1 `
  color:#0F2046;
  margin-bottom:0px;
`
const Title2 = styled.h1 `
  color:#0F2046;
  margin-bottom:0px;

`
  const Text = styled.p `
  color:#878FA2;
`
  
const Image = styled.img `
  width:30%;
  z-index:2;
  position:absolute;
  left:90px;
`

const JokeCont = styled.div `
position:fixed;
display:flex;
height:100%;
width:100%;
`

// https://icanhazdadjoke.com/

export default function Mood({
}) {
  const GetJoke = async ()=>{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&format=txt&type=single");
    console.log(result.data)
    setRandJoke(result.data)
  }
  const [showCard, setShowCard] = useState(false);
  const [RandJoke, setRandJoke] = useState("")

  function play() {
    var audio = document.getElementById('a1');
    audio.play();
  }


  
  return <Container>
    <ContainerHolder1>
    <Menu1 moodsrc='/moodActive.svg' />
    </ContainerHolder1>

    <ContainerHolder>
      <Holder2>
        <TitleHolder>
          <Title>Mood Boosters</Title>
          <Text>Feeling a bit down? Start by using one of the tools below to help improve your mood</Text>
        </TitleHolder>

        
        <CardHolder>
                <Tool as={motion.div} whileHover={{
                  scale:1.05,
                  transition: {
                      duration:.1,
                  }
                }} onClick={play}>
                    <Breathing>
                        <Breathe id="lottie"/>
                    </Breathing>
                        <h1 style={{color:"#0F2046"}}>Breathe tool</h1>
                        <p style={{color:"#878FA2"}}>To begin Mindful Breathing start by clicking on the Breathe Tool and follow along.</p>
                        <audio id='a1' src="/breathe.mp3"></audio>
                </Tool>

          <CardContainer>
            <Card routeTo="/talk" src="/message.svg" justify="center" text="Message a friend" width="100%" height="90%"/>
            <Card routeTo="/badges" src="/badges.svg" justify="center" text="Collect Badges" width="100%" height="90%"/>
          </CardContainer>
        </CardHolder>

        <TitleHolder>
          <Title2>Need a laugh?</Title2>
          <Text>Feeling a bit down? Start by using one of the tools below to help improve your mood</Text>
        </TitleHolder>

        <LaughHolder>
        <JokeCardHolder onButtonInteract={()=>{setShowCard(true); GetJoke();}} text="Tell a Joke" width="100%" height="270px"/>
        </LaughHolder>
        
      </Holder2>
    </ContainerHolder>
          <JokesCard joke={RandJoke} onGenerate={()=>{GetJoke();}} onHideInteract={()=>{setShowCard(false);}}show={showCard}/>
    </Container>
}