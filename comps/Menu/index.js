import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';

const Container = styled.div`
    position:fixed;
    z-index: 2;
    display:flex;
    flex-direction:column;
    background-color:#F2F3F7;
    height:100vh;
    width:144px;
    grid-area: menu;
`
const Holder1 = styled.div`
    display:flex;
    flex:1;
    width:100%;
    justify-content:center;
`

const Images = styled.img`
    height:124px;
    width:124px;
`

const Dashboard = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.dashsrc}');
    border: none;
`
const Journal = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.journsrc}');
    border: none;
`

const Mood = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.moodsrc}');
    border: none;
`

const Badge = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.badgesrc}');
    border: none;
`

const Trends = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.trendsrc}');
    border: none;
`

const Chat = styled.div`
    width:24px;
    height:24px;
    background: no-repeat url('${props=>props.chatsrc}');
    border: none;
`

const Circle = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    background: #F2F3F7;
    box-shadow:${props=>props.press1};
    height:50px;
    width:50px;
    border-radius:100px;
`

const Holder2 = styled.div`
    display:flex;
    flex:4;
    flex-direction:column;
    align-items:center;
    justify-contnet:center;
    gap:90px;
`

const Menu = ({
    dashsrc="/homeNormal.svg",
    journsrc="/journalNormal.svg",
    moodsrc="/moodNormal.svg",
    badgesrc="/badgeNormal.svg",
    chatsrc="/chatt.svg",
    trendsrc="/trends.svg",
}) => {
    return <Container>
        <Holder1>
            <Images src="/logo.svg"/>
        </Holder1>
        <Holder2>
            <Circle>
                <Dashboard onClick={()=>router.push('/dashboard')} dashsrc={dashsrc} />
            </Circle>
            <Circle onClick={()=>router.push('/journal')} >
                <Journal journsrc={journsrc} />
            </Circle>
            <Circle onClick={()=>router.push('/mood')} >
                <Mood moodsrc={moodsrc} />
            </Circle>
            <Circle onClick={()=>router.push('/badges')} >
                <Badge badgesrc={badgesrc} />
            </Circle>
            <Circle onClick={()=>router.push('/talk')}>
                <Chat chatsrc={chatsrc} />
            </Circle>
            <Circle onClick={()=>router.push('#')}>
                <Trends trendsrc={trendsrc}/>
            </Circle>
        </Holder2>
    </Container>
}

export default Menu;