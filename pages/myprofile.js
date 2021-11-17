import React, { useState, useEffect } from 'react';

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
width:100%;
display:flex;
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
        <Menu press1="inset 0px 0px 4px rgba(0, 0, 0, 0.25)" />
      </Holder1>
      <Holder2>
        <Cont1>
          <ProfDetails>
            <Avatar />
          </ProfDetails>
          <MyJournal>My Journals</MyJournal>
          <JournalHolder>
            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="/feedfill.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    November 16, 2021
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Not a good day, I haven&apos;t seen my friends in weeks and I really miss them ):
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button style={{ borderRadius: 60, color: "#2F2E4C", borderColor: "#2F2E4C" }} variant="outlined" size="small" color="primary">
                  Like
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 480 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image="/feedfill2.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    November 17, 2021
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    started off as super swag day went to my project 2 class and was not late. A bird pooped on me tho, not cool.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button style={{ borderRadius: 60, color: "#2F2E4C", borderColor: "#2F2E4C" }} variant="outlined" size="small" color="primary">
                  Like
                </Button>
              </CardActions>
            </Card>
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
