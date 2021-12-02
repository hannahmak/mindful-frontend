import styled from 'styled-components';
import Menu1 from '../comps/Menu1';
import ResponsiveMenuu from '../comps/ResponsiveMenuu';

const Container = styled.div `
    width:100%;
    display:flex;
    flex-direction:row;
    height:100%;
`

const NavCont = styled.div `
    display:flex;
    width:8%;
    @media only screen and (max-width: 1024px) {
    display:none;
    width:0%;
    }
`

export default function Dashboard() {
  return (
    <Container>
      <NavCont>
        <Menu1 journsrc="journalActive.svg"/>
      </NavCont>

        <ResponsiveMenuu journsrc="journalActive.svg"/>
    </Container>
  )
}