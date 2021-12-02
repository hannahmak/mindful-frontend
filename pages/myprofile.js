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
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import ResponsiveMenuu from "../comps/ResponsiveMenuu";

const Container = styled.div`
display:flex;
flex-direction:row;
  height: 100%;
  width: 100%;
`;
const ProfileCont = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;

const NewJournalCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width:95%;
`;

const NewJournalButton = styled.div`
  pointer: cursor;
  height: 35px;
  width: 55px;
  background: no-repeat url("/newJournal.svg");
`;


const Holder1 = styled.div`
display:flex;
width:8%;
@media only screen and (max-width: 1024px) {
  display:none;
}
`

const Holder2 = styled.div`
padding-top: 50px;
display:flex;
flex-direction:column;
width:70%;
align-items:center;
height:100vh;
gap:50px;

@media only screen and (max-width: 1024px) {
  width:100%;
}
`

const Holder3 = styled.div`
height:100vh;
width:22%;

@media only screen and (max-width: 1024px) {
  display:none;
}
`

const AvatarHolder = styled.div `
display:flex;
width:95%;
flex-wrap:wrap;
@media only screen and (max-width: 1024px) {
  width:85%;
}
`

const PostHolder = styled.div `
display:flex;
width:95%;
flex-direction:row;
align-items:center;
justify-content:center;

@media only screen and (max-width: 1024px) {
  width:85%;
}
`

const YourPost = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-start;
`

const Add = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-end;
`

const CardHolder = styled.div `
display:flex;
align-items:center;
justify-content:center;
width:100%;
`

const Rowholder = styled.div `
display:flex;
width:100%;
flex-direction:column;
align-items:center;
justify-content:center;

@media only screen and (max-width: 1024px) {
  flex-direction:column;
}





`

function MyProfile() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const moodIcon = ["", "/happy.svg", "/good.svg", "/indiff.svg", "/sad.svg", "/stressed.svg"];

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
        <AvatarHolder>
          <Avatar name={user.name} />
        </AvatarHolder>
        <ProfileCont>
            {/* <Button routeTo="./" ButtonText="Back to Home" />
            <Button routeTo="./talk" ButtonText="Go to chat" /> */}
            <PostHolder>
              <YourPost>
                <h1>My Journals</h1>
              </YourPost>
              <Add>
                <NewJournalButton onClick={() => router.push("/journal")} />
              </Add>

            </PostHolder>
            <CardHolder>
            <Rowholder>

              {posts.map(
                (post) =>
                  post.publish === 0 && (
                    <figure className={styles.myprofcont} key={post.id}>
                      <div className={styles.myprofmoodcont}>
                        <img className={styles.myprofmoodstyling}  src={moodIcon[post.mood]}></img>
                        <figcaption>
                            {moment(post.timestamp).format("MM/DD/YYYY")}
                          </figcaption>
                      </div>
                      <div className={styles.myprofinfoholder} >
                        <img className={styles.myprofpicpost} 
                          style={{ width: "100%" }}
                          src={`https://mindful-3.s3.us-west-2.amazonaws.com/${post.image_url}`}
                        ></img>
                        <figcaption>{post.description}</figcaption>

                        <div className={styles.myprofinfo}>
                          <figcaption className={styles.myproftag}>{JSON.parse(post.tags)}</figcaption>
                        </div>

                      </div>
                    </figure>
                  )
              )}
              </Rowholder>
            </CardHolder>
      </ProfileCont>
      <ResponsiveMenuu/>
      </Holder2>

      <Holder3>
        <MoodBar/>
      </Holder3>
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

export default withPageAuthRequired(MyProfile)