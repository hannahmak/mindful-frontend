import styled from 'styled-components';
import Menu1 from '../comps/Menu1';
import MoodBar from '../comps/MoodBar';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import Greeting from '../comps/Greeting';

const Container = styled.div `
width:100%;
display:flex;
flex-direction:row;
height:100%;


`
const FeedCont = styled.div `
    display: flex;
    flex-direction: column;

`

const Date = styled.div`   
    font-size: 18px;
    color:  #878FA2;
    padding-top: 24px;
`



const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Holder1 = styled.div `
display:flex;
width:8%;

@media only screen and (max-width: 768px) {
    display:none;
    width:0%;
  }
`


const Holder2 = styled.div `
display:flex;
padding:40px;
flex-direction:column;
flex-wrap:wrap;
width:70%;
height:100%;
align-items:center;
justify-content:center;
gap:10px;

@media only screen and (max-width: 768px) {
    width:100%;
  }
`

const Holder3 = styled.div `
display:flex;
width:22%;

@media only screen and (max-width: 768px) {
    display:none;
    width:0%;
  }
`

const Row = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:left;
gap:10px;
`

const Row0 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:flex-end;
gap:10px;
`

const Row1 = styled.div `
display:flex;
width:100%;
align-items:center;
justify-content:center;
gap:10px;
`

export default function Feed() {
  return (
    <Container>
        {/* Column 1 */}
        <Holder1>
            <Menu1/>
        </Holder1>

        {/* Column 2 */}
        <Holder2>
            <Row>
                <Greeting/>
            </Row>
            <Row0>
                <DashFeed feedsize={"24px"} feedweight={"800"}/>
            </Row0>
            <Row1>
                <FeedCont>
                    <Posts>
                        <JournalPost></JournalPost>
                        <JournalPost journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. "}/>
                        <JournalPost journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi."}/>
                    </Posts>
                </FeedCont>    
            </Row1>

        </Holder2>

        {/* Column 3 */}
        <Holder3>
            <MoodBar/>
        </Holder3>

    </Container>
  )
}