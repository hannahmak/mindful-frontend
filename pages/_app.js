import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.css'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity:0
      },
      pageAnimate: {
        opacity:1,
      }
    }}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </motion.div>
  )
}

export default MyApp
