import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import DashboardCard from '../comps/DashboardCard';

const Container = styled.div `
  height:100vh
  width:100%;
  display: inline-grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 59px;
  grid-template-area: "menu feed feed moodbar";
`
const DashCont = styled.div `
  height:100vh;
  width: 60vw;
  grid-area: feed;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 52px;
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

const CardCont = styled.div `
  margin-top: 26px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2r 1r 1r 1r;
  grid-template-areas: 
    "journal trends"
    "journal chat"
    "badge badge"
    "mood quote"
  ;
  grid-gap: 26px;
`


export default function Dashboard() {
  return (
    <Container>
        {/* Column 1 */}
        <Menu dashsrc= '/homeActive.svg'/>

        {/* Column 2 */}
        <DashCont>
            <Greeting>Good Morning Kelly</Greeting>
            <Date>Saturday, October 06</Date>
            <DashFeed dashsize={"24px"} dashweight={"800"}/>

            <CardCont>
              <DashboardCard routeTo="/journal" height="451px" width="431px" area="journal" src="/journalCover.svg" iheight="339px" iwidth="351px"/>
              <DashboardCard routeTo="/trends" height="146px" width="310px" area="trend" header='Trends' src="/trendsCover.svg" iheight="209px" iwidth="224px"/>
              <DashboardCard routeTo="/talk" height="146px" width="310px" area="chat" header='Chat' src="/chatCover.svg" iheight="67px" iwidth="206px" />
              <DashboardCard routeTo="/badges" height="187px" width="772px" area="badge" header='Badges' src="/badgeCover.svg" iheight="57px" iwidth="487px"/>
              <DashboardCard routeTo="/mood" height="275px" width="431px" area="mood" header='Mood Boosters' src="/moodCover.svg" iheight="202px" iwidth="196px"/>
              <DashboardCard height="275px" width="310px" area="quote" header='' />
            </CardCont>
        </DashCont>   

        {/* Column 3 */}
        <MoodBar/>

    </Container>
  )
}