import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';

const Container = styled.div `
height:100vh
width:100%;
display:flex;
flex-direction:row;
`

const Holder1 = styled.div `
background-color:blue;
width:8%;
`

const Holder2 = styled.div `
display:flex;
flex-direction:column;
width:92%;
height:100vh;
padding:40px;
gap:50px;
`
const ProfDetails = styled.div `
width:92%;
`

const Journal = styled.h1 `
`


export default function FriendProfile() {
  return (
    <Container>
      <Holder1>
        <Menu/>
      </Holder1>
      <Holder2>
        <ProfDetails>
          <Avatar/>
        </ProfDetails>
        <Journal>Journals</Journal>
      </Holder2>
    </Container>
  )
}

