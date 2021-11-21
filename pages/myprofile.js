import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import router, {useRouter} from 'next/router';


const Container = styled.div `
    height:100vh;
    width:100%;
    display: inline-grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 59px;
    grid-template-area: "menu profile profile moodbar";
`
const ProfileCont = styled.div `
    height:100vh;
    width: 60vw;
    grid-area: profile;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 52px;
`

const NewJournalCont = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NewJournalButton = styled.div`
  pointer: cursor;
  height: 55px;
  width: 55px;
  background: no-repeat url('/newJournal.svg');
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 90px;
`
const PostsHeader = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #0F2046;
  margin-bottom: 54px;
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
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  const getPost = async () => {
    const result = await axios.get("/posts");
    try {
      setLoading(true);
      setPosts(result.data.posts);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      setCounter(result.data.posts.length);
    }
  }
  useEffect(() => {
    getPost();
  }, [counter]);

  if (error) return "Error loading the page";
  return loading ? (
    "Page is loading"
  ) : (
    <Container>
    
        {/* Column 1 */}
        <Menu dashsrc= '/homeActive.svg'/>

        {/* Column 2 */}
        <ProfileCont>
          <NewJournalCont>
            <NewJournalButton onClick={()=>router.push('/journal')}/>
          </NewJournalCont>
          <Avatar name="Kelly Menzul" />
          <Posts>
            <PostsHeader>My Journals</PostsHeader>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
          </Posts>
        </ProfileCont>

      

        {/* Column 3 */}
        <MoodBar/>
            
            <div>
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

    </Container>
  )
}
