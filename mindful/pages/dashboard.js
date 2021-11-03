import styled from 'styled-components';
import Card from '../comps/Card'

const Container = styled.div `
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:100px;
    flex-wrap:wrap;
`
const Head = styled.div`
    font-size: 26px;
    color: white;
`

const NavCont = styled.div`
    font-size: 26px;
    color: white;
    text-transform: uppercase;
`

const Nav = styled.div`

`

const Date = styled.div`
    font-size: 26px;
    color: white;
`
const DashboardCont = styled.div`

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
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </DashboardCont>

        
    </Container>
  )
}