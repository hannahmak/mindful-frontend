import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import Menu from '../comps/Menu';
import MoodBar from '../comps/MoodBar';
import Card from '../comps/Card';
import DashFeed from '../comps/DashFeed';
import JournalPost from '../comps/JournalPost';
import router, {useRouter} from 'next/router';

const Container = styled.div `
    height:100vh
    width:100%;
    display: inline-grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 59px;
    grid-template-area: "menu profile profile moodbar";
`
const ProfileCont = styled.div `
    height:100vh;
    width: 60vw;
    grid-area: profile;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-top: 52px;
`

const NewJournalCont = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NewJournalButton = styled.div`
  pointer: cursor;
  height: 55px;
  width: 55px;
  background: no-repeat url('/newJournal.svg');
`

const Posts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 90px;
`
const PostsHeader = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #0F2046;
  margin-bottom: 54px;
`



export default function MyProfile() {
  return (
    <Container>
        {/* Column 1 */}
        <Menu dashsrc= '/homeActive.svg'/>

        {/* Column 2 */}
        <ProfileCont>
          <NewJournalCont>
            <NewJournalButton onClick={()=>router.push('/journal')}/>
          </NewJournalCont>
          <Avatar name="Kelly Menzul" />
          <Posts>
            <PostsHeader>My Journals</PostsHeader>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
            <JournalPost username="Kelly Menzul"/>
          </Posts>
        </ProfileCont>

      

        {/* Column 3 */}
        <MoodBar/>

    </Container>
  )
}