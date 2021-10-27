import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderText from '../comps/HeaderText'
import CompanionAvatar from '../comps/CompanionAvatar'
import AboutCompanion from '../comps/AboutCompanion'
import JokesCard from '../comps/JokeCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <JokesCard/>

    </div>
  )
}
