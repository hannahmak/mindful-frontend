import styled from 'styled-components';
import SubtextText from '../comps/SubtextText';
import Menu from '../comps/Menu';

const Container =styled.div `
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
`
const Holder = styled.div `
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
border-radius: 25px;
width:70%;
padding:20px;
`

const Header = styled.h1 `
`

export default function PrivacyPolicy() {
  return (
    <Container>
        <Holder>
            <Header>Privacy Policy</Header>
            <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
            <SubtextText 
            subhead="What information does the Application obtain and how is it used?"
            text="minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore..."
            />
            <SubtextText 
            subhead="What information does the Application obtain and how is it used?"
            text="minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore..."
            />
            <SubtextText 
            subhead="What information does the Application obtain and how is it used?"
            text="minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore..."
            />
            <SubtextText 
            subhead="What information does the Application obtain and how is it used?"
            text="minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore..."
            />
        </Holder>
      


    </Container>
  )
}
