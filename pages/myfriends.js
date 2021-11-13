import styled from 'styled-components'
import TalkButton from '../comps/TalkButton'
import AddFriend from '../comps/AddFriend';
import Menu from '../comps/Menu';

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
`;

const ContainerHolder = styled.div`
display:flex;
width:92%;
padding:100px;
align-items:center;
justify-content:center;
`

const ContainerHolder1 = styled.div`
background-color:blue;
width:8%;
`

const FriendsCont = styled.div `
display:flex;
width:100%;
flex-direction:column;
gap:20px;
background: #F2F3F7;
border-radius: 25px;
filter: drop-shadow(0px 0px 20px #F2F3F7);
`;

const TitleHolder = styled.div `
display:flex;
flex-direction:column;
width:100%;
`

const Title = styled.h1 `
color:#420062;
font-weight: 500;
font-size: 30px;

`
const Title2 = styled.p `
color: #F09682;
margin-bottom:0px;
font-weight: 400;
display:flex;
align-items:right;
justify-content:right;
text-decoration-line: underline;
text-decoration-style: solid;
`
const Text = styled.p `
color:#7E7E7E;
font-weight: 400;
`

export default function MyFriends() {
  
  return <Container>
    <ContainerHolder1>
      <Menu/>
    </ContainerHolder1>
    <ContainerHolder>

      <Holder2> 
        <TitleHolder>
          <Title>My Friends</Title>
          <Text>11 Friends </Text>
          <Title2>Add Friends</Title2>
        </TitleHolder>
        <FriendsCont>
            <AddFriend/>
            <AddFriend/>
            <AddFriend/>
        </FriendsCont>
      </Holder2>

      </ContainerHolder>
    </Container>
}
