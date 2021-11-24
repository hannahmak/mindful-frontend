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
import Menu1 from '../comps/Menu1'
import LockedBadges from '../comps/LockedBadges'
import EarnedBadges from '../comps/EarnedBadges'
import styled from 'styled-components';
import Avatar from '../comps/Avatar';
import ResponsiveMenu from '../comps/ResponsiveMenu'
import ResponsiveMenuu from '../comps/ResponsiveMenuu'
import QuoteCard from '../comps/QuoteCard'
import { useState } from 'react'



const Cont = styled.div `
display:flex;
flex-direction:column;
`

export default function TestComps() {
  const GetQuote = async ()=> {
    const result = await axios.get("https://type.fit/api/quotes");
    console.log(result.data)
  }

  const [Quote, setQuote] = useState("hi")
  return (
    <Cont>
      <QuoteCard quote={Quote}/>
      <ResponsiveMenuu/>
      <ResponsiveMenu/>
      
      <Avatar/>
      

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
