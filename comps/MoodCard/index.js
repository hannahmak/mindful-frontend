import styled from 'styled-components';
import AvatarPicture from '../AvatarPicture';

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:93%;
padding:10px;
background: #FFFFFF;
box-shadow: 0px 0px 20px #F2F3F7;
border-radius: 25px;
height:12%;

`

const Holder1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
padding-bottom:10px;
`

const Holder2 = styled.div`
display:flex;
flex:1;
flex-direction:column;
justify-content:center;
align-items:left;
`

const Name = styled.h1`
font-size:15px;
margin-bottom:0px;
`

const Mood = styled.p`
font-size:10px;
`





const MoodCard = ({
    name="[name]",
    mood="[mood]"

}) => {
    return <Container>
        <Holder1>
            <AvatarPicture width="70px" height="70px"/>
        </Holder1>
        <Holder2>
            <Name>{name}</Name>
            <Mood>{mood}</Mood>
        </Holder2>
        
        

    </Container>
}

export default MoodCard;