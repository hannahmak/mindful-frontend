import styled from 'styled-components';
import MoodUpdate from '../MoodUpdate';
import MoodCard from '../MoodCard';
import Avatar from '../Avatar';
import Moods from '../Moods';
import router, {useRouter} from 'next/router';

const Container = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:22%;
background-color:#F9FBFC;
position:fixed;
z-index: 2;
align-items:center;
gap:30px;
`



const MoodBar = ({

}) => {
    return <Container>
            <MoodUpdate/>
            <MoodCard/>
        <MoodUpdate subhead="Update Mood" text="Update"/>
        <Moods src="check.svg"/>
        <Moods/>
        <Moods/>
        <Moods/>
        <Moods/>
        

    </Container>
}

export default MoodBar;