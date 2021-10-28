import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import HeaderText from '../comps/HeaderText'
import CompanionAvatar from '../comps/CompanionAvatar'
import AboutCompanion from '../comps/AboutCompanion'
import TalkButton from '../comps/TalkButton'

const Container = styled.div `
.container {
    display:flex;
    padding-top:100px;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background: linear-gradient(125deg, rgba(166, 164, 248,1), rgba(255,255,255,0));
    color: white;
}

.Buttons {
    display:flex;
    flex-direction: row;
}
`;

export default function Talk() {
  return <Container>
    <div className="container">
      <HeaderText head="Who would you like to chat with?" text="Select a Bubble"/>

    <div className="Buttons">
      <TalkButton text="BC Crisis Centre" source="https://crisiscentre.bc.ca/wp-content/themes/crisiscentre/images/logo.png"/>
      <TalkButton/>
    </div>

    </div>
    </Container>
}