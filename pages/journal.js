import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import router, { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import Menu1 from "../comps/Menu1";
import Button from '../comps/Button';
import { motion } from "framer-motion";


export default function Journal() {
  



  const [file, setFile] = useState();
  //const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState(["Tag1"]);
  const [mood, setMood] = useState(0);
  const [publish, setPublish] = useState(0);

  const { user } = useUser();

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
        <Menu1 journsrc="journalActive.svg"/>
      </div>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Journal</h1> */}

        <form className={styles.formcont} id="newJournalForm" onSubmit={submit}>
          <div className={styles.moodcont}>
            <div className={styles.titleholder}>
              <h4 className={styles.subtitleholder}>How are you feeling today?</h4>
            </div>
            <div className={styles.mood}>
              <motion.label 
              whileHover={{
                scale:1.05,
                transition: {
                    duration:.1,
                }
              }} 
              className={styles.moodlabel}  onClick={() => setMood(1)}>
                <img className={styles.moodimages}
                  src="/happyearth.svg"              
                />
                <p className={styles.mooddesc}>Happy</p>
                <input className={styles.input} type="radio" name="mood" value="1" />
              </motion.label>

              <motion.label 
              whileHover={{
                scale:1.05,
                transition: {
                    duration:.1,
                }
              }} 
              className={styles.moodlabel}  onClick={() => setMood(2)}>
                <img className={styles.moodimages}
                  src="/okayearth.svg"               
                />
                <p className={styles.mooddesc}>Okay</p>
                <input className={styles.input} type="radio" name="mood" value="2" />
              </motion.label>

              <motion.label 
              whileHover={{
                scale:1.05,
                transition: {
                    duration:.1,
                }
              }} 
              className={styles.moodlabel}  onClick={() => setMood(3)}>
                <img id={styles.sad} className={styles.moodimages}
                  src="/sadearth.svg"

                />
                <p className={styles.mooddesc}>Sad</p>
                <input className={styles.input} type="radio" name="mood" value="3" />
              </motion.label>

              <motion.label 
              whileHover={{
                scale:1.05,
                transition: {
                    duration:.1,
                }
              }} 
              className={styles.moodlabel}  onClick={() => setMood(4)}>
                <img className={styles.moodimages}
                  src="/angryearth.svg"
                />
                <p className={styles.mooddesc}>Angry</p>
                <input className={styles.input} type="radio" name="mood" value="3" />
              </motion.label>
            </div>
          </div>

          <div className={styles.imagecont}>
            <h4 className={styles.subtitleholder}>Upload an Image</h4>
            <label className={styles.labelimageupload} htmlFor="imageupload">
              <img className={styles.cameraimage} src="/camera.svg"/>
              <p>Add image</p>
            </label>
            <input className={styles.imageuploads} id="imageupload"
              filename={file}
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              accept="image/*"
            ></input>
          </div>


          <div className={styles.descriptioncont}>
            <h4 className={styles.subtitleholder}>Description</h4>
            <textarea className={styles.textareajournal}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <div className="privatecont">
            <h4 className={styles.subtitleholder}>Click here to make this post private</h4>
            {/* 1 means private or not publish; 0 means publish */}
            <input
              type="checkbox"
              id="publish"
              name="publish"
              value="publish"
              onClick={() => makePublic()}
            />
            <label htmlFor="publish"> Make this post private</label>
          </div>

          <div className="tagscont">
            <h4 className={styles.subtitleholder}>Tags</h4>
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
          </div>

          <div className="submitcont">
            <h4 className={styles.subtitleholder}>Click here to submit</h4>
            {/* <Button routeTo="./myprofile" ButtonText="Submit" type="submit" /> */}
            <button type="submit">Submit</button>
          </div>
        </form>

        
      </main>
    </div>
  );
}


