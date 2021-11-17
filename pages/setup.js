import styled from 'styled-components';
import SetupButton from '../comps/SetupButton';
import HeaderText from "../comps/HeaderText"
import CompanionAvatar from '../comps/CompanionAvatar';
import { useState } from 'react';
import AboutCompanion from '../comps/AboutCompanion';
import Button from '../comps/Button'

const Container = styled.div `
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
width:100%;
gap:30px;
`

const Avatars = styled.div `
display:flex;
flex-wrap:wrap;
flex-direction:row;
gap:20px;
`


export default function Setup() {
  const [setup1, setSetup1] = useState (false)


  if(setup1 === true) {
    return<Container>
      <HeaderText text="About your companion"/>
      <AboutCompanion/>
      <Button routeTo="/dashboard"  ButtonText="Submit"/>
  </Container>
  };

  return (
    <Container>
        <HeaderText/>
        <Avatars>
          <CompanionAvatar/>
          <CompanionAvatar/>
          <CompanionAvatar/>
          <CompanionAvatar/>
          <CompanionAvatar/>
        </Avatars>
        <SetupButton onButtonInteract={()=>{setSetup1(true)}}  ButtonText="Next"/>
    </Container>
  )
}
