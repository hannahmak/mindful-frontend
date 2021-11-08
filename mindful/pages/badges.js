import styled from 'styled-components'
import HeaderText from '../comps/HeaderText'
import Card from '../comps/Card'
import LockedBadges from '../comps/LockedBadges'
import EarnedBadges from '../comps/EarnedBadges'
import Menu from '../comps/Menu'

const Container = styled.div `
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    color: white;
`;

const Earned = styled.div`
display:flex;
flex-direction: column;
height: 300px;
width: 900px;
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
border-radius: 25px;
`;

const Unlocked = styled.div`
display:flex;
flex-direction: column;
width: 900px;
padding-top: 20px;
`;

const Buttons = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
width: 900px;
`;

const Badges = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
`;

const Header = styled.div`
    padding: 20px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;
`


export default function Talk() {
  return <Container>
      <Menu/>
    <Earned>
        <Header>Earned Badges</Header>
        <Badges>
            <EarnedBadges text="First Mood"/>
            <EarnedBadges text="Chose Avatar"/>
            <EarnedBadges text="First Journal"/>
            <EarnedBadges text="Used Breathe Tool"/>
        </Badges>
    </Earned>
    <Unlocked>
        <Header>Unlocked Badges</Header>
        <Buttons>
            <LockedBadges/>
            <LockedBadges text="Message Friends"/>
            <LockedBadges text="Message Group"/>
        </Buttons>
    </Unlocked>
    </Container>
}