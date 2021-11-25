import React from 'react';
import Image from "next/image";
import { Button } from '@mui/material';
import Link from "next/link";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import router, {useRouter} from 'next/router';
import Login from '../comps/Login';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { styled } from '@mui/system';
import { Button as ChatButton } from "@mui/material";
import styled from 'styled-components';
import styles from "../styles/Home.module.css";
import AuthService from '../services/AuthService';	
import Router from 'next/router';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


const checkIfUserAlreadyStoreProfile = () => {	
	const profile = localStorage.getItem('hasStoreProfile');	
	return profile ? true : false;	
};

function Profile() {
	const authService = new AuthService();
	const [setup1, setSetup1] =  useState(false)
	const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },3000)

    return <motion.div
    className={styles.profileloading}
    initial="pageInitial" transition={{delay:2.5}} animate="pageAnimate" variants={{
      pageAnimate: {
        opacity:0,
      },
    }}
    >
      <Login/>
    </motion.div>
  }
  
  return (
    user && (
      <motion.div className={styles.profilecontainer}
      initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity:0
        },
        pageAnimate: {
          opacity:1,
        },
        
      }}
      >
        <Image className={styles.profileimage} src={user.picture} alt={user.name} width={200} height={200}/>
        <div className={styles.textholderprofile}>
          <h2 className={styles.greetingprofile}>Hey <span className={styles.profilename}> {user.name} </span></h2>
          <p className={styles.profiletext}>We&apos;re so glad you&apos;re here!</p>
        </div>
        {/* <h2>email: </h2><span>{user.email}</span> */}
        <div className={styles.profilebuttonholder}>
        <Button onClick={()=>router.push('/dashboard')} style={{width:250, height:50, borderRadius:60, backgroundColor:"#0F2046"}} routeto="./profile" variant="contained">Go to dashboard</Button>
        <Button onClick={()=>router.push('/api/auth/logout')} style={{width:250, height:50, borderRadius:60, color:"#0F2046", borderColor:"#0F2046"}} routeto="./profile" variant="outlined">Logout</Button>
          {/* <Button style={{width:250, height:50, borderRadius:60, backgroundColor:"#0F2046"}} variant="contained"  routeTo="./dashboard" ButtonText="Go to dashboard" type="submit" />
          <Button routeTo="./api/auth/logout" ButtonText="Logout" type="submit" /> */}
		  <Link href="/chat">
					<ChatButton
						sx={{
							background: 'skyblue',
							bottom: 30,
							color: 'white',
							position: 'fixed',
							right: 50,
						}}
					>
						<ChatBubbleIcon sx={{ color: 'white' }} /> Go To Chat
					</ChatButton>
				</Link>
        </div>
      </motion.div>
    )
  );
}

export default withPageAuthRequired(Profile);
