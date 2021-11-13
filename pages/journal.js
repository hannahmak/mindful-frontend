import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Journal() {
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/posts");
      setPosts(result.data.posts);
    })();
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("title", title);
    data.append("description", description);
    const result = axios.post("/posts", data);
    console.log(result);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Journal</h1>
        <form id="newJournalForm" onSubmit={submit}>
          <input
            filename={file}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            accept="image/*"
          ></input>
          <h4>Title</h4>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          ></input>
          <h4>Description</h4>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Journal starts"
          ></input>
          <h4>Click here to submit</h4>
          <button type="submit">Submit</button>
        </form>
        <div>
          <h1>This is Your Post</h1>
          {posts.map((post) => (
            <figure key={post.id}>
              <figcaption>{post.title}</figcaption>
              <figcaption>{post.description}</figcaption>
              <figcaption>{post.timestamp}</figcaption>
              <Image src={post.image_url}></Image>
            </figure>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </footer>
    </div>
  );
}
