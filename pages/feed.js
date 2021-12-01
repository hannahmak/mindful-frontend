import styled from "styled-components";
import Menu1 from "../comps/Menu1";
import MoodBar from "../comps/MoodBar";
import DashFeed from "../comps/DashFeed";
import JournalPost from "../comps/JournalPost";
import Greeting from "../comps/Greeting";
import ResponsiveMenuu from "../comps/ResponsiveMenuu";
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import styles from "../styles/Home.module.css";
import router, { useRouter } from "next/router";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { style } from "@mui/system";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const FeedCont = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  align-items:center;
  justify-content:center;
`;


const Holder1 = styled.div`
  display: flex;
  width: 8%;

  @media only screen and (max-width: 768px) {
    display: none;
    width: 0%;
  }
`;

const Holder2 = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Holder3 = styled.div`
  display: flex;
  width: 22%;

  @media only screen and (max-width: 768px) {
    display: none;
    width: 0%;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;

const Row0 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const Row1 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Holder = styled.div `
display:flex;
width:100%;
`
function Feed() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const mood = ["", "Happy", "Good", "Indifferent", "Sad", "Stressed"];
  const moodIcon = [
    "",
    "/happy.png",
    "/good.png",
    "/indifferent.png",
    "/sad.png",
    "/stressed.png",
  ];
  const [testArr, setTestArr] = useState([]);

  const { user } = useUser();

  const getPost = async () => {
    console.log("feed get request");
    const result = await axios.get("/myfeed", {
      params: {
        userData: user,
      },
    });
    console.log("result", result);
    try {
      setLoading(true);
      console.log("setPost", result.data.posts);
      setPosts(result.data.posts);
      setTestArr([result.data.posts[0].tags])
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
    
    console.log("effect");
    getPost();
  }, [counter, user]);

  if (error) return "Error loading the page";
  return loading ? (
    "Page is loading"
  ) : (
    <Container>
      {/* Column 1 */}
      <Holder1>
        <Menu1 />
      </Holder1>

      {/* Column 2 */}
      <Holder2>
        <Row>
          {/* <Greeting/> */}
          <h1>Good Morning, {user.name}</h1>
        </Row>
        <Row0>
          <DashFeed feedsize={"24px"} feedweight={"800"} />
        </Row0>
        <Row1>
          <FeedCont>
              {/* <Button routeTo="./" ButtonText="Back to Home" />
              <Button routeTo="./talk" ButtonText="Go to chat" /> */}
              <Holder>
                <h1>This is Your Feed</h1>
              </Holder>
              {posts.map(
                (post) =>
                  post.publish === 0 && (
                    <figure className={styles.feedcont} key={post.id}>
                      <div className={styles.feedmoodcont}>
                        <img className={styles.feedmoodstyling}
                          src={moodIcon[post.mood]}
                        ></img>
                      </div>
                      <div className={styles.feedinfoholder}>
                        <figcaption className={styles.feedemail}>{post.email}</figcaption>
                        <img className={styles.feedpicpost}
                          style={{ width: "100%" }}
                          src={`https://mindful-3.s3.us-west-2.amazonaws.com/${post.image_url}`}
                        ></img>
                        <figcaption>{post.description}</figcaption>
                        <div className={styles.feedinfo}>
                          <figcaption className={styles.feedtag}>{JSON.parse(post.tags)}</figcaption>
                          <figcaption>
                          {moment(post.timestamp).format("YYYY-MMM-DD")}
                          </figcaption>

                        </div>
                      </div>
                    </figure>
                  )
              )}
          </FeedCont>
        </Row1>
      </Holder2>

      {/* Column 3 */}
      <Holder3>
        <MoodBar />
      </Holder3>
      <ResponsiveMenuu />
    </Container>
  );
}

export default withPageAuthRequired(Feed)