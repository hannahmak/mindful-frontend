import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderText from '../comps/HeaderText'
import CompanionAvatar from '../comps/CompanionAvatar'
import AboutCompanion from '../comps/AboutCompanion'
<<<<<<< HEAD
import JokesCard from '../comps/JokeCard'
=======
import TalkButton from '../comps/TalkButton'
>>>>>>> 79741104319e6cb75c5e211db7518c225676bfb1

export default function Home() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <JokesCard/>
=======
      <HeaderText/>
      <CompanionAvatar/>
      <AboutCompanion/>
      <TalkButton/>
      


    </div>
  )
}
