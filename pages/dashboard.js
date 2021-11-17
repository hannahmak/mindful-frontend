import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import DashboardCard from '../comps/DashboardCard';


const Holder1 = styled.div `
display:flex;
`

const Holder2 = styled.div `
display:flex;
`

const Holder3 = styled.div `
display:flex;
`

const Container = styled.div `
displauy:flex;
`
const DashCont = styled.div `
`

const Date = styled.div`   
`

const Greeting = styled.div`
`

const CardCont = styled.div `

`


export default function Dashboard() {
  return (
    <Container>
      <Holder1>
        <Menu dashsrc="homeActive.svg"/>
      </Holder1>
      <Holder2></Holder2>
      <Holder3>
      </Holder3>
    </Container>
    // <Container>
    //     <Menu dashsrc= '/homeActive.svg'/>

    //     <DashCont>
    //         <Greeting>Good Morning Kelly</Greeting>
    //         <Date>Saturday, October 06</Date>
    //         <DashFeed dashsize={"24px"} dashweight={"800"}/>

    //         <CardCont>
    //           <DashboardCard routeTo="/journal" height="451px" width="431px" area="journal" src="/journalCover.svg" iheight="339px" iwidth="351px"/>
    //           <DashboardCard routeTo="/trends" height="146px" width="310px" area="trend" header='Trends' src="/trendsCover.svg" iheight="209px" iwidth="224px"/>
    //           <DashboardCard routeTo="/talk" height="146px" width="310px" area="chat" header='Chat' src="/chatCover.svg" iheight="67px" iwidth="206px" />
    //           <DashboardCard routeTo="/badges" height="187px" width="772px" area="badge" header='Badges' src="/badgeCover.svg" iheight="57px" iwidth="487px"/>
    //           <DashboardCard routeTo="/mood" height="275px" width="431px" area="mood" header='Mood Boosters' src="/moodCover.svg" iheight="202px" iwidth="196px"/>
    //           <DashboardCard height="275px" width="310px" area="quote" header='' />
    //         </CardCont>
    //     </DashCont>   

        
    //     <MoodBar/>

    // </Container>
  )
}