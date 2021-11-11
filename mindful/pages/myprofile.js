import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';

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


export default function MyProfile() {
  return (
    <Container>
        <Avatar/>
            <p>[Journal and Friend data here]</p>
        <JournalHolder>
            <p>[My Journal goes here]</p>
            


        </JournalHolder>
    </Container>
  )
}
