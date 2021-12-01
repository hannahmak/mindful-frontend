

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
import QuoteCard from '../comps/QuoteCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

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
  margin-bottom:70px;
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
flex-direction:row;
width:100%;
align-items:center;
justify-content:center;
gap:10px;

@media only screen and (max-width: 768px) {
  flex-direction:column;
}
`

const Column3 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:60%;
max-height:100%;

@media only screen and (max-width: 768px) {
  width:100%;
}
`

const Column4 = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:60%;
height:100%;


@media only screen and (max-width: 768px) {
  width:100%;
}
`
// document.addEventListener("DOMContentLoaded", function(){
//   GetQuote()
// });



function Dashboard() {
  const GetQuote = async ()=> {
    const result = await axios.get("https://quotes.rest/qod?category=inspire");
    console.log(result.data.contents.quotes[0].quote)
    setQuote(result.data.contents.quotes[0].quote)
    console.log(result.data.contents.quotes[0].author)
    setAuthor(result.data.contents.quotes[0].author)
    // alert(result.data.contents.quotes[0].quote)
  }
  const [Quote, setQuote] = useState("")
  const [Author, setAuthor] = useState("")
  const { user, error, isLoading } = useUser();

  useEffect(()=> {
    GetQuote()
  }, 1000)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (    
    <Container>
      <Holder1>
        <Menu1 dashsrc="homeActive.svg"/>
      </Holder1>
      <Holder2>
        <Row>
            <h1>Welcome, {user.name}</h1>
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
              <QuoteCard area="quote" header='Quote of the day' quote={Quote} author={Author}/>
            </Column4>
          </Row3>
      </Holder2>
          <ResponsiveMenuu dashsrc="homeActive.svg"/>
      <Holder3>
        <MoodBar/>
      </Holder3>

    </Container>
  ))
}
export default withPageAuthRequired(Dashboard)