import styled from 'styled-components';
import Avatar from '../comps/Avatar'

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`

const JournalHolder = styled.div `
width:70%;
background-color:red;


`


export default function FriendProfile() {
  return (
    <Container>
        <Avatar/>
            <p>[Friend Journal and Friend data here]</p>
        <JournalHolder>
            <p>[Friend Journal goes here]</p>
            


        </JournalHolder>
    </Container>
  )
}
