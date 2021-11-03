import styled from 'styled-components';
import Button from '../comps/Button';

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
`

const Holder = styled.div `
flex-wrap:wrap;
display:flex;
height:70%;
padding-bottom:100px;
`

const WelcomeHeader = styled.div `
`

const ButtonHolder = styled.div `
display:flex;
flex-direction:row;
gap:30px;
`

const Image = styled.img `
width:100%;
`
const Cont1 = styled.div `
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
`

const Cont2 = styled.div `
height:100%;
display:flex;
justify-content:center;
`

const Header = styled.h1 `
font-size:70px;
margin-bottom:-20px;
`

const Text = styled.p `
font-size:30px;
`




export default function Home() {
  return (
    <Container>
      <Holder>
        <Cont1>
          <WelcomeHeader>
            <Header>Welcome to Mindful</Header>
            <Text>Invest in yourself and blah blah blah</Text>
          </WelcomeHeader>
          <ButtonHolder>
            <Button ButtonText="Signup"/>
            <Button variant="outlined" ButtonText="Login"/>
          </ButtonHolder>
        </Cont1>
      </Holder>
      <Holder>
        <Cont2>
          <Image src="/logo.png"/>
        </Cont2>
      </Holder>
    </Container>
  )
}
