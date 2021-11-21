

import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu1 from '../comps/Menu1';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import DashboardCard from '../comps/DashboardCard';
import Greeting from '../comps/Greeting';
import ResponsiveMenuu from '../comps/ResponsiveMenuu';
import ResponsiveMenu from '../comps/ResponsiveMenu';

const Holder1 = styled.div `
display:flex;
width:8%;

@media only screen and (max-width: 768px) {
  display:none;
  width:0%;
}

`


const Holder3 = styled.div `
display:flex;
width:22%;

@media only screen and (max-width: 768px) {
  display:none;
  width:0%;
}
`

const Container = styled.div `
width:100%;
display:flex;
flex-direction:row;
height:100%;

`
const DashCont = styled.div `
`


const CardCont = styled.div `
`

const Holder2 = styled.div `
padding:40px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
width:70%;
height:100%;
align-items:center;
justify-content:center;
gap:10px;

@media only screen and (max-width: 768px) {
  width:100%;
}
`

const MiddleHolder = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:center;
`

const Row1 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:center;
gap:10px;

@media only screen and (max-width: 768px) {
  flex-wrap:wrap;
}

`
const Column1 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:60%;

@media only screen and (max-width: 768px) {
  width:100%;
}
`

const Column2 = styled.div `
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:10px;
width:40%;
height:100%;

@media only screen and (max-width: 768px) {
  width:100%;
}
`
const Row = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:left;
gap:10px;
`

const Row0 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:flex-end;
gap:10px;
`

const Row2 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:center;
gap:10px;
`
const Row3 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:center;
gap:10px;
`

const Column3 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:60%;

@media only screen and (max-width: 768px) {
  width:100%;
}
`

const Column4 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:60%;

@media only screen and (max-width: 768px) {
  width:100%;
}
`

export default function Dashboard() {
  return (
    <Container>
      <Holder1>
        <Menu1 dashsrc="homeActive.svg"/>
      </Holder1>
      <Holder2>
        <Row>
            <Greeting/>
        </Row>
        <Row0>
             <DashFeed dashsize={"24px"} dashweight={"800"}/>

        </Row0>
          <Row1>
            <Column1>
              <DashboardCard routeTo="/journal"  area="journal" src="/journalCover.svg" />
            </Column1>
            <Column2>
              <DashboardCard routeTo="/trends"  area="trend" header='Trends' src="/trendsCover.svg" />
              <DashboardCard routeTo="/talk" area="chat" header='Chat' src="/chatCover.svg" />
            </Column2>
          </Row1>

          <Row2>
            <DashboardCard routeTo="/badges" area="badge" header='Badges' src="/badgeCover.svg"/>
          </Row2>

          <Row3>
            <Column3>
              <DashboardCard routeTo="/mood" area="mood" header='Mood Boosters' src="/moodCover.svg"/>
            </Column3>
            <Column4>
              <DashboardCard area="quote" header='Quote of the day' />
            </Column4>
          </Row3>

          <ResponsiveMenuu/>
      </Holder2>

      <Holder3>
        <MoodBar/>
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