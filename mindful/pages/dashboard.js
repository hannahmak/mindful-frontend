import styled from 'styled-components';
import Card from '../comps/Card'

const Container = styled.div `
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const Head = styled.div`
    font-size: 28px;
    color: #FFFFFF;
    align-self: flex-start;
`

const NavCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:40%;
    padding-top: 4%;
    padding-bottom: 1%;
`

const Nav = styled.div`
    color: white;
    font-size: 28px;
    font-weight: bold;
`

const Date = styled.div`   
    display: grid;
    grid-area: date;
    font-size: 28px;
    color: #FFF;
    align-self: flex-start;
    padding-top: 3%;
`
const DashboardCont = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 0fr 1fr 1fr 1fr;
    grid-template-areas:
        "date date date date"
        "mood mood trends trends"
        "chat moodboost trends trends"
        "profile journal badge badge"
    ;
    padding-bottom: 2%
`

const Footer = styled.div`
    height: 20%
    width: 80%;
`

export default function Dashboard() {
  return (
    <Container>
        <Head>Good Afternoon Jon</Head>
        <NavCont>
            <Nav>Dashboard</Nav>
            <Nav>Feed</Nav>
        </NavCont>

        <DashboardCont>
            <Date>Saturday, October 06</Date>
            <Card area='mood' width='577px' height="268px" text="Update Current Mood"/>
            <Card routeTo='#' area='trends' width='577px' height="568px" text="Trends"/>
            <Card src='/chat.svg'routeTo='/talk' area='chat' width='268px' height="268px" text="Chat"/>
            <Card routeTo='/mood' area='moodboost' width='268px' height="268px" text="Mood Booster"/>
            <Card src='/profile.svg' routeTo='/myprofile' area='profile' width='268px' height="268px" text="My Profile"/>
            <Card src='/journal.svg'routeTo='#' area='journal' width='268px' height="268px" text="Journal"/>
            <Card routeTo='#' area='badge' width='577px' height="268px" text="Badages"/>  
        </DashboardCont>
    </Container>
  )
}