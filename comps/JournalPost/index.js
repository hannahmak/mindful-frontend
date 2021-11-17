import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import AvatarPicture from '../AvatarPicture'
import Tag from '../Tag';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
    margin-bottom: 52px;
`

const PostCont = styled.div`
    display:flex;
    justify-content: flex-start;
    margin: 24px;      
`

const MoodCont = styled.div`
    display: flex;
    flex-direction: row;
    gap: 29px;
`

const TextCont = styled.div`

`

const UserName = styled.div`
    font-family: Inter;
    font-weight: bold;
    font-size: 18px;
    color: #0F2046;
`

const Mood = styled.div`
    margin-top: 8px;
    font-family: Inter;
    font-weight: normal;
    font-size: 13px;
    color: #878FA2;
`

const Journal = styled.div`
    margin-top: 13px;
    margin-bottom:40px;
    font-family: Inter;
    font-weight: normal;
    font-size: 14px;
    color: #0F2046;
`



const JournalPost = ({
    username="Nick Law",
    mood="Happy",
    journal="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis lacinia eget urna, quam facilisis. Aliquet enim ullamcorper id non metus placerat. Volutpat volutpat nec dignissim fermentum. Nec suspendisse vitae lectus feugiat nunc. Habitant urna, urna tortor in aliquam. At nulla in at rhoncus. Etiam ultricies faucibus tellus vitae urna. Et pellentesque nisi, urna turpis vel consectetur magna risus. Vitae odio eu cras sed maecenas ac felis.",

}) => {
    return <Container>
            <PostCont>
                <MoodCont>
                    <AvatarPicture width={"76px"} height={"76px"}/>
                    <TextCont>
                        <UserName>{username}</UserName>
                        <Mood>{mood}</Mood>
                        <Journal>{journal}</Journal>

                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                        <Tag></Tag>
                    </TextCont>
                </MoodCont>
    
            </PostCont>
        </Container>
}
export default JournalPost;