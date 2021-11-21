import styled from 'styled-components'
import TalkButton from '../comps/TalkButton'
import Menu1 from '../comps/Menu1';

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
color:#0F2046;
margin-bottom:0px;
font-size: 55px;
text-align: center;

`
const Title2 = styled.p `
color: #0F2046;
margin-bottom:0px;
font-weight: 500;
text-align: center;
`
const Text = styled.p `
color:#878FA2;
text-align: center;
width: 80%;
`

const Image = styled.img`
display:flex;
width:30%;
align-items:center;
margin-bottom: -70px;
`

export default function Talk() {
  
  return <Container>
    <ContainerHolder1>
      <Menu1/>
    </ContainerHolder1>
    <ContainerHolder>

      <Holder2> 
        <Image src="/logo.svg"/>
        <TitleHolder>
          <Title>Who would you like to chat with?</Title>
          <Text>One of the most important part of being human, is having the ability to communicate your feelings and emotions. It’s time to break the cycle, we have to choose to speak. </Text>
          <Title2>Talk to...</Title2>
        </TitleHolder>
        <Buttons>
          <TalkButton text="BC Crisis Centre" routeTo="https://crisiscentre.bc.ca/get-help/" ></TalkButton>
          <TalkButton back="white" color="#0F2046" routeTo="#"></TalkButton>
        </Buttons>
      </Holder2>

      </ContainerHolder>
    </Container>
}