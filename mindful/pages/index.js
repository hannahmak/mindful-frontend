import styled from 'styled-components';
import Button from '../comps/Button';

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
background-color:red;
`

const Holder = styled.div `
`

const WelcomeHeader = styled.div `
`

const ButtonHolder = styled.div `
`

export default function Home() {
  return (
    <Container>
      <Holder>
        <WelcomeHeader>
          <h1>Welcome to Mindful</h1>
          <p>Invest in yourself and blah blah blah</p>
        </WelcomeHeader>
        <ButtonHolder>
          

        </ButtonHolder>

      </Holder>
      <Holder>

      </Holder>
    </Container>
  )
}
