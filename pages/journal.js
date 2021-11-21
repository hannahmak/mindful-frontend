import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../comps/Menu";
import Button from "../comps/Button";
import router, { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";

export default function Journal() {
  const [file, setFile] = useState();
  //const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState(["Tag1"]);
  const [mood, setMood] = useState(0);
  const [publish, setPublish] = useState(0);

  const { user } = useUser();

  //const lists = document.getElementById("lists").appendChild('li')
  // useEffect(() => {
  //   (async () => {
  //     // const result = await axios.get("/posts");
  //     const result = await axios.get("/posts");
  //     setPosts(result.data.posts);
  //   })();
  //   console.log("effect");
  //   // lists.innerHTML = tag;
  // }, [tags]);
  // const {pathname} =Router
  // Router.push('./myprofile')

  const submit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    // data.append("title", title);
    data.append("description", description);
    data.append("tags", tags);
    data.append("mood", mood);
    data.append("publish", publish);
    data.append("email", user.email);
    const result = axios.post("/posts", data);
    console.log("result", result);

    router.push("./myprofile");
  };

  const removeTag = (i) => {
    // console.log("i", i);
    const newTags = tags.filter((e, idx) => idx !== i);
    // console.log("tags", tags)
    // console.log("newTags", newTags);
    setTags(newTags);
  };

  const addTag = (e) => {
   
    if (e.key === "Enter" ) {
      e.preventDefault()
      console.log("value", e.target.value);
      console.log("tag", tag);
      setTags([...tags, tag]);
      console.log("tags", tags);
      e.target.value = "";
    }
  };

  const makePublic = () => {
    if (publish === 0) {
      setPublish(1);
    } else {
      setPublish(0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.holder1}>
        <Menu press3="inset 0px 0px 4px rgba(0, 0, 0, 0.25)" />
      </div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Journal</h1>

        <form id="newJournalForm" onSubmit={submit}>
          <h4>Choose your mood</h4>
          <div class="mood">
            <label  onClick={() => setMood(1)}>
              <input type="radio" name="mood" value="1" />
              <Image
                width={100}
                height={100}
                src="/happy.png"              
              />
            </label>

            <label onClick={() => setMood(2)}>
              <input type="radio" name="mood" value="2" />
              <Image
                width={100}
                height={100}
                src="/sad.png"               
              />
            </label>

            <label onClick={() => setMood(3)}>
              <input type="radio" name="mood" value="3" />
              <Image
                width={100}
                height={100}
                src="/angry.png"
              />
            </label>
          </div>

          <br />
          <h4>Upload an Image</h4>
          <input
            filename={file}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
          <h4>Description</h4>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Journal starts here"
          ></textarea>

          <h4>Click here to make this post private</h4>

          {/* 1 means private or not publish; 0 means publish */}
          <input
            type="checkbox"
            id="publish"
            name="publish"
            value="publish"
            onClick={() => makePublic()}
          />
          <label for="publish"> Make this post private</label>
          <br />
          <h4>Tags</h4>

        <div id="content">
          <ul id="lists">
            {/* <li>{tags}</li> */}
            {tags.map((t, i) => (
              <li key={t}>
                {t}
                <button
                  type="button"
                  onClick={() => {
                    removeTag(i);
                  }}
                >
                  -
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Enter tags"
            onChange={(e) => setTag(e.target.value)}
            onKeyPress={addTag}
          ></input>
        </div>

          <h4>Click here to submit</h4>
          {/* <Button routeTo="./myprofile" ButtonText="Submit" type="submit" /> */}
          <button type="submit">Submit</button>
        </form>

        
      </main>
    </div>
  );
}


