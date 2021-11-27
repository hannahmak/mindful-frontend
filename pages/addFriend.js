import styles from "../styles/Home.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function addFriend() {
    const [searchUser, setSearchUser] =useState('')
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);


  //const [emails, setEmails] = useState([]);
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState(true);

  // const getEmail = async () => {
  //     console.log('email get request');
  //   const result = await axios.get("/myfriend");
  //   console.log('result', result);
  //   try {
  //     setLoading(true);
  //     console.log('setEmails', result.data.emails)
  //     setEmails(result.data.emails);
  //   } catch (e) {
  //     setError(e);
  //   } finally {
  //     setLoading(false);
  //     setCounter(result.data.emails.length);
  //   }
  // };

  //   useEffect(() => {
  //     (async () => {
  //       const result = await axios.get("/myfriend");
  //       setEmails(result.data.emails);
  //     })();
  //     console.log("effect");
  //     getEmail();
  //     // lists.innerHTML = tag;
  //   });


//     <div className={styles.container}>
//       <main className={styles.main}>
//         <h1 className={styles.title}>Add Friends</h1>

//         <input 
//         type ='text' 
//         placeholder="search here...."
//         onChange={(event)=>{
//             setSearchUser(event.target.value);
//         }}>
//         </input>

//         {posts.filter(
//             (post)=>{
//             if(searchUser == ''){
//                 return post
//             }else if(post.email.toLowerCase().includes(searchUser.toLowerCase())){
//                 return post
//             }
//         }).map((post, key) =>{
//             return(
//                 <div key={key}>
//                     <p>{post.email}</p>
//                 </div>
//             )
//         })}


//       </main>
//     </div>
//   );
    
}
