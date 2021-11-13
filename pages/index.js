import styled from 'styled-components';
import Button from '../comps/Button';
import router, {useRouter} from 'next/router';

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:100px;
flex-wrap:wrap;
background-image: url("/sunset.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

const Holder = styled.div `
flex-wrap:wrap;
display:flex;
height:70%;
padding-bottom:100px;
`

const WelcomeHeader = styled.div `
display:flex;
flex-direction:column;
flex-wrap:wrap;
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
padding-left:10%;
width:100vw;
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
font-size:80px;
margin-bottom:-20px;
font-weight: 800;
color:#3C2743;

`

const Text = styled.p `
font-size:25px;
font-weight: 200;
color:#3C2743;
width:50%;
`




export default function Home({
}) {
  return (
    <Container>
      <Holder>
        <Cont1>
          <WelcomeHeader>
            <Header>Welcome to Mindful</Header>
            <Text>Anyone can have a bad day, but it doesn’t mean that it’s a bad life. How we respond to it and take care of our mental health are what’s important.</Text>
          </WelcomeHeader>
          <ButtonHolder>
            <Button routeTo="./profile" ButtonText="Signup"/>
            <Button routeTo="./profile" variant="outlined" ButtonText="Login"/>
          </ButtonHolder>
        </Cont1>
      </Holder>
    </Container>
  )
}
