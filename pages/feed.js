import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';

const Container = styled.div `
    height:100vh
    width:100%;
    display: inline-grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 59px;
    grid-template-area: "menu feed feed moodbar";


`
const FeedCont = styled.div `
    height:100vh;
    width: 60vw;
    grid-area: feed;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 52px;

`

const GreetingCont = styled.div `

`
const Date = styled.div`   
    font-size: 18px;
    color:  #878FA2;
    padding-top: 24px;
`

const Greeting = styled.div`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #0F2046;
`


export default function Dashboard() {
  return (
    <Container>
        {/* Column 1 */}
        <Menu dashsrc= '/dashActive.svg'/>

        {/* Column 2 */}
        <FeedCont>
            <GreetingCont>
                <Greeting>Good Morning Kelly</Greeting>
                <Date>Saturday, October 06</Date>
            </GreetingCont>
            
            <DashFeed feedsize={"24px"} feedweight={"800"}/>
        </FeedCont>    

        {/* Column 3 */}
        <MoodBar/>

    </Container>
  )
}