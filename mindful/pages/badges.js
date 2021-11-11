import styled from 'styled-components'
import HeaderText from '../comps/HeaderText'
import Card from '../comps/Card'
import LockedBadges from '../comps/LockedBadges'
import EarnedBadges from '../comps/EarnedBadges'
import Menu from '../comps/Menu'

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

`;

const ContainerHolder = styled.div`
display:flex;
width:92%;
padding-top: 30px;
padding-right: 100px;
padding-left: 100px;
padding-bottom: 100px;
`

const ContainerHolder1 = styled.div`
background-color:blue;
width:8%;
`

const TitleHolder = styled.div `
display:flex;
flex-direction:column;
width:100%;
`

const CardHolder = styled.div `
display:flex;
flex-direction:row;
gap:20px;
width:100%;
width:100%;
justify-content:center;
`
const CardContainer = styled.div `
display:flex;
flex-direction:row;
gap:20px;
`
const Title = styled.h1 `
color:#420062;
margin-bottom:0px;

`
const Title2 = styled.h1 `
color:#EE8B89;
margin-bottom:0px;

`
const Text = styled.p `
color:#7E7E7E;
`

// https://icanhazdadjoke.com/

export default function Badges() {
  
  return <Container>
    <ContainerHolder1>
      <Menu/>
    </ContainerHolder1>
    <ContainerHolder>

      <Holder2>
        <TitleHolder>
          <Title>Badges</Title>
          <Text>These are the badges that you earned by using features and tools implemented within the app!</Text>
        </TitleHolder>

        
        <CardHolder>
          <CardContainer>
            <EarnedBadges src="/badges.svg" justify="center" text="First Badge" width="100%" height="100%"/>
            <EarnedBadges src="/message.svg" justify="center" text="Message a friend" description="You messaged a friend through the Chat page!" background="rgba(243, 179, 150, 0.4)" width="100%" height="100%"/>
            <EarnedBadges src="/journal.svg" justify="center" text="First Journal Entry" description="You created a public and private journal entry!" width="100%" height="100%"/>
            <EarnedBadges src="/moodbooster.svg" justify="center" text="Message a friend" description="You entered your very first mood! You will now be able to track your mood in the Trends page" background="rgba(243, 179, 150, 0.4)" width="100%" height="100%"/>
          </CardContainer>
        </CardHolder>
        <TitleHolder>
          <Title2>Want to Earn More Badges?</Title2>
          <Text>In order to collect more badges, you need to complete the tasks mentioned in the descriptions.</Text>
        </TitleHolder>
        <CardContainer>
            <LockedBadges justify="center" text="Use Breathe Tool" width="100%" height="100%"/>
            <LockedBadges justify="center" text="Message a Group" description="To unlock this badge, you need to create a group and send a message. This can be done in the Chat page." width="100%" height="100%"/>
            <LockedBadges justify="center" text="Add a Friend" description="To unlock this badge, you need to add a friend. This can be done by going to the My Friends page and then clicking on the Add Friends" width="100%" height="100%"/>
          </CardContainer>
        
      </Holder2>
    </ContainerHolder>
    </Container>
}