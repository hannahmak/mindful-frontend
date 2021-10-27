import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderText from '../comps/HeaderText'
import CompanionAvatar from '../comps/CompanionAvatar'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeaderText/>
      <CompanionAvatar/>
      

    </div>
  )
}
