import styled from 'styled-components'
import Breathe from '../comps/Breathe'
import Card from '../comps/Card'
import JokeCardHolder from '../comps/JokeCardHolder'
import Menu from '../comps/Menu'
import { useState } from 'react'
import JokesCard from '../comps/JokeCard'
import Lottie from 'lottie-web'
import { motion } from 'framer-motion'

const axios = require('axios').default;

// background: linear-gradient(125deg, rgba(166, 164, 248,1), rgba(255,255,255,0));
// .Buttons {
//   display:flex;
//   flex-direction: row;
//   flex-wrap:wrap;

const Container = styled.div `
height:100vh
width:100%;
display:flex;
flex-direction:row;
position:relative;
`;

const Holder2 = styled.div `
display:flex;
width:100%;
flex-direction:column;
gap:20px;
align-items:center;

`;


const Tool = styled.div `
display:flex;
flex-direction: column;
justify-content:center;
padding:20px;
background-color:white;

/* Drop Shadow */
box-shadow: 0px 0px 20px #F2F3F7;
border-radius: 25px;
width: 100%;
`;

const Breathing = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
`

const ContainerHolder = styled.div`
display:flex;
width:92%;
padding:100px;
`

const ContainerHolder1 = styled.div`
background-color:blue;
width:8%;
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
color:#420062;
margin-bottom:0px;

`
const Title2 = styled.h1 `
color:#EE8B89;
margin-bottom:0px;

`
const Text = styled.p `
color:#7E7E7E;
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
      <Menu/>
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
                        <h1>Breathe tool</h1>
                        <p style={{color:"#7E7E7E"}}>To begin Mindful Breathing start by clicking on the Breathe Tool and follow along.</p>
                        <audio id='a1' src="/breathe.mp3"></audio>
                </Tool>
          <CardContainer>
            <Card src="/message.svg" justify="center" text="Message a friend" width="100%" height="90%"/>
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

    {/* <JokeCardHolder onButtonInteract={()=>{setShowCard(true); GetJoke();}} text="Tell a Joke" width="330px" height="270px"/> */}
}