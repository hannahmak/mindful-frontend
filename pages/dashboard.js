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
padding: 10px;
`

const Holder1 = styled.div `
width:8%;
`
const Cards = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Holder2 = styled.div `
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
width:77%;
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
width:25%;
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
        <Menu />
      </Holder1>
      <Holder2>
            <Cont1>
                <Greeting>Good Morning Kelly</Greeting>
                <Date>Saturday, October 06</Date>
            </Cont1>

            <Cards>
            <Cont2>
                <Card src='/journal.svg'routeTo='./journal' area='journal'width='400px' height="300px" text="Journal"/>
                <Card routeTo='/mood' area='moodboost' width='400px' height="300px" text="Mood Booster"/>
            </Cont2>
            <Cont2>
                <Card rc='/trend.svg' routeTo='#' area='trends' width='400px' height="300px" text="Trends"/>
                <Card src='/message.svg'routeTo='/talk' area='chat' width='400px' height="300px" text="Chat"/>
            </Cont2>
            <Cont2>
                <Card src='/badges.svg' routeTo='/badges' area='badge' width='800px' height="300px" text="Badges"/>  
            </Cont2>
            </Cards>
      </Holder2>
      <Holder3>
        <MoodBar/>
      </Holder3>
    </Container>
  )
}