import styled from 'styled-components';
import Buttons from '../comps/Button';
import HeaderText from "../comps/HeaderText"
import CompanionAvatar from '../comps/CompanionAvatar';

const Container = styled.div `
display:flex;
flex-wrap:wrap;
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
        <Buttons ButtonText="Next"/>
    </Container>
  )
}
