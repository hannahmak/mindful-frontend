import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';

const Container = styled.div `
    height:100vh
    width:100%;
    display: inline-grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 59px;
    grid-template-area: "menu feed feed moodbar";


`
const FeedCont = styled.div `
    height:100vh;
    width: 60vw;
    grid-area: feed;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 52px;

`

const Date = styled.div`   
    font-size: 18px;
    color:  #878FA2;
    padding-top: 24px;
`

const Greeting = styled.div`
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #0F2046;
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 90px;
`

export default function Feed() {
  return (
    <Container>
        {/* Column 1 */}
        <Menu/>

        {/* Column 2 */}
        <FeedCont>
            
            <Greeting>Good Morning Kelly</Greeting>
            <Date>Saturday, October 06</Date>
            <DashFeed feedsize={"24px"} feedweight={"800"}/>

            <Posts>
                <JournalPost></JournalPost>
                <JournalPost journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. "}/>
                <JournalPost journal={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi. Suspendisse pharetra vitae aliquet et accumsan, velit eget lacus sed. Donec lorem lacus fames vulputate mattis magna penatibus. Et rutrum a, sed penatibus ipsum. Hac nullam pharetra nisi, ultrices. Vulputate aliquam ac mi mi rhoncus a sagittis. Sodales cursus et commodo iaculis ultrices vitae suspendisse id metus. Lorem tellus, imperdiet eget amet nisi."}/>
            </Posts>
            

        </FeedCont>    

        {/* Column 3 */}
        <MoodBar/>

    </Container>
  )
}