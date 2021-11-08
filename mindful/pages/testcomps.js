import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeaderText from '../comps/HeaderText'
import CompanionAvatar from '../comps/CompanionAvatar'
import AboutCompanion from '../comps/AboutCompanion'
import JokesCard from '../comps/JokeCard'
import TalkButton from '../comps/TalkButton'
import NavBar from '../comps/Navigation'
import Card from '../comps/Card'
import Buttons from '../comps/Button'
import Breathe from '../comps/Breathe'
import AddFriend from '../comps/AddFriend'
import Menu from '../comps/Menu'
import LockedBadges from '../comps/LockedBadges'
import EarnedBadges from '../comps/EarnedBadges'
import styled from 'styled-components';


const Cont = styled.div `
display:flex;
flex-direction:column;
`

export default function TestComps() {
  return (
    <Cont>
      <Menu/>
        <a href="/badges">Badges</a>
        <a href="/dashboard">dashboard</a>
        <a href="/friendprofile">friendprofile</a>
        <a href="/index">intro</a>
        <a href="/journal">journal</a>
        <a href="/mood">mood</a>
        <a href="/myfriend">myfriend</a>
        <a href="/myprofile">myprofile</a>
        <a href="/privacypolicy">privacypolicy</a>
        <a href="/profile">profile</a>
        <a href="/setup">setup</a>
        <a href="/talk">talk</a>
        <a href="/testcomps">testcomps</a>
      <AddFriend/>
      <Breathe/>
      <NavBar/>
      <Card/>
      <JokesCard/>
      <HeaderText/>
      <CompanionAvatar/>
      <AboutCompanion/>
      <TalkButton/>
      <Buttons/>
      <LockedBadges/>
      <EarnedBadges/>
      <Buttons variant="outlined"/>
    </Cont>
  )
}
