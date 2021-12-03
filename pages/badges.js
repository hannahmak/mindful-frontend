import styled from 'styled-components'
import HeaderText from '../comps/HeaderText'
import Card from '../comps/Card'
import LockedBadges from '../comps/LockedBadges'
import EarnedBadges from '../comps/EarnedBadges'
import Menu1 from '../comps/Menu1'
import ResponsiveMenuu from '../comps/ResponsiveMenuu'

const Container = styled.div `
height:100vh
width:100%;
display:flex;
flex-direction:row;
margin-bottom: 20px;
`;

const Holder2 = styled.div `
display:flex;
width:100%;
flex-direction:column;
gap:20px;
align-items:center;

@media only screen and (max-width: 1024px) {
  margin-bottom:150px;
}

`;

const ContainerHolder = styled.div`
display:flex;
width:92%;
margin-top:50px;

@media only screen and (max-width: 1024px) {
  width:100%;
}
`

const ContainerHolder1 = styled.div`
width:8%;

@media only screen and (max-width: 1024px) {
  display:none;
  width:0%;
}
`

const TitleHolder = styled.div `
display:flex;
flex-direction:column;
width:95%;

@media only screen and (max-width: 1024px) {
  width:85%;
}
`

const CardHolder = styled.div `
display:flex;
flex-direction:row;
gap:20px;
width:100%;
justify-content:center;
align-items:center;
`
const CardContainer = styled.div `
display:flex;
flex-direction:row;
width:95%;
align-items:center;
justify-content:center;
gap:20px;

@media only screen and (max-width: 1024px) {
  flex-wrap:wrap;
  width:85%;
}
`
const Title = styled.h1 `
color:#0F2046;
margin-bottom:0px;

`
const Title2 = styled.h1 `
color:#0F2046;
margin-bottom:0px;

`
const Text = styled.p `
color:#878FA2;
`

// https://icanhazdadjoke.com/

export default function Badges() {
  
  return <Container>
    <ContainerHolder1>
      <Menu1 badgesrc="badgeActive.svg"/>
    </ContainerHolder1>
    
    <ContainerHolder>
      <Holder2>
        <TitleHolder>
          <Title>Badges</Title>
          <Text>These are the badges that you earned by using features and tools implemented within the app!</Text>
        </TitleHolder>

        
        <CardHolder>
          <CardContainer>
            <EarnedBadges src="/badge1.svg" justify="center" text="First Badge"/>
            <EarnedBadges src="/badge2.svg" justify="center" text="Message a friend" description="You messaged a friend through the Chat page!" />
            <EarnedBadges src="/badge3.svg" justify="center" text="First Journal Entry" description="You created a public and private journal entry!" />
          </CardContainer>
        </CardHolder>
        <CardHolder>
          <CardContainer>
            <EarnedBadges src="/badge4.svg" justify="center" text="First Badge"/>
            <EarnedBadges src="/badge5.svg" justify="center" text="Message a friend" description="You messaged a friend through the Chat page!" />
            <EarnedBadges src="/badge6.svg" justify="center" text="First Journal Entry" description="You created a public and private journal entry!" />
          </CardContainer>
        </CardHolder>
        <TitleHolder>
          <Title2>Want to Earn More Badges?</Title2>
          <Text>In order to collect more badges, you need to complete the tasks mentioned in the descriptions.</Text>
        </TitleHolder>
        <CardHolder>
        <CardContainer>
            <LockedBadges justify="center" text="Use Breathe Tool" width="100%" height="100%"/>
            <LockedBadges justify="center" text="Message a Group" description="To unlock this badge, you need to create a group and send a message. This can be done in the Chat page." width="100%" height="100%"/>
            <LockedBadges justify="center" text="Add a Friend" description="To unlock this badge, you need to add a friend. This can be done by going to the My Friends page and then clicking on the Add Friends" width="100%" height="100%"/>
          </CardContainer>
        </CardHolder>
        
      <ResponsiveMenuu badgesrc="badgeActive.svg"/>
      </Holder2>
    </ContainerHolder>
    </Container>
}