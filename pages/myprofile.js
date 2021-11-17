import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Container = styled.div`
height:100vh
max-width:100%;
display:flex;
flex-wrap:wrap;
flex-direction:row;

`

const Holder1 = styled.div`
width:8%;
`

const Holder2 = styled.div`
display:flex;
flex-direction:column;
width:70%;
align-items:center;
height:100vh;
gap:50px;
`

const Holder3 = styled.div`
height:100vh;
width:22%;
`

const ProfDetails = styled.div`
width:92%;
`

const MyJournal = styled.h1`
color:#3C2743;
`

const Cont1 = styled.div`
display:flex;
flex-direction:column;
width:80%;
height:100vh;
gap:50px;
padding-top:10px;
flex-wrap:wrap;
`

const JournalHolder = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
align-items:center;
justify-content:center;
gap:3%;

`


export default function MyProfile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("/posts");
      setPosts(result.data.posts);
    })();
    console.log("posts", posts);
  }, []);
  return (
    <Container>
      <Holder1>
        <Menu />
      </Holder1>
      <Holder2>
        <Cont1>
          <ProfDetails>
            <Avatar />
          </ProfDetails>
          <MyJournal>My Journals</MyJournal>
          <JournalHolder>
            <div>
              <Button routeTo="./" ButtonText="Back to Home" />
              <Button routeTo="./talk" ButtonText="Go to chat" />
              <h1>This is Your Post</h1>
              {posts.map((post) => (
                <figure key={post.id}>
                  <figcaption>{post.description}</figcaption>
                  <figcaption>{post.timestamp}</figcaption>
                  <img src={post.image_url}></img>
                  <figcaption>{post.tags}</figcaption>
                </figure>
              ))}
            </div>
          </JournalHolder>
        </Cont1>
      </Holder2>
      <Holder3>
        <MoodBar />
      </Holder3>
    </Container>
  )
}
