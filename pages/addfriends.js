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
import { borderRadius, style } from '@mui/system';
import Friend from '../comps/Friend';
import SearchBar from 'material-ui-search-bar';


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


const FriendHolder = styled.div `
display:flex;
width:90%;
flex-direction:column;
background-color:#F2F3F7;
align-items:center;
justify-content:center;
border-radius: 25px;
gap:100px;
padding:50px;
flex-wrap:wrap;
`

const UserHolder = styled.div `
display:flex;
width:80%;
justify-content:space-between;
align-items:center;
`

const UserInfo = styled.div `
display:flex;
gap:30px;
align-items:center;
`

const UserAdd = styled.div ``

const UserImage = styled.img `
width:80px;
`

const UserName = styled.p ``

const AddImage = styled.img `
width:30px;
`

export default function AddFriends({
  src="add.svg",
  src2="add.svg"
}) {

  const [addFriend, ClickAddFriend] = useState(true);

  const [addFriend2, ClickAddFriend2] = useState(true);

  if (addFriend === true) {
    src="add.svg"
  }

  else {
    src="added.svg"
    
  }
  
  if (addFriend2 === true) {
    src2="add.svg"
  }

  else {
    src2="added.svg"
    
  }
  

    return (
      <Container>
        <Holder1>
          <Menu1 chatsrc="chatActive.svg"/>
        </Holder1>
        <Holder2>
          <TextHolder>
            <MyFriends>Add Friends</MyFriends>
          </TextHolder>

          <FriendHolder>
              <SearchBar
              style={{
                  width:"80%",
                  borderRadius:40
              }}
              placeholder="Add Friends"
              />

              <UserHolder>
                  <UserInfo>
                      <UserImage src="happy.svg"/>
                      <UserName>KellyBelly@gmail.com</UserName>
                  </UserInfo>
                  <UserAdd>
                      <AddImage onClick={()=>{ClickAddFriend2(!addFriend2)}} src={src2}/>
                  </UserAdd>
              </UserHolder>

              <UserHolder>
                  <UserInfo>
                      <UserImage src="happy.svg"/>
                      <UserName>KellyBelly@gmail.com</UserName>
                  </UserInfo>
                  <UserAdd>
                      <AddImage onClick={()=>{ClickAddFriend(!addFriend)}} src={src}/>
                  </UserAdd>
              </UserHolder>
          </FriendHolder>

        </Holder2>
        <ResponsiveMenuu/>
  
      </Container>
    )
  }