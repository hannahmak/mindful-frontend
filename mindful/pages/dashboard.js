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
`

const Nav = styled.div`
    color: white;
    text-transform: uppercase;
    font-weight: bold;
`

const Date = styled.div`   
    font-size: 28px;
    color: #FFFFFF;
    align-self: flex-start;
`
const DashboardCont = styled.div`
    display: grid;
    grid-gap: 2em;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
        "mood mood trends trends"
        "chat moodboost trends trends"
        "profile journal badge badge"
    ;
`

export default function Dashboard() {
  return (
    <Container>
        <Head>Good Afternoon Jon</Head>
        <NavCont>
            <Nav>Dashboard</Nav>
            <Nav>Feed</Nav>
        </NavCont>

        <Date>Saturday, October 06</Date>

        <DashboardCont>
            <Card area='mood' width='577px' height="268px" text="Update Current Mood"/>
            <Card routeTo='#' area='trends' width='577px' height="568px" text="Trends"/>
            <Card routeTo='/talk' area='chat' width='268px' height="268px" text="Chat"/>
            <Card routeTo='/mood' area='moodboost' width='268px' height="268px" text="Mood Booster"/>
            <Card routeTo='/myprofile' area='profile' width='268px' height="268px" text="My Profile"/>
            <Card routeTo='#' area='journal' width='268px' height="268px" text="Journal"/>
            <Card routeTo='#' area='badge' width='577px' height="268px" text="Badages"/>  
        </DashboardCont>
    </Container>
  )
}