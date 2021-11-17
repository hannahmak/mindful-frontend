import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import { useState, useEffect } from "react";
import axios from "axios";
import Router from 'next/router';
import Button from '../comps/Button';

const Container = styled.div `
height:100vh
width:100%;
display:flex;
flex-direction:row;
`

const Holder1 = styled.div `
width:8%;
`

const Holder2 = styled.div `
display:flex;
flex-direction:column;
width:70%;
height:100vh;
padding:40px;
gap:50px;
`

const Holder3 = styled.div `
height:100vh;
width:22%;
`

const ProfDetails = styled.div `
width:92%;
`

const MyJournal = styled.h1 `
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
        <ProfDetails>
          <Avatar/>
        </ProfDetails>
        <MyJournal>My Journals</MyJournal>
        <div>
        <Button routeTo="./" ButtonText="Back to Home"/>
        <Button routeTo="./talk" ButtonText="Go to chat"/>
        {/* <button type="submit"onClick={() => Router.push('/')}>Back to Home</button> 
        <button type="submit"onClick={() => Router.push('/talk')}>Go to chat</button>  */}
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
      </Holder2>
      <Holder3>
        <MoodBar/>
      </Holder3>
    </Container>
  )
}
