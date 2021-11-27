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
import router, { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const FeedCont = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: 18px;
  color: #878fa2;
  padding-top: 24px;
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default function Feed() {
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
            <Posts>
              {/* {posts.map(
                (post) =>
                  post.publish === 0 && (
                    <figure key={post.id}>
                      <figcaption>{post.email}</figcaption>
                      <figcaption>{post.description}</figcaption>
                      <figcaption>
                        {moment(post.timestamp).format("YYYY-MMM-DD")}
                      </figcaption>
                      <img
                        style={{ width: 500 }}
                        src={`https://mindful-3.s3.us-west-2.amazonaws.com/${post.image_url}`}
                      ></img>
                      <h5>these are your tags: </h5>
                      <figcaption>{JSON.parse(post.tags)}</figcaption>
                      <h5>this is your mood: </h5>
                      <img
                        style={{ width: 100 }}
                        src={moodIcon[post.mood]}
                      ></img>
                    </figure>
                  )
              )} */}
              {posts.map(
                  (post) => {
                      post.publish === 0 && (
                          <JournalPost username={user.name} timestamp={moment(post.timestamp).format("YYYY-MMM-DD")} journal={post.description} source={moodIcon[post.mood]} />
                      )
                  }
              )}
              <JournalPost></JournalPost>
                        <JournalPost timestamp={"2021-Nov-26"} source={moodIcon[1]} journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. "}/>
                        <JournalPost journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi."}/>
                        {/* <JournalPost username={user.name} mood={}></JournalPost> */}
            </Posts>

            <div>
              <Button routeTo="./" ButtonText="Back to Home" />
              <Button routeTo="./talk" ButtonText="Go to chat" />
              <h1>This is Your Feed</h1>
              {posts.map(
                (post) =>
                  post.publish === 0 && (
                    <figure key={post.id}>
                      <figcaption>{post.email}</figcaption>
                      <figcaption>{post.description}</figcaption>
                      <figcaption>
                        {moment(post.timestamp).format("YYYY-MMM-DD")}
                      </figcaption>
                      <img
                        style={{ width: 500 }}
                        src={`https://mindful-3.s3.us-west-2.amazonaws.com/${post.image_url}`}
                      ></img>
                      <h5>these are your tags: </h5>
                      <figcaption>{JSON.parse(post.tags)}</figcaption>
                      <h5>this is your mood: </h5>
                      <img
                        style={{ width: 100 }}
                        src={moodIcon[post.mood]}
                      ></img>
                    </figure>
                  )
              )}
            </div>
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
