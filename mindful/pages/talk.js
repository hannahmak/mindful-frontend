import styled from 'styled-components'
import HeaderText from '../comps/HeaderText'
import TalkButton from '../comps/TalkButton'

// background: linear-gradient(125deg, rgba(166, 164, 248,1), rgba(255,255,255,0));
// .Buttons {
//   display:flex;
//   flex-direction: row;
//   flex-wrap:wrap;

const Container = styled.div `
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: white;
`;

const Buttons = styled.div `
   display:flex;
   flex-direction: row;
  flex-wrap:wrap;

`;

export default function Talk() {
  return <Container>
    <HeaderText head="Who would you like to chat with?" text="Select a Bubble"/>

    <Buttons>
      <TalkButton text="BC Crisis Centre" source="https://crisiscentre.bc.ca/wp-content/themes/crisiscentre/images/logo.png"/>
      <TalkButton/>
    </Buttons>

    </Container>
}