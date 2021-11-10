import styled from 'styled-components'
import Breathe from '../comps/Breathe'
import Card from '../comps/Card'
import JokeCardHolder from '../comps/JokeCardHolder'
import Menu from '../comps/Menu'
import { useState } from 'react'
import JokesCard from '../comps/JokeCard'
const axios = require('axios').default;

// background: linear-gradient(125deg, rgba(166, 164, 248,1), rgba(255,255,255,0));
// .Buttons {
//   display:flex;
//   flex-direction: row;
//   flex-wrap:wrap;

const Container = styled.div `
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
position:relative;
`;

const Holder = styled.div `
`;

const Holder2 = styled.div `

`;

const Cards = styled.div `
display:flex;
flex-direction:row;
align-items:space-between;
justify-content: space-between;
padding-top: 20px;
`;

const JokeCards = styled.div `
display:flex;
flex-direction:row;
align-items:space-between;
justify-content: space-between;
padding-top: 20px;
`;

const BreatheHolder = styled.div `
display:flex;
flex-direction: column;
align-items:center;
`;

const Tool = styled.div `
display:flex;
flex-direction: column;
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
border-radius: 25px;
width: 500px;
height: 500px;
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
justify-content: center;
align-items:center;
width: 100%;
`

const ContainerHolder = styled.div`
display:flex;
justify-content: center;
align-items:center;
width: 100%;
flex-wrap:wrap;
gap:30px;
`

// https://icanhazdadjoke.com/

export default function Mood() {
  const GetJoke = async ()=>{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&format=txt&type=single");
    console.log(result.data)
    setRandJoke(result.data)
  }
  const [showCard, setShowCard] = useState(false);
  const [RandJoke, setRandJoke] = useState("Helvetica and Times New Roman walk into a bar. “Get out of here!” shouts the bartender. “We don’t serve your type.”")
  
  return <Container>
    <Menu/>
    <ContainerHolder>
      <Holder>
          <BreatheHolder>
              <Tool>
                  <Header>Breathe Tool</Header>
                  <Breathing>
                      <Breathe/>
                  </Breathing>
              </Tool>
          </BreatheHolder>
      </Holder>

      <Holder2>
        <Card routeTo="/badges" text="Badges" width="700px" height="210px"/>
        <Cards>
          <JokeCardHolder onButtonInteract={()=>{setShowCard(true); GetJoke();}} text="Tell a Joke" width="330px" height="270px"/>
          <Card text="Message a friend" width="330px" height="270px"/>
        </Cards>
      </Holder2>
    </ContainerHolder>
      <JokesCard joke={RandJoke}  onHideInteract={()=>{setShowCard(false);}}show={showCard}/>
    </Container>
}