import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';

const Container = styled.div`
position:fixed;
bottom:0;
z-index: 2;
display:none;
flex-direction:row;
align-items:center;
justify-content:center;
background-color:#F2F3F7;
height:10vh;
width:100%;

@media only screen and (max-width: 768px) {
    display:flex;
  }
`


const MyJournal = styled.img`
width:20px;
height:20px;
`

const MoodBooster = styled.img`
width:20px;
height:20px;
`
const Badge = styled.img`
width:20px;
height:20px;
`

const Dashboard = styled.img`
width:20px;
height:20px;
`

const Trends = styled.img`
width:20px;
height:20px;
`

const Chat = styled.img`
width:20px;
height:20px;
`

const Circle1 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle2 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle3 = styled.div `
display:flex;
justify-content:center;
align-items:center;
height:50px;
width:50px;
border-radius:100px;
`

const Circle4 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle5 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle6 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`
// for button press inset 0px 0px 4px rgba(0, 0, 0, 0.25)


const Holder2 = styled.div`
display:flex;
width:100%;
flex-direction:row;
align-items:center;
justify-content:center;
gap:10px;

`

const ResponsiveMenuu = ({
    dashsrc="/homeNormal.svg",
    journsrc="/journalNormal.svg",
    moodsrc="/moodNormal.svg",
    badgesrc="/badgeNormal.svg",
    chatsrc="/chatt.svg",
    trendsrc="/trends.svg",
}) => {
    return <Container>
        <Holder2>

            <Circle1 as={motion.div} onClick={()=>router.push('/dashboard')} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <Dashboard src={dashsrc} />
            </Circle1>
            <Circle2 as={motion.div} onClick={()=>router.push('/journal')}  whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <MyJournal src={journsrc}/>
            </Circle2>
            <Circle3 as={motion.div} onClick={()=>router.push('/mood')} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <MoodBooster src={moodsrc}/>
            </Circle3>
            <Circle4 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/badges')}>
                <Chat src={badgesrc} />
            </Circle4>
            <Circle5 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/messaging')}>
                <Trends src={chatsrc} />
            </Circle5>
            <Circle6 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/trends')}>
                <Trends src={trendsrc} />
            </Circle6>
        </Holder2>
    </Container>
}

export default ResponsiveMenuu;