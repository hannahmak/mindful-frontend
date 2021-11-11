import styled from 'styled-components';
import MoodUpdate from '../MoodUpdate';
import MoodCard from '../MoodCard';
import Avatar from '../Avatar';

const Container = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:15%;
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
        

    </Container>
}

export default MoodBar;