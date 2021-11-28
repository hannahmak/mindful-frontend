import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Avatar from "../comps/Avatar";
import Menu1 from "../comps/Menu1";
import MoodBar from "../comps/MoodBar";
import DashFeed from "../comps/DashFeed";
import JournalPost from "../comps/JournalPost";
import router, { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 59px;
  grid-template-area: "menu profile profile moodbar";
`;
const ProfileCont = styled.div`
  height: 100vh;
  width: 60vw;
  grid-area: profile;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 52px;
`;

const NewJournalCont = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NewJournalButton = styled.div`
  pointer: cursor;
  height: 55px;
  width: 55px;
  background: no-repeat url("/newJournal.svg");
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 90px;
`;
const PostsHeader = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #0f2046;
  margin-bottom: 54px;
`;

const Holder1 = styled.div`
width:8%;
`

const Holder2 = styled.div`
display:flex;
flex-direction:column;
width:92%;
align-items:center;
height:100vh;
gap:50px;
`

// const Holder3 = styled.div`
// height:100vh;
// width:22%;
// `

// const ProfDetails = styled.div`
// width:92%;
// `

// const MyJournal = styled.h1`
// color:#3C2743;
// `

// const Cont1 = styled.div`
// display:flex;
// flex-direction:column;
// width:80%;
// height:100vh;
// gap:50px;
// padding-top:10px;
// flex-wrap:wrap;
// `

// const JournalHolder = styled.div`
// display:flex;
// flex-wrap:wrap;
// width:100%;
// align-items:center;
// justify-content:center;
// gap:3%;

// `

export default function MyProfile() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const moodIcon = ["", "/happy.png", "/good.png", "/indifferent.png", "/sad.png", "/stressed.png"];

  const { user } = useUser();

  const getMyPost = async () => {
    console.log("user", user);
    const result = await axios.get("/mypost", {
      params: {
        userData: user,
      },
    });
    console.log('result', result.data);
    try {
      setLoading(true);
      setPosts(result.data.posts);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      setCounter(result.data.posts.length);
    }
  };

  useEffect(() => {
    if (!user) {
      console.log("no user");
      return;
    }
    getMyPost();
  }, [counter, user]);

  if (error) return "Error loading the page";
  return loading ? (
    "Page is loading"
  ) : (
    <Container>
      {/* Column 1 */}
      <Holder1>
        <Menu1 dashsrc="/homeActive.svg" />
      </Holder1>

      <Holder2>
      {/* Column 2 */}
      <ProfileCont>
        <NewJournalCont>
          <NewJournalButton onClick={() => router.push("/journal")} />
        </NewJournalCont>
        <Avatar name={user.name} />

        <div>
          <Button routeTo="./" ButtonText="Back to Home" />
          <Button routeTo="./talk" ButtonText="Go to chat" />
          <h1>This is Your Post1</h1>
          {posts.map(
            (post) =>
              post.publish === 0 && (
                <figure className={styles.myprofcont} key={post.id}>
                  <div>
                    <img style={{ width: 100 }} src={moodIcon[post.mood]}></img>
                  </div>
                  <div>
                    
                    
                    
                  </div>
                  {/* <figcaption>{post.description}</figcaption>
                  <figcaption>
                    {moment(post.timestamp).format("YYYY-MMM-DD")}
                  </figcaption>
                  <img
                    style={{ width: 500 }}
                    src={`https://mindful-3.s3.us-west-2.amazonaws.com/${post.image_url}`}
                  ></img>
                  <h5>these are your tags: </h5>
                  <figcaption>{JSON.parse(post.tags)}</figcaption>
                   */}
                </figure>
              )
          )}
        </div>
      </ProfileCont>
      </Holder2>

      {/* Column 3 */}
      {/* <MoodBar/> */}
    </Container>
    //   {/* <Holder1>
    //     <Menu press1="inset 0px 0px 4px rgba(0, 0, 0, 0.25)" />
    //   </Holder1>
    //   <Holder2>
    //     <Cont1>
    //       <ProfDetails>
    //         <Avatar />
    //       </ProfDetails>
    //       <MyJournal>My Journals</MyJournal>
    //       <JournalHolder>
    //         <div>
    //           <Button routeTo="./" ButtonText="Back to Home" />
    //           <Button routeTo="./talk" ButtonText="Go to chat" />
    //           <h1>This is Your Post</h1>
    //           {posts.map((post) => (
    //             <figure key={post.id}>
    //               <figcaption>{post.description}</figcaption>
    //               <figcaption>{post.timestamp}</figcaption>
    //               <img src={post.image_url}></img>
    //               <figcaption>{post.tags}</figcaption>
    //             </figure>
    //           ))}
    //         </div>
    //       </JournalHolder>
    //     </Cont1>
    //   </Holder2>
    //   <Holder3>
    //     <MoodBar />
    //   </Holder3>*/}
  );
}
