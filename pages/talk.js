import styled from 'styled-components'
import TalkButton from '../comps/TalkButton'
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
align-items:center;
justify-content:center;

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

const TitleHolder = styled.div `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:60%;
`
const Buttons = styled.div `
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
width:50%;
`

const Title = styled.h1 `
color:#420062;
margin-bottom:0px;
font-size: 55px;
text-align: center;

`
const Title2 = styled.p `
color: #420062;
margin-bottom:0px;
font-weight: 500;
text-align: center;
`
const Text = styled.p `
color:#7E7E7E;
text-align: center;
width: 80%;
`

const Image = styled.img`
display:flex;
width:30%;
align-items:center;
`

export default function Talk() {
  
  return <Container>

    </Container>
}