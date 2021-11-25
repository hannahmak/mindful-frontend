import React from 'react';
import Image from "next/image";
import Button from '../comps/Button';
import Link from "next/link";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Router from 'next/router';
import Login from '../comps/Login';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";




function Profile() {
  const [setup1, setSetup1] =  useState(false)
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (setup1 === false) {
    setTimeout(() => {
      setSetup1(true)
    },2000)

    return <motion.div
    initial="pageInitial" transition={{delay:1.2}} animate="pageAnimate" variants={{
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
      <motion.div
      initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity:0
        },
        pageAnimate: {
          opacity:1,
        },
        
      }}
      >
        <h2>Hi <span>{user.name}</span></h2>
        <Image src={user.picture} alt={user.name} width={200} height={200} />
        <p>We're glad you're here!</p>
        {/* <h2>email: </h2><span>{user.email}</span> */}
        <h1>
          <Button routeTo="./journal" ButtonText="Go to dashboard" type="submit" />
          <Button routeTo="./api/auth/logout" ButtonText="Logout" type="submit" />
        </h1>
      </motion.div>
    )
  );
}

export default withPageAuthRequired(Profile);
