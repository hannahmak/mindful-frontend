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
import { style } from '@mui/system';
import Friend from '../comps/Friend';
import router, {useRouter} from 'next/router';

const Container = styled.div `
width:100%;
display:flex;
flex-direction:row;
height:100%;

`
const Holder1 = styled.div `
display:flex;
width:8%;

@media only screen and (max-width: 1024px) {
  display:none;
}
`

const Holder2 = styled.div `
display:flex;
flex-direction:column;
width:92%;
height:100%;
align-items:center;
justify-content:center;
margin-bottom:100px;
z-index:0;
margin-top:100px;

@media only screen and (max-width: 1024px) {
  width:100%;
}
`

const TextHolder = styled.div `
width:90%;
`
const MyFriends = styled.h1 ``

const FriendAdd = styled.div `
width:90%;
display:flex;
flex-direction:row;
justify-content:space-between;
`

const FriendName = styled.p `
color:#9CA0A8;
font-size:20px;
`

const Add = styled.p `
color:#E8924F;
font-size:20px;
`
const AddCont = styled.div ``

const FriendCont = styled.div ``

const Left = styled.div `
display:flex;
flex-direction:column;
gap:30px;
`

const Right = styled.div `
display:flex;
flex-direction:column;
gap:50px;
`

const FriendHolder = styled.div `
display:flex;
width:90%;
flex-direction:row;
background-color:#F2F3F7;
align-items:center;
justify-content:center;
border-radius: 25px;
gap:100px;
padding:50px;
flex-wrap:wrap;
`

export default function Friends() {


  
    return (
      <Container>
        <Holder1>
          <Menu1 chatsrc="chatActive.svg"/>
        </Holder1>
        <Holder2>
          <TextHolder>
            <MyFriends>My Friends</MyFriends>
          </TextHolder>

          <FriendAdd>
            <FriendCont>
              <FriendName>15 Friends</FriendName>
            </FriendCont>
            <AddCont onClick={()=>router.push("./addfriends")}>
              <Add>Add</Add>
            </AddCont>
          </FriendAdd>

          <FriendHolder>
          <Right>
              <Friend name="Arnold Dawn" />
              <Friend name="Jack Fin"/>
              <Friend name="Jessica Cambly" />
              <Friend name="Josh Rain" source="good.svg"/>
              <Friend name="Lola Sidhu" />
            </Right>
            <Right>
              <Friend name="Kamila Oliver" />
              <Friend name="Ariya Ball"/>
              <Friend name="Valerie Maynard" />
              <Friend name="Arran Bassett" source="good.svg"/>
              <Friend name="Abbi Wyatt" />
            </Right>
            <Right>
              <Friend name="Aasiyah Hoffman" />
              <Friend name="Conrad Zhang"/>
              <Friend name="Avani Duggan" />
              <Friend name="Enrico Richard" source="good.svg"/>
              <Friend name="Kobe Wilder" />
            </Right>
          </FriendHolder>

        </Holder2>
        <ResponsiveMenuu/>
  
      </Container>
    )
  }