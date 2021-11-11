import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';

const Container = styled.div `
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
width:77%;
height:100vh;
padding:40px;
gap:50px;
`

const Holder3 = styled.div `
height:100vh;
width:15%;
`

const ProfDetails = styled.div `
width:92%;
`

const MyJournal = styled.h1 `
`


export default function FriendProfile() {
  return (
    <Container>
      <Holder1>
        <Menu />
      </Holder1>
      <Holder2>
        <ProfDetails>
          <Avatar name="Friend Username"/>
        </ProfDetails>
        <MyJournal>Journals</MyJournal>
      </Holder2>
      <Holder3>
        <MoodBar/>
      </Holder3>
    </Container>
  )
}
