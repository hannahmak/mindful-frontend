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
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import SearchFriends from '../comps/SearchFriends'

const Container = styled.div `
width:100%;
display:flex;
flex-direction:row;
height:100%;

`
const Holder1 = styled.div `
display:flex;
width:8%;
`

const Holder2 = styled.div `
padding:40px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
width:80%;
height:100%;
align-items:center;
justify-content:center;
gap:20px;

@media only screen and (max-width: 1024px) {
  width:100%;
  margin-bottom:70px;
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
justify-content: center;
gap:10px;
background: #F2F3F7;
border-radius: 20px;
filter: drop-shadow(0px 0px 20px #F2F3F7);
height: 600px;
`
const Row1 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:left;
gap:10px;
`

export default function AddFriends() {


  
    return (
      <Container>
        <Holder1>
          <Menu1 chatsrc="chatActive.svg"/>
        </Holder1>

        <Holder2>
        <Row>
            <h1>Add Friends</h1>
        </Row>
        <Row0>
            <SearchFriends></SearchFriends>
        </Row0>
        <Row1>

        </Row1>
        </Holder2>
  
      </Container>
    )
  }