import styled from 'styled-components'
import Breathe from '../comps/Breathe'
import Card from '../comps/Card'

// background: linear-gradient(125deg, rgba(166, 164, 248,1), rgba(255,255,255,0));
// .Buttons {
//   display:flex;
//   flex-direction: row;
//   flex-wrap:wrap;

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:row;
align-items:center;
`;

const Holder = styled.div `
display:flex;
flex: 1;
flex-direction:row;
align-items:center;
justify-content: center;
`;

const Holder2 = styled.div `
display:flex;
flex: 1;
flex-direction:column;
align-items:space-between;
justify-content: space-between;
padding-right: 50px;
`;

const Cards = styled.div `
display:flex;
flex-direction:row;
align-items:space-between;
justify-content: space-between;
padding-top: 20px;
`;

const BreatheHolder = styled.div `
display:flex;
flex-direction: column;
align-items:center;
`;

const Tool = styled.div `
display:flex;
flex-direction: column;
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
border-radius: 25px;
width: 500px;
height: 500px;
`;

const Header = styled.div`
    padding: 20px;
    font-family: Quicksand;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;
`

const Breathing = styled.div`
display:flex;
justify-content: center;
align-items:center;
width: 100%;
`


export default function Mood() {
  return <Container>

    <Holder>
        <BreatheHolder>
            <Tool>
                <Header>Breathe Tool</Header>
                <Breathing>
                    <Breathe/>
                </Breathing>
            </Tool>
        </BreatheHolder>
    </Holder>

    <Holder2>
      <Card text="Badges" width="700px" height="210px"/>
      <Cards>
        <Card text="Tell a Joke" width="330px" height="270px" src=''/>
        <Card text="Message a friend" width="330px" height="270px"/>
      </Cards>
    </Holder2>

    </Container>
}