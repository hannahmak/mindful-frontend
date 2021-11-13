import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';

const Container = styled.div `
height:100vh
width:100%;
display:flex;
flex-direction:row;
`
const Cont1 = styled.div `
display:flex;
flex-direction:column;
width:80%;
`
const Cont2 = styled.div `
display:flex;
flex-direction:row;
justify-content:center;
gap:10px;
width:100%;
`

const Holder1 = styled.div `
width:8%;
`
const Cards = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap:10px;
`

const Holder2 = styled.div `
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
width:70%;
height:100vh;
padding:40px;
gap:50px;
`
const Date = styled.div`   
    display: flex;
    font-size: 18px;
    color:  rgba(0, 0, 0, 0.49);
    padding-top: 3%;
`
const Holder3 = styled.div `
height:100vh;
width:22%;
`

const Greeting = styled.div`
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 44px;
color: #2F2E4C;
`


export default function Dashboard() {
  return (
    <Container>
      <Holder1>
        <Menu press2="inset 0px 0px 4px rgba(0, 0, 0, 0.25)" />
      </Holder1>
      <Holder2>
            <Cont1>
                <Greeting>Good Morning Kelly</Greeting>
                <Date>Saturday, October 06</Date>
            </Cont1>

            <Cards>
              <Cont2>
                  <Card src='/journal.svg'routeTo='./journal' area='journal'width='40%' height="300px" text="Journal"/>
                  <Card routeTo='/mood' area='moodboost' width='40%' height="300px" text="Mood Booster"/>
              </Cont2>
              <Cont2>
                  <Card rc='/trend.svg' routeTo='#' area='trends' width='40%' height="300px" text="Trends"/>
                  <Card src='/message.svg'routeTo='/talk' area='chat' width='40%' height="300px" text="Chat"/>
              </Cont2>
              <Cont2>
                  <Card src='/badges.svg' routeTo='/badges' area='badge' width='81%' height="300px" text="Badges"/>  
            </Cont2>
            </Cards>
      </Holder2>
      <Holder3>
        <MoodBar/>
      </Holder3>
    </Container>
  )
}