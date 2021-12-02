import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import router, { useRouter } from "next/router";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Menu1 from '../comps/Menu1';
import ResponsiveMenuu from '../comps/ResponsiveMenuu';

import styles from "../styles/Home.module.css";

const Container = styled.div `
    width:100%;
    display:flex;
    flex-direction:row;
    height:100%;
`

const NavCont = styled.div `
    display:flex;
    width:8%;
    @media only screen and (max-width: 1024px) {
    display:none;
    width:0%;
    }
`

const JournalBar = styled.div`
    display: flex;
    padding-left: 48px;
    padding-top: 99px;
    flex-direction: row;
    flex-direction:column;
    height:100vh;
    width: 461px;
    background-color:#F9FBFC;
    color: #0F2046;
    @media only screen and (max-width: 1024px) {
        width:30%;
        align-items: center;
        padding-top: 20px;
    }
`

const JournalBarHeader = styled.div `
    align-self: flex-start;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    padding-bottom: 95px;
    @media only screen and (max-width: 1024px) {
        display:none;
    }
`

const MyJournalCont = styled.div`

`

const NewCont = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 127px;
`

const EntryCont = styled.div`

`
const EntryMood = styled.div`
    height: 79px;
    width: 79px;
    border-radius: 50px;
    margin-right: 30px;
    background-color: #B0D8D2;
`

const EntryContHeader = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    @media only screen and (max-width: 1024px) {
        display: none;        
    }
`

function MyJournal() {
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
            {/* Navigation 1 */}
            <NavCont>
                <Menu1 journsrc="journalActive.svg"/>
            </NavCont>

            <JournalBar>
                <JournalBarHeader>Journals</JournalBarHeader>

                <MyJournalCont>
                    <NewCont>
                        <EntryMood onClick={()=>router.push('/journal')}></EntryMood>
                        <EntryContHeader>New Journal</EntryContHeader>
                    </NewCont>
                    
                    {posts.map((post) => post.publish === 0 && (
                        <div className={styles.myjournal} key={post.id}>
                            <div className={styles.myjournalcont}>
                                <div ></div>
                                <img className={styles.myjournalmood} src={moodIcon[post.mood]}></img>
                                <div className={styles.myjournaltext}>
                                    <div className={styles.myjournaldate}>{moment(post.timestamp).format("dddd, MMMM Do ")}</div>
                                    <div className={styles.myjournaldesc}>{post.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </MyJournalCont>
            </JournalBar>
            
            {/* Navigation 2 */}
            <ResponsiveMenuu journsrc="journalActive.svg"/>
        </Container>
    );
}

export default withPageAuthRequired(MyJournal);